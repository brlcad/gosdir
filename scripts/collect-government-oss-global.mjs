#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'docs/research/ledger/sources');
const retrievedAt = new Date().toISOString();

function normalizeRepository(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return null;
  try {
    const url = new URL(raw.trim());
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    url.protocol = 'https:';
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
    url.pathname = url.pathname.replace(/\/+$/, '').replace(/\.git$/i, '').toLowerCase();
    url.hostname = url.hostname.toLowerCase();
    return url.href;
  } catch {
    return null;
  }
}

async function getJson(url) {
  const response = await fetch(url, {
    headers: { 'User-Agent': 'GOSDIR-candidate-ledger/1.0' },
  });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

const sourceUrl = 'https://govoss.cat/entries.json';
const entries = await getJson(sourceUrl);
if (!Array.isArray(entries)) throw new Error('Expected govoss entries array');

let withoutRepository = 0;
let malformedRepository = 0;
const records = [];
for (const entry of entries) {
  if (!entry.repo_url) {
    withoutRepository += 1;
    continue;
  }
  const normalized = normalizeRepository(entry.repo_url);
  if (!normalized) {
    malformedRepository += 1;
    continue;
  }
  const reasons = [];
  if (entry.excluded) reasons.push(`source_excluded:${entry.exclude_reason ?? 'unspecified'}`);
  if (entry.link_dead) reasons.push('source_link_dead');
  if (!entry.licence_spdx || ['other', 'noassertion'].includes(String(entry.licence_spdx).toLowerCase())) {
    reasons.push('source_license_not_named');
  }
  records.push({
    source_id: 'govoss',
    source_row_id: String(entry.id),
    source_record_url: entry.catalogues?.[0]?.entry_url ?? entry.source_url ?? sourceUrl,
    repository_url: entry.repo_url,
    normalized_repository_url: normalized,
    title: entry.name ?? null,
    metadata_license: entry.licence_spdx ?? entry.licence ?? null,
    metadata_owner: entry.owner ?? null,
    metadata_release_date: null,
    metadata_screen: reasons.length ? 'excluded' : 'candidate',
    metadata_screen_reason: reasons.join('; ') || 'nonexcluded_live_repo_with_named_source_license',
    retrieved_at_utc: retrievedAt,
    metadata: {
      country: entry.country ?? null,
      countries: entry.countries ?? [],
      sources: entry.sources ?? [],
      source_urls: entry.source_urls ?? [],
      homepage: entry.homepage ?? null,
      description: entry.description ?? null,
      development_status: entry.development_status ?? null,
      software_type: entry.software_type ?? null,
      has_publiccode: Boolean(entry.has_publiccode),
      recommended_for_government: Boolean(entry.recommended_for_government),
      repo_archived: Boolean(entry.repo_archived),
      last_checked: entry.last_checked ?? null,
      last_push: entry.last_push ?? null,
      adopters: entry.adopters ?? null,
      catalogues: entry.catalogues ?? [],
    },
  });
}

records.sort((a, b) => a.normalized_repository_url.localeCompare(b.normalized_repository_url) || a.source_row_id.localeCompare(b.source_row_id));
await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, 'govoss.jsonl'), records.map((item) => JSON.stringify(item)).join('\n') + '\n');
await writeFile(path.join(outputDirectory, 'govoss.manifest.json'), JSON.stringify({
  source_id: 'govoss',
  source_url: sourceUrl,
  retrieved_at_utc: retrievedAt,
  raw_entries: entries.length,
  repository_rows: records.length,
  distinct_normalized_repositories: new Set(records.map((item) => item.normalized_repository_url)).size,
  metadata_candidates: records.filter((item) => item.metadata_screen === 'candidate').length,
  metadata_excluded: records.filter((item) => item.metadata_screen === 'excluded').length,
  without_repository: withoutRepository,
  malformed_repository: malformedRepository,
  note: 'Metadata screens only. No four-check decision follows from this manifest.',
}, null, 2) + '\n');

console.log(`govoss: ${entries.length} rows, ${records.length} repositories, ${new Set(records.map((item) => item.normalized_repository_url)).size} distinct URLs`);

// The earlier hand-screened shortlist is a separate discovery source. Keeping it
// here ensures candidates absent from today's live aggregators remain in scope.
function parseCsv(input) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];
    if (quoted) {
      if (char === '"' && input[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(cell);
      cell = '';
    } else if (char === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else if (char !== '\r') {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const [headers, ...data] = rows;
  return data.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])));
}

const shortlistPath = path.join(root, 'docs/research/2026-09-government-oss-candidate-audit.csv');
const shortlist = parseCsv(await readFile(shortlistPath, 'utf8'));
const shortlistRecords = shortlist.map((entry, index) => ({
  source_id: 'prior-shortlist',
  source_row_id: String(index + 1),
  source_record_url: entry.evidence_url || entry.repository,
  repository_url: entry.repository,
  normalized_repository_url: normalizeRepository(entry.repository),
  title: entry.name,
  metadata_license: null,
  metadata_owner: entry.jurisdiction,
  metadata_release_date: entry.latest_release_feed_update || null,
  metadata_screen: 'candidate',
  metadata_screen_reason: 'prior_hand_screened_lead; original decision preserved in metadata',
  retrieved_at_utc: '2026-09-22T00:00:00Z',
  metadata: {
    prior_decision: entry.decision,
    prior_basis: entry.basis,
    latest_default_branch_commit: entry.latest_default_branch_commit,
    github_stars: entry.github_stars,
    github_forks: entry.github_forks,
  },
}));
if (shortlistRecords.some((entry) => !entry.normalized_repository_url)) {
  throw new Error('Prior shortlist contains a malformed repository URL');
}
await writeFile(path.join(outputDirectory, 'prior-shortlist.jsonl'), shortlistRecords.map((item) => JSON.stringify(item)).join('\n') + '\n');
await writeFile(path.join(outputDirectory, 'prior-shortlist.manifest.json'), JSON.stringify({
  source_id: 'prior-shortlist',
  source_url: 'docs/research/2026-09-government-oss-candidate-audit.csv',
  retrieved_at_utc: '2026-09-22T00:00:00Z',
  raw_entries: shortlist.length,
  repository_rows: shortlistRecords.length,
  distinct_normalized_repositories: new Set(shortlistRecords.map((item) => item.normalized_repository_url)).size,
  metadata_candidates: shortlistRecords.length,
  metadata_excluded: 0,
  note: 'Preserved from the prior shortlist; current ledger reviews are recorded separately.',
}, null, 2) + '\n');
console.log(`prior shortlist: ${shortlistRecords.length} rows`);
