import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const endpoint = 'https://www.osti.gov/doecodeapi/services/search';
const pageSize = 1000;
const retrievedAt = new Date().toISOString();
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.dirname(scriptDirectory);
const outputPath = path.join(
  repositoryRoot,
  'docs/research/ledger/sources/doe-code.jsonl',
);
const manifestPath = path.join(
  repositoryRoot,
  'docs/research/ledger/sources/doe-code.manifest.json',
);

function normalizeRepositoryUrl(repositoryUrl) {
  try {
    const url = new URL(repositoryUrl);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    url.protocol = 'https:';
    url.hostname = url.hostname.toLowerCase();
    url.username = '';
    url.password = '';
    url.search = '';
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

function compactOrganization(organization) {
  return {
    name: organization.organization_name ?? null,
    doe: organization.DOE ?? null,
    primary_award: organization.primary_award ?? null,
    funding_identifiers: organization.funding_identifiers ?? [],
  };
}

async function fetchPage(start) {
  const url = new URL(endpoint);
  url.searchParams.set('project_type', 'OS');
  url.searchParams.set('rows', String(pageSize));
  url.searchParams.set('start', String(start));

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`DOE CODE API returned ${response.status} for ${url}`);
  }

  const page = await response.json();
  if (!Number.isInteger(page.num_found) || !Array.isArray(page.docs)) {
    throw new Error(`DOE CODE API returned an unexpected response for ${url}`);
  }

  return page;
}

const sourceRows = [];
let expectedTotal;

for (let start = 0; ; start += pageSize) {
  const page = await fetchPage(start);
  if (expectedTotal === undefined) expectedTotal = page.num_found;
  if (page.num_found !== expectedTotal) {
    throw new Error(
      `DOE CODE result count changed during pagination (${expectedTotal} to ${page.num_found}); rerun the inventory pull.`,
    );
  }
  if (page.start !== start) {
    throw new Error(
      `DOE CODE returned start=${page.start} for requested start=${start}`,
    );
  }

  sourceRows.push(...page.docs);
  if (sourceRows.length >= expectedTotal) break;
  if (page.docs.length === 0) {
    throw new Error(`DOE CODE returned an empty page at start=${start}`);
  }
}

if (sourceRows.length !== expectedTotal) {
  throw new Error(
    `Fetched ${sourceRows.length} DOE CODE rows, expected ${expectedTotal}`,
  );
}

const repositoryRows = sourceRows.filter(
  (row) =>
    row.project_type === 'OS' &&
    typeof row.repository_link === 'string' &&
    row.repository_link.trim(),
);
const seenIds = new Set();
const records = repositoryRows.map((row) => {
  const sourceRowId = String(row.code_id);
  if (!row.code_id || seenIds.has(sourceRowId)) {
    throw new Error(`Missing or duplicate DOE CODE row ID: ${sourceRowId}`);
  }
  seenIds.add(sourceRowId);

  const licenses = Array.isArray(row.licenses) ? row.licenses : [];
  if (licenses.length === 0) {
    throw new Error(`DOE CODE row ${sourceRowId} has no license claim`);
  }
  const onlyOtherLicense =
    licenses.length === 1 && licenses[0].trim().toLowerCase() === 'other';
  const normalizedRepositoryUrl = normalizeRepositoryUrl(row.repository_link);
  if (!normalizedRepositoryUrl) {
    throw new Error(
      `DOE CODE row ${sourceRowId} has an invalid repository URL: ${row.repository_link}`,
    );
  }
  const citation = row.links?.find((link) => link.rel === 'citation')?.href;

  return {
    source_id: 'doe-code',
    source_row_id: sourceRowId,
    source_record_url:
      citation ??
      `https://www.osti.gov/doecode/biblio/${encodeURIComponent(sourceRowId)}`,
    repository_url: row.repository_link.trim(),
    normalized_repository_url: normalizedRepositoryUrl,
    title: row.software_title ?? null,
    metadata_license: licenses,
    metadata_owner: row.site_ownership_code ?? null,
    metadata_release_date: row.release_date ?? null,
    metadata_screen: onlyOtherLicense ? 'excluded' : 'candidate',
    metadata_screen_reason: onlyOtherLicense
      ? "DOE CODE reports only the license label 'Other'; excluded from the survey's named-license metadata screen, pending direct repository review."
      : 'DOE CODE reports a named license claim; this is a discovery screen only and does not establish an OSI-approved or source-confirmed license.',
    retrieved_at_utc: retrievedAt,
    metadata: {
      project_type: row.project_type,
      open_source: row.open_source ?? null,
      software_type: row.software_type ?? null,
      site_ownership_code: row.site_ownership_code ?? null,
      recipient_org: row.recipient_org ?? null,
      sponsoring_organizations: (row.sponsoring_organizations ?? []).map(
        compactOrganization,
      ),
      contributing_organizations: (row.contributing_organizations ?? []).map(
        compactOrganization,
      ),
      developing_organizations: (row.developing_organizations ?? []).map(
        compactOrganization,
      ),
      research_organizations: (row.research_organizations ?? []).map(
        compactOrganization,
      ),
      doi: row.doi ?? null,
      acronym: row.acronym ?? null,
      version_number: row.version_number ?? null,
      programming_languages: row.programming_languages ?? [],
      project_keywords: row.project_keywords ?? [],
      description: row.description ?? null,
      proprietary_url: row.proprietary_url ?? null,
      date_record_added: row.date_record_added ?? null,
      date_record_updated: row.date_record_updated ?? null,
    },
  };
});

