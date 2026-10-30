#!/usr/bin/env node

import {
  mkdir,
  readFile,
  readdir,
  rename,
  unlink,
  writeFile,
} from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ledgerDirectory = path.join(root, 'docs/research/ledger');
const sourceDirectory = path.join(ledgerDirectory, 'sources');
const reviewDirectory = path.join(ledgerDirectory, 'reviews');
const batchDirectory = path.join(ledgerDirectory, 'batches');
const stateDirectory = process.env.GOSDIR_LEDGER_STATE_DIR
  ? path.resolve(process.env.GOSDIR_LEDGER_STATE_DIR)
  : path.join(root, '.ledger-state');
const candidateProjectionPath = path.join(stateDirectory, 'candidates.jsonl');
const checks = [
  'government_provenance',
  'public_source',
  'eligible_license',
  'primary_evidence',
];

function normalizedRepository(raw) {
  try {
    const url = new URL(raw);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    url.protocol = 'https:';
    url.hostname = url.hostname.toLowerCase();
    url.username = '';
    url.password = '';
    // Gitweb uses ?p=<repo>.git as the repository identity; dropping it
    // merges unrelated projects into the same host/path lead.
    const gitwebProject = url.searchParams.get('p');
    url.search = '';
    if (gitwebProject && /^[^\s?#]+\.git$/i.test(gitwebProject)) {
      url.searchParams.set('p', gitwebProject);
    }
    url.hash = '';
    url.pathname = url.pathname
      .replace(/\/+$/, '')
      .replace(/\.git$/i, '')
      .toLowerCase();
    return url.href;
  } catch {
    return null;
  }
}

async function readJsonl(file) {
  const input = await readFile(file, 'utf8');
  return input.split(/\r?\n/).flatMap((line, index) => {
    if (!line.trim()) return [];
    try {
      return [JSON.parse(line)];
    } catch (error) {
      throw new Error(
        `${path.relative(root, file)}:${index + 1}: ${error.message}`,
      );
    }
  });
}

function requireString(value, label) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${label} must be a nonempty string`);
  }
  return value;
}

function requireHttpUrl(value, label) {
  const raw = requireString(value, label);
  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`${label} must be an HTTP(S) URL`);
  }
  if (!['http:', 'https:'].includes(url.protocol))
    throw new Error(`${label} must be an HTTP(S) URL`);
  return raw;
}

async function loadCatalog() {
  const vite = await createServer({
    root,
    configFile: false,
    appType: 'custom',
    logLevel: 'silent',
    server: { middlewareMode: true },
  });
  try {
    const { projects } = await vite.ssrLoadModule(
      '/lib/catalog/software/index.ts',
    );
    const byRepository = new Map();
    for (const project of projects) {
      const key = normalizedRepository(project.repository);
      if (key) byRepository.set(key, project.id);
    }
    return byRepository;
  } finally {
    await vite.close();
  }
}

await mkdir(reviewDirectory, { recursive: true });
await mkdir(batchDirectory, { recursive: true });
await mkdir(stateDirectory, { recursive: true });
const sourceFiles = (await readdir(sourceDirectory))
  .filter((name) => name.endsWith('.jsonl'))
  .sort();
const reviewFiles = (await readdir(reviewDirectory))
  .filter((name) => name.endsWith('.jsonl'))
  .sort();
const batchFiles = (await readdir(batchDirectory))
  .filter((name) => name.endsWith('.jsonl'))
  .sort();
const [catalog, sourceRowsByFile, reviewRowsByFile, batchRowsByFile] =
  await Promise.all([
    loadCatalog(),
    Promise.all(
      sourceFiles.map(async (name) => [
        name,
        await readJsonl(path.join(sourceDirectory, name)),
      ]),
    ),
    Promise.all(
      reviewFiles.map(async (name) => [
        name,
        await readJsonl(path.join(reviewDirectory, name)),
      ]),
    ),
    Promise.all(
      batchFiles.map(async (name) => [
        name,
        await readJsonl(path.join(batchDirectory, name)),
      ]),
    ),
  ]);

const candidates = new Map();
const sourceCounts = {};
const sourceUrlSets = new Map();
for (const [filename, rows] of sourceRowsByFile) {
  const sourceId = filename.slice(0, -'.jsonl'.length);
  const manifestFile = path.join(sourceDirectory, `${sourceId}.manifest.json`);
  let manifest;
  try {
    manifest = JSON.parse(await readFile(manifestFile, 'utf8'));
  } catch (error) {
    throw new Error(
      `${sourceId}: missing or invalid source manifest: ${error.message}`,
    );
  }
  if (manifest.source_id !== sourceId)
    throw new Error(`${sourceId}: manifest source_id does not match filename`);
  const stats = {
    rows: 0,
    candidate_rows: 0,
    excluded_rows: 0,
    distinct_urls: 0,
  };
  const sourceUrls = new Set();
  const sourceRowIds = new Set();
  for (const [index, row] of rows.entries()) {
    const label = `${filename}:${index + 1}`;
    if (requireString(row.source_id, `${label}.source_id`) !== sourceId) {
      throw new Error(`${label}.source_id does not match filename`);
    }
    const sourceRowId = requireString(
      String(row.source_row_id ?? ''),
      `${label}.source_row_id`,
    );
    if (sourceRowIds.has(sourceRowId))
      throw new Error(`${label}: duplicate source_row_id ${sourceRowId}`);
    sourceRowIds.add(sourceRowId);
    const rawUrl = requireString(row.repository_url, `${label}.repository_url`);
    const key = normalizedRepository(rawUrl);
    if (!key) throw new Error(`${label}: invalid repository URL ${rawUrl}`);
    if (
      row.normalized_repository_url &&
      normalizedRepository(row.normalized_repository_url) !== key
    ) {
      throw new Error(
        `${label}: normalized repository URL does not match raw URL`,
      );
    }
    if (!['candidate', 'excluded'].includes(row.metadata_screen)) {
      throw new Error(
        `${label}: metadata_screen must be candidate or excluded`,
      );
    }
    stats.rows += 1;
    stats[`${row.metadata_screen}_rows`] += 1;
    sourceUrls.add(key);
    let candidate = candidates.get(key);
    if (!candidate) {
      candidate = {
        normalized_repository_url: key,
        observed_repository_urls: new Set(),
        titles: new Set(),
        source_rows: [],
        metadata_candidate: false,
        first_observed_at_utc: row.retrieved_at_utc ?? null,
        latest_observed_at_utc: row.retrieved_at_utc ?? null,
      };
      candidates.set(key, candidate);
    }
    candidate.observed_repository_urls.add(rawUrl);
    if (row.title) candidate.titles.add(String(row.title));
    candidate.metadata_candidate ||= row.metadata_screen === 'candidate';
    if (
      row.retrieved_at_utc &&
      (!candidate.first_observed_at_utc ||
        row.retrieved_at_utc < candidate.first_observed_at_utc)
    ) {
      candidate.first_observed_at_utc = row.retrieved_at_utc;
    }
    if (
      row.retrieved_at_utc &&
      (!candidate.latest_observed_at_utc ||
        row.retrieved_at_utc > candidate.latest_observed_at_utc)
    ) {
      candidate.latest_observed_at_utc = row.retrieved_at_utc;
    }
    candidate.source_rows.push({
      source_id: sourceId,
      source_row_id: String(row.source_row_id),
      source_record_url: row.source_record_url ?? null,
      metadata_screen: row.metadata_screen,
      metadata_screen_reason: row.metadata_screen_reason ?? null,
      metadata_license: row.metadata_license ?? null,
      metadata_owner: row.metadata_owner ?? null,
      retrieved_at_utc: row.retrieved_at_utc ?? null,
    });
  }
  stats.distinct_urls = sourceUrls.size;
  for (const [manifestField, actual] of [
    ['repository_rows', stats.rows],
    ['distinct_normalized_repositories', stats.distinct_urls],
    ['metadata_candidates', stats.candidate_rows],
    ['metadata_excluded', stats.excluded_rows],
  ]) {
    if (manifest[manifestField] !== actual) {
      throw new Error(
        `${sourceId}: manifest ${manifestField}=${manifest[manifestField]} but snapshot has ${actual}`,
      );
    }
  }
  sourceCounts[sourceId] = stats;
  sourceUrlSets.set(sourceId, sourceUrls);
}

const reviews = new Map();
const reviewOrigins = new Map();
const reviewFileDecisionCounts = {};
const reviewerDecisionCounts = {};
for (const [filename, rows] of reviewRowsByFile) {
  const fileDecisions = { publishable: 0, hold: 0, reject: 0 };
  for (const [index, review] of rows.entries()) {
    const label = `${filename}:${index + 1}`;
    const key = normalizedRepository(
      requireString(
        review.normalized_repository_url,
        `${label}.normalized_repository_url`,
      ),
    );
    if (!key) throw new Error(`${label}: invalid review repository URL`);
    if (!candidates.has(key))
      throw new Error(`${label}: review has no source candidate ${key}`);
    if (reviews.has(key))
      throw new Error(`${label}: duplicate review for ${key}`);
    if (!['publishable', 'hold', 'reject'].includes(review.decision)) {
      throw new Error(`${label}: invalid decision`);
    }
    fileDecisions[review.decision] += 1;
    const reviewedAt = requireString(
      review.reviewed_at_utc,
      `${label}.reviewed_at_utc`,
    );
    const reviewedAtMs = Date.parse(reviewedAt);
    if (
      !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(
        reviewedAt,
      ) ||
      !Number.isFinite(reviewedAtMs) ||
      reviewedAtMs > Date.now() + 60_000
    ) {
      throw new Error(
        `${label}: reviewed_at_utc must be a valid, non-future UTC timestamp`,
      );
    }
    const reviewer = requireString(review.reviewer, `${label}.reviewer`);
    reviewerDecisionCounts[reviewer] ??= { publishable: 0, hold: 0, reject: 0 };
    reviewerDecisionCounts[reviewer][review.decision] += 1;
    requireString(review.decision_reason, `${label}.decision_reason`);
    if (review.canonical_repository_url != null) {
      requireHttpUrl(
        review.canonical_repository_url,
        `${label}.canonical_repository_url`,
      );
    }
    for (const checkName of checks) {
      const check = review.checks?.[checkName];
      if (!check || !['pass', 'fail', 'unresolved'].includes(check.result)) {
        throw new Error(`${label}: missing ${checkName} result`);
      }
      requireString(check.note, `${label}.checks.${checkName}.note`);
      if (check.result === 'pass')
        requireHttpUrl(
          check.evidence_url,
          `${label}.checks.${checkName}.evidence_url`,
        );
    }
    if (review.decision === 'publishable') {
      if (
        checks.some((checkName) => review.checks[checkName].result !== 'pass')
      ) {
        throw new Error(`${label}: publishable decision without four passes`);
      }
      if (
        !Number.isInteger(review.open_source_year) ||
        review.open_source_year < 1000 ||
        review.open_source_year > new Date().getUTCFullYear()
      ) {
        throw new Error(
          `${label}: publishable decision requires open_source_year`,
        );
      }
      for (const field of [
        'product_identity',
        'agency',
        'geography',
        'license',
      ]) {
        requireString(review[field], `${label}.${field}`);
      }
      requireHttpUrl(review.official_url, `${label}.official_url`);
      requireHttpUrl(
        review.notability_evidence_url,
        `${label}.notability_evidence_url`,
      );
    }
    reviews.set(key, review);
    reviewOrigins.set(key, filename);
  }
  reviewFileDecisionCounts[filename] = fileDecisions;
}

const output = [...candidates.values()]
  .map((item) => {
    const review = reviews.get(item.normalized_repository_url);
    const canonicalUrl = review?.canonical_repository_url
      ? normalizedRepository(review.canonical_repository_url)
      : null;
    const directCatalogId = catalog.get(item.normalized_repository_url);
    const canonicalCatalogId = canonicalUrl ? catalog.get(canonicalUrl) : null;
    const sourceRows = item.source_rows.sort(
      (a, b) =>
        a.source_id.localeCompare(b.source_id) ||
        a.source_row_id.localeCompare(b.source_row_id),
    );
    return {
      normalized_repository_url: item.normalized_repository_url,
      observed_repository_urls: [...item.observed_repository_urls].sort(),
      titles: [...item.titles].sort(),
      source_rows: sourceRows,
      metadata_candidate: item.metadata_candidate,
      catalog_project_id: directCatalogId ?? canonicalCatalogId ?? null,
      catalog_match_basis: directCatalogId
        ? 'observed_url'
        : canonicalCatalogId
          ? 'reviewed_canonical_url'
          : null,
      reviewed_canonical_repository_url: canonicalUrl,
      review_status: review?.decision ?? 'unreviewed',
      review_file: reviewOrigins.get(item.normalized_repository_url) ?? null,
      review: review ?? null,
      first_observed_at_utc: item.first_observed_at_utc,
      latest_observed_at_utc: item.latest_observed_at_utc,
    };
  })
  .sort((a, b) =>
    a.normalized_repository_url.localeCompare(b.normalized_repository_url),
  );

const decisionCounts = { unreviewed: 0, publishable: 0, hold: 0, reject: 0 };
for (const candidate of output) decisionCounts[candidate.review_status] += 1;
const metadataCandidateDecisionCounts = {
  unreviewed: 0,
  publishable: 0,
  hold: 0,
  reject: 0,
};
for (const candidate of output) {
  if (candidate.metadata_candidate)
    metadataCandidateDecisionCounts[candidate.review_status] += 1;
}
const byUrl = new Map(
  output.map((candidate) => [candidate.normalized_repository_url, candidate]),
);
const sourceReviewProgress = {};
for (const [sourceId, urls] of sourceUrlSets) {
  const decisions = { unreviewed: 0, publishable: 0, hold: 0, reject: 0 };
  for (const url of urls) decisions[byUrl.get(url).review_status] += 1;
  sourceReviewProgress[sourceId] = { distinct_urls: urls.size, ...decisions };
}
const batchProgress = {};
const assignments = new Set();
for (const [filename, rows] of batchRowsByFile) {
  const batchId = filename.slice(0, -'.jsonl'.length);
  const decisions = { unreviewed: 0, publishable: 0, hold: 0, reject: 0 };
  for (const [index, row] of rows.entries()) {
    const label = `${filename}:${index + 1}`;
    if (row.batch_id !== batchId)
      throw new Error(`${label}: batch_id does not match filename`);
    const key = normalizedRepository(
      requireString(
        row.normalized_repository_url,
        `${label}.normalized_repository_url`,
      ),
    );
    if (!key || !byUrl.has(key))
      throw new Error(`${label}: assignment has no source candidate`);
    if (assignments.has(key))
      throw new Error(`${label}: duplicate batch assignment for ${key}`);
    assignments.add(key);
    decisions[byUrl.get(key).review_status] += 1;
  }
  batchProgress[batchId] = { assigned: rows.length, ...decisions };
}
const summary = {
  generated_at_utc: new Date().toISOString(),
  source_files: sourceFiles,
  review_files: reviewFiles,
  review_file_decision_counts: reviewFileDecisionCounts,
  reviewer_decision_counts: reviewerDecisionCounts,
  batch_files: batchFiles,
  source_counts: sourceCounts,
  source_review_progress: sourceReviewProgress,
  batch_progress: batchProgress,
  total_source_rows: Object.values(sourceCounts).reduce(
    (sum, source) => sum + source.rows,
    0,
  ),
  distinct_repository_urls: output.length,
  metadata_candidates: output.filter(
    (candidate) => candidate.metadata_candidate,
  ).length,
  metadata_excluded_only: output.filter(
    (candidate) => !candidate.metadata_candidate,
  ).length,
  catalog_url_matches: output.filter(
    (candidate) => candidate.catalog_project_id,
  ).length,
  catalog_direct_url_matches: output.filter(
    (candidate) => candidate.catalog_match_basis === 'observed_url',
  ).length,
  catalog_reviewed_alias_matches: output.filter(
    (candidate) => candidate.catalog_match_basis === 'reviewed_canonical_url',
  ).length,
  review_decisions: decisionCounts,
  metadata_candidate_review_decisions: metadataCandidateDecisionCounts,
  assigned_distinct_urls: assignments.size,
  assigned_unreviewed_urls: [...assignments].filter(
    (url) => byUrl.get(url).review_status === 'unreviewed',
  ).length,
  assigned_metadata_candidate_unreviewed_urls: [...assignments].filter(
    (url) =>
      byUrl.get(url).metadata_candidate &&
      byUrl.get(url).review_status === 'unreviewed',
  ).length,
  assigned_metadata_excluded_unreviewed_urls: [...assignments].filter(
    (url) =>
      !byUrl.get(url).metadata_candidate &&
      byUrl.get(url).review_status === 'unreviewed',
  ).length,
  unassigned_metadata_candidate_urls: output.filter(
    (candidate) =>
      candidate.metadata_candidate &&
      candidate.review_status === 'unreviewed' &&
      !assignments.has(candidate.normalized_repository_url),
  ).length,
  unassigned_metadata_excluded_urls: output.filter(
    (candidate) =>
      !candidate.metadata_candidate &&
      candidate.review_status === 'unreviewed' &&
      !assignments.has(candidate.normalized_repository_url),
  ).length,
  unassigned_total_urls: output.filter(
    (candidate) =>
      candidate.review_status === 'unreviewed' &&
      !assignments.has(candidate.normalized_repository_url),
  ).length,
  warning:
    'Metadata candidates and catalog URL matches are not individual four-check reviews.',
};

const reviewedPriorityUrls =
  summary.metadata_candidate_review_decisions.publishable +
  summary.metadata_candidate_review_decisions.hold +
  summary.metadata_candidate_review_decisions.reject;
const reviewedAllUrls =
  summary.review_decisions.publishable +
  summary.review_decisions.hold +
  summary.review_decisions.reject;
const percent = (reviewed, total) =>
  total ? Math.round((reviewed / total) * 1000) / 10 : 0;
const siteProgress = {
  generated_at_utc: summary.generated_at_utc,
  priority: {
    reviewed: reviewedPriorityUrls,
    total: summary.metadata_candidates,
    remaining: summary.metadata_candidate_review_decisions.unreviewed,
    in_review: summary.assigned_metadata_candidate_unreviewed_urls,
    awaiting_assignment: summary.unassigned_metadata_candidate_urls,
    percent: percent(reviewedPriorityUrls, summary.metadata_candidates),
    decisions: summary.metadata_candidate_review_decisions,
  },
  all: {
    reviewed: reviewedAllUrls,
    total: summary.distinct_repository_urls,
    remaining: summary.review_decisions.unreviewed,
    in_review: summary.assigned_unreviewed_urls,
    awaiting_assignment: summary.unassigned_total_urls,
    percent: percent(reviewedAllUrls, summary.distinct_repository_urls),
    decisions: summary.review_decisions,
  },
};
async function writeAtomic(target, contents) {
  const temporary = `${target}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, contents);
    await rename(temporary, target);
  } finally {
    await unlink(temporary).catch(() => {});
  }
}

await writeAtomic(
  candidateProjectionPath,
  output.map((item) => JSON.stringify(item)).join('\n') + '\n',
);
await writeAtomic(
  path.join(ledgerDirectory, 'summary.json'),
  JSON.stringify(summary, null, 2) + '\n',
);
await writeAtomic(
  path.join(ledgerDirectory, 'site-progress.json'),
  JSON.stringify(siteProgress, null, 2) + '\n',
);
execFileSync('npm', ['run', 'build:apache'], {
  cwd: root,
  stdio: 'inherit',
});
console.log(JSON.stringify(summary, null, 2));
