#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'docs/research/ledger/sources');
const retrievedAt = new Date().toISOString();
const userAgent = 'GOSDIR-candidate-ledger/1.0';

function normalizeRepository(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return null;
  try {
    const prepared = toHttpRepository(raw);
    if (!prepared) return null;
    const url = new URL(prepared);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (url.protocol === 'http:') url.protocol = 'https:';
    url.hostname = url.hostname.toLowerCase();
    url.pathname = url.pathname.toLowerCase().replace(/\/+$/, '').replace(/\.git$/i, '');
    url.search = '';
    url.hash = '';
    return url.href;
  } catch {
    return null;
  }
}

function toHttpRepository(raw) {
  if (typeof raw !== 'string' || !raw.trim()) return null;
  const value = raw.trim();
  if (/^git:\/\//i.test(value)) return value.replace(/^git:\/\//i, 'https://');
  if (/^github\.com\//i.test(value)) return `https://${value}`;
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? value : null;
  } catch {
    return null;
  }
}

async function getText(url) {
  const response = await fetch(url, { headers: { 'User-Agent': userAgent } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.text();
}

async function getJson(url) {
  const response = await fetch(url, { headers: { 'User-Agent': userAgent } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

function record({ sourceId, rowId, sourceRecordUrl, repositoryUrl, title, license, owner, releaseDate = null, screen = 'candidate', reason, metadata }) {
  const normalized = normalizeRepository(repositoryUrl);
  if (!normalized) return null;
  return {
    source_id: sourceId,
    source_row_id: String(rowId),
    source_record_url: sourceRecordUrl,
    repository_url: repositoryUrl,
    normalized_repository_url: normalized,
    title: title ?? null,
    metadata_license: license ?? null,
    metadata_owner: owner ?? null,
    metadata_release_date: releaseDate ?? null,
    metadata_screen: screen,
    metadata_screen_reason: reason,
    retrieved_at_utc: retrievedAt,
    metadata,
  };
}

function dedupeRowIds(items, getId) {
  const counts = new Map();
  return items.map((item, index) => {
    const base = String(getId(item, index) || `row-${index + 1}`);
    const count = counts.get(base) ?? 0;
    counts.set(base, count + 1);
    return count ? `${base}#${count + 1}` : base;
  });
}

function licenseClaims(row) {
  const claims = row?.permissions?.licenses;
  if (!Array.isArray(claims)) return [];
  return claims.map((claim) => claim?.name ?? claim?.URL ?? null).filter(Boolean).map(String);
}

function hasNamedLicense(claims) {
  return claims.some((claim) => !['other', 'unknown', 'noassertion', 'none'].includes(claim.trim().toLowerCase()));
}

async function writeSource(sourceId, sourceUrl, rawCount, records, extra = {}) {
  const outputPath = path.join(outputDirectory, `${sourceId}.jsonl`);
  const content = records.map((item) => JSON.stringify(item)).join('\n');
  await writeFile(outputPath, content ? `${content}\n` : '');
  const summary = {
    source_id: sourceId,
    source_url: sourceUrl,
    retrieved_at_utc: retrievedAt,
    raw_rows: rawCount,
    repository_rows: records.length,
    distinct_normalized_repositories: new Set(records.map((item) => item.normalized_repository_url)).size,
    metadata_candidates: records.filter((item) => item.metadata_screen === 'candidate').length,
    metadata_excluded: records.filter((item) => item.metadata_screen === 'excluded').length,
    source_rows_without_repository_url: extra.source_rows_without_repository_url ?? Math.max(0, rawCount - records.length),
    source_rows_non_http_or_invalid_repository_url: extra.source_rows_non_http_or_invalid_repository_url ?? 0,
    non_repository_url_rows: extra.non_repository_url_rows ?? 0,
    note: 'Metadata triage only. A candidate label is not a four-check decision or GOSDIR acceptance.',
    ...extra,
  };
  await writeFile(path.join(outputDirectory, `${sourceId}.manifest.json`), `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify(summary));
}

function sortRecords(records) {
  return records.sort((a, b) => a.normalized_repository_url.localeCompare(b.normalized_repository_url) || a.source_row_id.localeCompare(b.source_row_id));
}

await mkdir(outputDirectory, { recursive: true });

// NASA Open-Source-Catalog. The catalog's Public Code Repo field is retained as-is;
// its "NASA Open Source" license label is a metadata claim, not an OSI finding.
{
  const sourceUrl = 'https://raw.githubusercontent.com/nasa/Open-Source-Catalog/master/catalog.json';
  const sourceRows = await getJson(sourceUrl);
  if (!Array.isArray(sourceRows)) throw new Error('NASA catalog payload is not an array');
  const rowIds = dedupeRowIds(sourceRows, (row, index) => row['External Link'] || `catalog-row-${index + 1}`);
  const records = sourceRows.map((row, index) => {
    const rawRepositoryUrl = row['Public Code Repo'];
    const repositoryUrl = toHttpRepository(rawRepositoryUrl);
    const normalized = normalizeRepository(repositoryUrl);
    const parsed = normalized ? new URL(normalized) : null;
    const pathSegments = parsed?.pathname.split('/').filter(Boolean) ?? [];
    const isOwnerOnly = parsed?.hostname === 'github.com' && pathSegments.length < 2;
    const screenedOut = isOwnerOnly || !normalized;
    const reason = isOwnerOnly
        ? 'NASA public-code field points only to a GitHub account, without a repository path.'
        : 'NASA catalog public-code link; its license label and source route need repository-level review.';
    return record({
      sourceId: 'nasa',
      rowId: rowIds[index],
      sourceRecordUrl: row['External Link'] || sourceUrl,
      repositoryUrl,
      title: row.Software,
      license: Array.isArray(row.License) ? row.License.join('; ') : row.License,
      owner: row['NASA Center'],
      reason,
      screen: screenedOut ? 'excluded' : 'candidate',
      metadata: row,
    });
  }).filter(Boolean);
  await writeSource('nasa', sourceUrl, sourceRows.length, sortRecords(records), {
    source_rows_without_repository_url: sourceRows.filter((row) => !row['Public Code Repo']).length,
    source_rows_non_http_or_invalid_repository_url: sourceRows.filter((row) => row['Public Code Repo'] && !toHttpRepository(row['Public Code Repo'])).length,
    non_repository_url_rows: sourceRows.filter((row) => row['Public Code Repo'] && !toHttpRepository(row['Public Code Repo'])).length,
    source_rows_without_external_record_page: sourceRows.filter((row) => !row['External Link']).length,
    source_counting_note: 'Three FTP distribution/archive links are omitted from JSONL because they are not HTTP(S) repositories; the raw rows are counted here. Duplicate HTTP(S) links remain separate source rows.',
  });
}

// GSA code.json. The prior survey screen used openSource plus a named license.
{
  const sourceUrl = 'https://open.gsa.gov/code.json';
  const payload = await getJson(sourceUrl);
  const sourceRows = payload.releases;
  if (!Array.isArray(sourceRows)) throw new Error('GSA code.json releases is not an array');
  const rowIds = dedupeRowIds(sourceRows, (row, index) => `${row.name || 'release'}:${row.version || `row-${index + 1}`}`);
  const records = sourceRows.map((row, index) => {
    const claims = licenseClaims(row);
    const isOpenSource = row.permissions?.usageType === 'openSource';
    const candidate = isOpenSource && hasNamedLicense(claims);
    const reasons = [];
    if (!isOpenSource) reasons.push(`usage_type_${row.permissions?.usageType || 'missing'}`);
    else if (!claims.length) reasons.push('no_license_metadata');
    else if (!hasNamedLicense(claims)) reasons.push('license_metadata_other_or_uninformative');
    if (candidate) reasons.push('openSource_label_and_named_license_metadata_only');
    return record({
      sourceId: 'gsa',
      rowId: rowIds[index],
      sourceRecordUrl: sourceUrl,
      repositoryUrl: row.repositoryURL,
      title: row.name,
      license: claims.join('; ') || null,
      owner: row.organization ?? null,
      reason: reasons.join('; '),
      screen: candidate ? 'candidate' : 'excluded',
      metadata: row,
    });
  }).filter(Boolean);
  await writeSource('gsa', sourceUrl, sourceRows.length, sortRecords(records), {
    source_usage_type_counts: sourceRows.reduce((counts, row) => {
      const key = row.permissions?.usageType || 'missing';
      counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {}),
  });
}

// NIST code.json. All rows point to a generic NIST license reference, so the
// candidate mark only means "inventory lead with a repository URL".
{
  const sourceUrl = 'https://raw.githubusercontent.com/usnistgov/opensource/nist-pages/code.json';
  const payload = await getJson(sourceUrl);
  const sourceRows = payload.releases;
  if (!Array.isArray(sourceRows)) throw new Error('NIST code.json releases is not an array');
  const rowIds = dedupeRowIds(sourceRows, (row, index) => `${row.organization || 'NIST'}:${row.name || `row-${index + 1}`}`);
  const records = sourceRows.map((row, index) => record({
    sourceId: 'nist',
    rowId: rowIds[index],
    sourceRecordUrl: sourceUrl,
    repositoryUrl: toHttpRepository(row.repositoryURL || row.homepageURL),
    title: row.name || row.description,
    license: licenseClaims(row).join('; ') || null,
    owner: row.organization,
    reason: 'NIST inventory repository link; generic NIST license metadata and software type need repository review.',
    metadata: row,
  })).filter(Boolean);
  await writeSource('nist', sourceUrl, sourceRows.length, sortRecords(records));
}

// EPA code.json. EPA's generator may infer missing license metadata; preserve
// every repository link as a review lead without treating the label as proof.
{
  const sourceUrl = 'https://raw.githubusercontent.com/USEPA/code-json-generator/output/code.json';
  const payload = await getJson(sourceUrl);
  const sourceRows = payload.releases;
  if (!Array.isArray(sourceRows)) throw new Error('EPA code.json releases is not an array');
  const rowIds = dedupeRowIds(sourceRows, (row, index) => `${row.organization || 'EPA'}:${row.name || `row-${index + 1}`}`);
  const records = sourceRows.map((row, index) => {
    const claims = licenseClaims(row);
    return record({
      sourceId: 'epa',
      rowId: rowIds[index],
      sourceRecordUrl: sourceUrl,
      repositoryUrl: toHttpRepository(row.repositoryURL || row.homepageURL),
      title: row.name,
      license: claims.join('; ') || null,
      owner: row.organization,
      reason: 'EPA code.json repository link; license may be inferred by the generator and must be checked in source.',
      metadata: row,
    });
  }).filter(Boolean);
  await writeSource('epa', sourceUrl, sourceRows.length, sortRecords(records));
}

// USGS GitLab: collect all public projects, then identify archived IDs via the
// same API's archived=true filter. This avoids treating last_activity_at as code age.
{
  const sourceUrl = 'https://code.usgs.gov/api/v4/projects?visibility=public';
  async function fetchProjectPages(extraQuery = '') {
    const rows = [];
    for (let page = 1; ; page += 1) {
      const url = `https://code.usgs.gov/api/v4/projects?visibility=public&per_page=100&page=${page}&order_by=id&sort=asc${extraQuery}`;
      const batch = await getJson(url);
      if (!Array.isArray(batch)) throw new Error(`USGS GitLab page ${page} is not an array`);
      rows.push(...batch);
      if (batch.length < 100) break;
    }
    return rows;
  }
  const [allRows, archivedRows] = await Promise.all([fetchProjectPages(), fetchProjectPages('&archived=true')]);
  const archivedIds = new Set(archivedRows.map((row) => row.id));
  const records = allRows.map((row) => {
    const archived = archivedIds.has(row.id);
    return record({
      sourceId: 'usgs',
      rowId: row.id,
      sourceRecordUrl: row.web_url,
      repositoryUrl: row.web_url || row.http_url_to_repo,
      title: row.name_with_namespace || row.name,
      owner: row.namespace?.full_path || row.namespace?.name,
      screen: archived ? 'excluded' : 'candidate',
      reason: archived ? 'public GitLab project marked archived by the source API.' : 'public GitLab project; project activity and source license are not verified by this inventory.',
      metadata: { ...row, archived },
    });
  }).filter(Boolean);
  await writeSource('usgs', sourceUrl, allRows.length, sortRecords(records), {
    api_archived_rows: archivedRows.length,
    count_note: 'Current API totals can differ from the September 22, 2026 survey snapshot.',
    activity_note: 'GitLab last_activity_at is preserved in metadata but is not treated as code-commit freshness.',
  });
}

// Colorado OpenCDSS product pages. Pages without a public repository link (for
// example HydroBase and StateCU GUI) are counted in omissions, not fabricated as repo rows.
{
  const sourceUrl = 'https://opencdss.state.co.us/opencdss/';
  const products = [
    { id: 'hydrobase', title: 'HydroBase', url: 'https://opencdss.state.co.us/opencdss/hydrobase/', screen: 'excluded', reason: 'No public source repository linked from the product page; product-specific software license also needs clarification.' },
    { id: 'statecu', title: 'StateCU', url: 'https://opencdss.state.co.us/opencdss/statecu/', screen: 'candidate', reason: 'OpenCDSS product page links public source; prior source survey identified this as one of four individually checked products.' },
    { id: 'statecu-gui', title: 'StateCU GUI', url: 'https://opencdss.state.co.us/opencdss/statecu-gui/', screen: 'excluded', reason: 'Product page has no dedicated public source repository; its StateCU issue links do not establish a separate GUI source.' },
    { id: 'statedmi', title: 'StateDMI', url: 'https://opencdss.state.co.us/opencdss/statedmi/', screen: 'candidate', reason: 'OpenCDSS product page links public source; prior source survey identified this as one of four individually checked products.' },
    { id: 'statemod', title: 'StateMod', url: 'https://opencdss.state.co.us/opencdss/statemod/', screen: 'candidate', reason: 'OpenCDSS product page links public source; prior source survey identified this as one of four individually checked products.' },
    { id: 'statemod-gui', title: 'StateMod GUI', url: 'https://opencdss.state.co.us/opencdss/statemod-gui/', screen: 'excluded', reason: 'Source survey holds this component as unused and likely not buildable; metadata lead only.' },
    { id: 'stateview', title: 'StateView', url: 'https://opencdss.state.co.us/opencdss/stateview/', screen: 'excluded', reason: 'Source survey reports no current download and an unmaintained product; metadata lead only.' },
    { id: 'tstool', title: 'TSTool', url: 'https://opencdss.state.co.us/opencdss/tstool/', screen: 'candidate', reason: 'OpenCDSS product page links public source; prior source survey identified this as one of four individually checked products.' },
  ];
  const records = [];
  const noRepository = [];
  for (const product of products) {
    const html = await getText(product.url);
    const hrefs = [...html.matchAll(/href=["'](https?:\/\/github\.com\/[^"'#?]+)["']/gi)].map((match) => match[1]);
    const repositories = [...new Set(hrefs.map((href) => {
      const url = new URL(href);
      const segments = url.pathname.split('/').filter(Boolean);
      if (url.hostname.toLowerCase() !== 'github.com' || segments.length !== 2) return null;
      if (/(?:^|[-_])(test|doc(?:umentation)?)(?:-|$)/i.test(segments[1])) return null;
      return `https://github.com/${segments[0]}/${segments[1]}`;
    }).filter(Boolean))];
    if (!repositories.length) {
      noRepository.push(product.id);
      continue;
    }
    for (const repositoryUrl of repositories) {
      records.push(record({
        sourceId: 'colorado-opencdss',
        rowId: `${product.id}:${repositoryUrl.split('/').slice(-2).join('/')}`,
        sourceRecordUrl: product.url,
        repositoryUrl,
        title: product.title,
        license: product.screen === 'candidate' ? 'GPL-3.0-or-later' : null,
        owner: 'Colorado Decision Support Systems (OpenCDSS)',
        reason: product.reason,
        screen: product.screen,
        metadata: { product_id: product.id, product_page: product.url, collection_page: sourceUrl, linked_github_urls: hrefs },
      }));
    }
  }
  await writeSource('colorado-opencdss', sourceUrl, products.length, sortRecords(records), {
    products_without_public_repository: noRepository.length,
    omitted_product_ids_without_repository: noRepository,
    source_counting_note: 'Eight OpenCDSS navigation products were inspected; only pages with a direct product repository link produce ledger rows. Test and documentation repositories are not separate product rows.',
  });
}

// GitHub's Government apps collection is a hand-picked global discovery list.
// It is deliberately not treated as evidence of government sponsorship.
{
  const sourceUrl = 'https://github.com/collections/government';
  const html = await getText(sourceUrl);
  const slugs = [...new Set([...html.matchAll(/<a href="\/([^"/?#]+\/[^"/?#]+)"[^>]*data-ga-click="Explore, go to repository, location: collection"/g)].map((match) => match[1]))];
  const records = slugs.map((slug) => record({
    sourceId: 'github-government',
    rowId: slug,
    sourceRecordUrl: sourceUrl,
    repositoryUrl: `https://github.com/${slug}`,
    title: slug.split('/').at(-1),
    license: null,
    owner: slug.split('/')[0],
    reason: 'Hand-picked Government apps collection entry; the collection includes civic, guidance, example, and government repositories, so provenance is not inferred.',
    metadata: { repository_slug: slug, collection_title: 'Government apps', collection_url: sourceUrl },
  })).filter(Boolean);
  await writeSource('github-government', sourceUrl, slugs.length, sortRecords(records), {
    count_note: 'Current Government apps collection repositories only. The linked government.github.com/community directory lists organization accounts, not repository records, and was not expanded into each account’s repos.',
  });
}