records.sort(
  (left, right) => Number(left.source_row_id) - Number(right.source_row_id),
);

const candidateRecords = records.filter(
  (record) => record.metadata_screen === 'candidate',
);
const excludedRecords = records.filter(
  (record) => record.metadata_screen === 'excluded',
);
const distinctAllUrls = new Set(
  records.map((record) => record.normalized_repository_url),
);
const distinctCandidateUrls = new Set(
  candidateRecords.map((record) => record.normalized_repository_url),
);
const rowsWithRepositoryUrl = sourceRows.filter(
  (row) => typeof row.repository_link === 'string' && row.repository_link.trim(),
);
const malformedRepositoryRows = rowsWithRepositoryUrl.filter(
  (row) => !normalizeRepositoryUrl(row.repository_link),
).length;

if (repositoryRows.length !== expectedTotal) {
  console.warn(
    `Note: ${expectedTotal - repositoryRows.length} OS rows had no repository_link and were omitted from the repository inventory.`,
  );
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(
  outputPath,
  `${records.map((record) => JSON.stringify(record)).join('\n')}\n`,
  'utf8',
);

const manifest = {
  source_id: 'doe-code',
  source_url: 'https://www.osti.gov/doecode/',
  api_url: endpoint,
  api_documentation_url: 'https://www.osti.gov/doecodeapi/services/docs/search',
  retrieved_at_utc: retrievedAt,
  query: { project_type: 'OS', rows_per_page: pageSize, start_index: 0 },
  raw_entries: expectedTotal,
  repository_rows: records.length,
  distinct_normalized_repositories: distinctAllUrls.size,
  metadata_candidates: candidateRecords.length,
  metadata_excluded: excludedRecords.length,
  distinct_candidate_repositories: distinctCandidateUrls.size,
  without_repository: expectedTotal - rowsWithRepositoryUrl.length,
  malformed_repository: malformedRepositoryRows,
  note: "Metadata only. 'candidate' means DOE CODE reports a named license claim; only rows with the sole license label 'Other' are excluded, matching the survey's screen. No four-check decision follows from this manifest.",
};
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(
  JSON.stringify(
    {
      output: path.relative(repositoryRoot, outputPath),
      manifest: path.relative(repositoryRoot, manifestPath),
      retrieved_at_utc: retrievedAt,
      api_rows: expectedTotal,
      repository_rows: records.length,
      candidate_rows: candidateRecords.length,
      excluded_sole_other_rows: excludedRecords.length,
      distinct_normalized_repository_urls_all: distinctAllUrls.size,
      distinct_normalized_repository_urls_candidates:
        distinctCandidateUrls.size,
    },
    null,
    2,
  ),
);
