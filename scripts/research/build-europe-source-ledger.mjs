import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const yaml = require('js-yaml');
const OUTPUT = join(ROOT, 'docs/research/ledger/sources');
const RETRIEVED_AT = new Date().toISOString();
const HEADERS = { 'User-Agent': 'GOSDIR-Europe-source-inventory/1.0' };
const OSI_LICENSES = new Set([
  'AGPL-3.0-only', 'AGPL-3.0-or-later', 'Apache-2.0', 'BSD-2-Clause',
  'BSD-3-Clause', 'CDDL-1.0', 'EUPL-1.2', 'GPL-2.0-only', 'GPL-2.0-or-later',
  'GPL-3.0-only', 'GPL-3.0-or-later', 'ISC', 'LGPL-2.1-only', 'LGPL-2.1-or-later',
  'LGPL-3.0-only', 'LGPL-3.0-or-later', 'MIT', 'MIT-0', 'MPL-2.0', 'Unlicense',
  'CC0-1.0',
]);

function normalizeRepositoryUrl(input) {
  if (!input) return null;
  try {
    const parsed = new URL(input.trim());
    parsed.protocol = parsed.protocol.toLowerCase();
    parsed.hostname = parsed.hostname.toLowerCase();
    parsed.hash = '';
    parsed.search = '';
    const path = parsed.pathname.toLowerCase().replace(/\/+$/, '').replace(/\.git$/, '');
    return `${parsed.protocol}//${parsed.host.toLowerCase()}${path}`;
  } catch {
    return input.trim().toLowerCase().replace(/\.git\/?$/, '').replace(/\/$/, '');
  }
}

function decodeHtml(value = '') {
  return value
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/gi, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number(num)));
}

function stripHtml(value = '') {
  return decodeHtml(value.replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

async function getText(url) {
  let lastError;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const response = await fetch(url, { headers: HEADERS, redirect: 'follow', signal: AbortSignal.timeout(30000) });
      if (response.ok) return response.text();
      lastError = new Error(`${response.status} ${url}`);
      if (response.status < 500 && response.status !== 429) throw lastError;
    } catch (error) {
      lastError = error;
      if (/^\d{3} https?:/.test(String(error))) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500 * (2 ** attempt)));
  }
  throw lastError;
}

async function getJson(url) {
  const response = await fetch(url, { headers: HEADERS, redirect: 'follow' });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

async function mapLimit(items, limit, fn) {
  const result = Array.from({ length: items.length });
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const index = cursor++;
      if (index >= items.length) return;
      result[index] = await fn(items[index], index);
    }
  });
  await Promise.all(workers);
  return result;
}

function makeRecord(fields) {
  return {
    source_id: fields.source_id,
    source_row_id: String(fields.source_row_id),
    source_record_url: fields.source_record_url,
    repository_url: fields.repository_url,
    normalized_repository_url: normalizeRepositoryUrl(fields.repository_url),
    title: fields.title || null,
    metadata_license: fields.metadata_license || null,
    metadata_owner: fields.metadata_owner || null,
    metadata_release_date: fields.metadata_release_date || null,
    metadata_screen: fields.metadata_screen,
    metadata_screen_reason: fields.metadata_screen_reason,
    retrieved_at_utc: RETRIEVED_AT,
    four_check_status: 'unreviewed',
    metadata: fields.metadata || {},
  };
}

function rowDedupCounts(records) {
  const groups = new Map();
  for (const record of records) {
    const key = record.normalized_repository_url;
    groups.set(key, (groups.get(key) || 0) + 1);
  }
  return { records: records.length, distinct_repositories: groups.size,
    duplicated_url_groups: [...groups.values()].filter((count) => count > 1).length };
}

async function writeJsonl(name, records) {
  const path = join(OUTPUT, name);
  await writeFile(path, `${records.map((record) => JSON.stringify(record)).join('\n')}\n`);
  return path;
}

const SOURCE_CONFIG = {
  swiss: {
    file: 'swiss-federal-oss-catalogue.jsonl',
    source_url: 'https://www.opensource.admin.ch/en/',
    api_url: 'https://oss-catalog-api.ocp.cloudscale.puzzle.ch/v1/software?page[size]=10000',
    query: { screen: 'recognized OSI/CC0 license and at least one short or long description in publiccode metadata' },
    note: 'Live Swiss federal OSS catalogue snapshot. The API record UUID is preserved as source_row_id; source_record_url is the official catalogue listing because no verified item-page slug is supplied by the API. Candidate status is metadata triage only; four checks remain unreviewed. The current list differs from the 22 Sep survey snapshot.'
  },
  netherlands: {
    file: 'netherlands-oss-register.jsonl',
    source_url: 'https://oss.developer.overheid.nl/repositories/',
    api_documentation_url: 'https://apis.developer.overheid.nl/apis/kIDmDnHvg',
    query: { publiccode_true_pages: 'all public listing pages', publiccode_false_pages: 'all public listing pages', page_size: 20, candidate_screen: 'publiccode=true listing membership', excluded_screen: 'publiccode=false listing membership' },
    note: 'Current rendered Dutch register snapshot was paged across both publiccode=true and publiccode=false lists. The current first-page headers declare 3,208 rows (91 true, 3,117 false), and all 3,208 cards were enumerated; two publiccode=false rows have repository URLs but no individual detail route and are retained with their filtered listing page as source_record_url. This differs from the 22 Sep 3,193-row snapshot (90 true, 3,103 false). Publiccode=true rows are metadata candidates; false rows are excluded from the publiccode screen. All four checks remain unreviewed.'
  },
  france: {
    file: 'france-public-body-inventory.jsonl',
    source_url: 'https://www.data.gouv.fr/datasets/inventaire-des-codes-sources-de-logiciels-publies-par-des-organismes-publics',
    api_url: 'https://code.gouv.fr/data/codegouvfr-repositories.json',
    query: { screen: 'fork=false, archived=false, template=false, nonempty description and nonempty license other than Other', publiccode_flag_recorded_separately: true },
    note: 'Frozen public code inventory dataset snapshot. Exact current metadata screen is recorded per row. The current publiccode=true population and screened count do not reproduce the prior survey tally of 34; do not infer four-check outcomes from inventory membership.'
  },
  uk: {
    file: 'uk-public-sector-code.jsonl',
    source_url: 'https://publicsectorcodebyorg.co.uk/data/',
    api_url: 'https://chrishylanduk.github.io/xgov-opensource-repo-scraper/repos.json',
    query: { mapping_url: 'https://raw.githubusercontent.com/chrishylanduk/uk-public-sector-code-by-org/main/public/data/org-mapping.json', screen: 'isFork=false, archived=false, nonempty description, detected SPDX other than NOASSERTION, pushed within 180 days of retrieval date' },
    note: 'Community-maintained UK public-sector mapping and repository metadata are discovery leads, not proof of government provenance. Duplicate source rows are retained; canonical ledger performs cross-source and URL deduplication. Candidate count is metadata screening only.'
  },
  spain: {
    file: 'spain-ctt.jsonl',
    source_url: 'https://administracionelectronica.gob.es/ctt/index.jsp',
    api_url: 'https://api.github.com/orgs/ctt-gob-es/repos?per_page=100&sort=updated',
    query: { screen: 'all public repositories in the CTT GitHub organization retained as discovery leads' },
    note: 'CTT organization repositories are a discovery list only. No directory-wide license, government provenance, primary-source, or four-check decision is implied by membership.'
  },
};

async function writeManifest(name, result) {
  const config = SOURCE_CONFIG[name];
  const fileRows = (await readFile(join(OUTPUT, config.file), 'utf8')).split(/\r?\n/).filter(Boolean).map(JSON.parse);
  const candidateRows = fileRows.filter((row) => row.metadata_screen === 'candidate');
  const invalidRepositoryRows = fileRows.filter((row) => {
    try { return !['http:', 'https:'].includes(new URL(row.repository_url).protocol); } catch { return true; }
  });
  const manifest = {
    source_id: config.file.replace(/\.jsonl$/, ''),
    source_url: config.source_url,
    ...(config.api_url ? { api_url: config.api_url } : {}),
    ...(config.api_documentation_url ? { api_documentation_url: config.api_documentation_url } : {}),
    retrieved_at_utc: RETRIEVED_AT,
    query: { ...config.query, ...result },
    raw_entries: result.enumerated_cards ?? result.records,
    repository_rows: fileRows.length,
    distinct_normalized_repositories: result.distinct_repositories,
    metadata_candidates: candidateRows.length,
    metadata_excluded: fileRows.length - candidateRows.length,
    distinct_candidate_repositories: new Set(candidateRows.map((row) => row.normalized_repository_url)).size,
    without_repository: fileRows.filter((row) => !row.repository_url).length,
    malformed_repository: invalidRepositoryRows.length,
    ...(result.source_total_rows !== undefined ? { declared_source_rows: result.source_total_rows } : {}),
    ...(result.unmaterialized_source_records !== undefined ? { unmaterialized_source_records: result.unmaterialized_source_records } : {}),
    note: config.note,
  };
  await writeFile(join(OUTPUT, `${manifest.source_id}.manifest.json`), `${JSON.stringify(manifest, null, 2)}\n`);
}

async function buildSwiss() {
  const endpoint = 'https://oss-catalog-api.ocp.cloudscale.puzzle.ch/v1/software?page[size]=10000';
  const response = await getJson(endpoint);
  const records = [];
  for (const row of response.data ?? []) {
    if (!row.url) continue;
    let pc = {};
    try { pc = yaml.load(row.publiccodeYml) ?? {}; } catch {}
    const license = pc.legal?.license ?? null;
    const hasDescription = Object.values(pc.description ?? {}).some((description) =>
      Boolean(description?.shortDescription || description?.longDescription));
    const licenseKey = String(license ?? '').toLowerCase();
    const recognized = OSI_LICENSES.has(license) || (licenseKey === 'mit');
    const broadPass = recognized && hasDescription;
    const standalone = String(pc.softwareType ?? '').startsWith('standalone/');
    const stableBeta = standalone && ['stable', 'beta'].includes(pc.developmentStatus);
    records.push(makeRecord({
      source_id: 'swiss-federal-oss-catalogue',
      source_row_id: row.id,
      source_record_url: 'https://www.opensource.admin.ch/en/',
      repository_url: row.url,
      title: pc.name ?? null,
      metadata_license: license,
      metadata_owner: pc.organisation?.name ?? pc.organisation?.uri ?? null,
      metadata_release_date: pc.releaseDate ?? null,
      metadata_screen: broadPass ? 'candidate' : 'excluded',
      metadata_screen_reason: broadPass
        ? 'Swiss broad metadata screen: recognized OSI or CC0 code license and a description; four checks remain unreviewed.'
        : `Swiss broad metadata screen failed: ${!recognized ? 'license is absent or not recognized as an eligible software license; ' : ''}${!hasDescription ? 'description is absent' : ''}`.trim(),
      metadata: {
        source_api_url: endpoint,
        api_updated_at: row.updatedAt ?? null,
        publiccode_url: pc.url ?? null,
        software_type: pc.softwareType ?? null,
        development_status: pc.developmentStatus ?? null,
        used_by: pc.usedBy ?? [],
        funded_by: pc.fundedBy ?? [],
        standalone: standalone,
        stable_or_beta_standalone: stableBeta,
        publiccode: pc,
      },
    }));
  }
  await writeJsonl('swiss-federal-oss-catalogue.jsonl', records);
  return { ...rowDedupCounts(records), candidate_rows: records.filter((row) => row.metadata_screen === 'candidate').length,
    candidate_distinct: new Set(records.filter((row) => row.metadata_screen === 'candidate').map((row) => row.normalized_repository_url)).size,
    priority_standalone_rows: records.filter((row) => row.metadata.standalone).length,
    priority_stable_beta_rows: records.filter((row) => row.metadata.stable_or_beta_standalone).length };
}

function parseDutchCard(html) {
  const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => decodeHtml(match[1]));
  const detailUrl = links.find((link) => /oss\.developer\.overheid\.nl\/repositories\/[0-9a-f-]{36}$/i.test(link));
  const repositoryUrl = links.find((link) => /^https?:\/\//.test(link) && !link.includes('oss.developer.overheid.nl') && !link.includes('publiccode.tools'));
  const title = stripHtml(html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] ?? '');
  const organizationLink = [...html.matchAll(/href="([^"]*organisation=[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)][0];
  const organization = organizationLink ? stripHtml(organizationLink[2]) : null;
  const description = stripHtml(html.match(/<p[^>]*class="[^"]*(?:description|summary)[^"]*"[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? '');
  const activity = stripHtml(html.match(/<span[^>]*class="last-updated"[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? '');
  return { detailUrl, repositoryUrl, title, organization, description, activity };
}

async function buildDutch() {
  const sourceId = 'netherlands-oss-register';
  const publiccodePages = [];
  const noPubliccodePages = [];
  async function fetchDutchPages(publiccode) {
    const pageUrl = (page) => `https://oss.developer.overheid.nl/repositories/pagina/${page}?publiccode=${publiccode}`;
    const firstUrl = pageUrl(1);
    const firstHtml = await getText(firstUrl);
    const count = Number(firstHtml.match(/(\d+) repositories gevonden/i)?.[1] ?? 0);
    const pageCount = Math.ceil(count / 20);
    const rest = await mapLimit(Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => index + 2), 4,
      async (page) => ({ page, pageUrl: pageUrl(page), html: await getText(pageUrl(page)) }));
    const pages = [{ page: 1, pageUrl: firstUrl, html: firstHtml }, ...rest];
    const entries = [];
    let enumeratedCards = 0;
    let missingRepositoryCards = 0;
    let missingDetailCards = 0;
    for (const page of pages) {
      const cards = [...page.html.matchAll(/<li aria-posinset="\d+" aria-setsize="\d+"[^>]*>([\s\S]*?)<\/li>/g)].map((match) => match[1]);
      enumeratedCards += cards.length;
      for (const card of cards) {
        const parsed = parseDutchCard(card);
        if (!parsed.repositoryUrl) {
          missingRepositoryCards++;
        } else if (publiccode && !parsed.detailUrl) {
          missingDetailCards++;
        } else {
          entries.push({ ...parsed, pageUrl: page.pageUrl, publiccode });
        }
      }
    }
    return { entries, count, pageCount, enumeratedCards, missingRepositoryCards, missingDetailCards };
  }
  const [publiccodeSource, noPubliccodeSource] = await Promise.all([
    fetchDutchPages(true),
    fetchDutchPages(false),
  ]);
  publiccodePages.push(...publiccodeSource.entries);
  noPubliccodePages.push(...noPubliccodeSource.entries);

  const detailed = await mapLimit(publiccodePages, 6, async (entry) => {
    let detail = '';
    try { detail = await getText(entry.detailUrl); } catch {}
    const manifestUrl = detail.match(/href="(https:\/\/raw\.githubusercontent\.com\/[^" ]+\/publiccode\.ya?ml)"/i)?.[1] ?? null;
    let pc = {};
    if (manifestUrl) {
      try { pc = yaml.load(await getText(manifestUrl)) ?? {}; } catch {}
    }
    const license = pc.legal?.license ?? detail.match(/Licentie:\s*([^<\n]+)/i)?.[1]?.trim() ?? null;
    const owner = stripHtml(detail.match(/<span itemprop="name"[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? '') || entry.organization;
    const softwareType = pc.softwareType ?? stripHtml(detail.match(/<dt[^>]*>Software type<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/i)?.[1] ?? '');
    const developmentStatus = pc.developmentStatus ?? stripHtml(detail.match(/<span[^>]*>Status<\/span>\s*<span[^>]*>([^<]*)/i)?.[1] ?? '');
    const releaseDate = pc.releaseDate ?? null;
    const nonFork = null;
    const licensed = Boolean(license && license !== 'NOASSERTION');
    const standalone = String(softwareType).startsWith('standalone');
    const priority = licensed && standalone;
    const publiccodeVersion = pc.publiccodeYmlVersion ?? stripHtml(detail.match(/publiccode\.yml[\s\S]*?<span[^>]*>([^<]+)<\/span>/i)?.[1] ?? '');
    const id = entry.detailUrl?.match(/\/repositories\/([0-9a-f-]{36})$/i)?.[1] ?? entry.repositoryUrl;
    const cardDescription = entry.description || stripHtml(detail.match(/class="utrecht-html"[^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? '');
    const broadPass = Boolean(entry.repositoryUrl && entry.detailUrl);
    return makeRecord({
      source_id: sourceId,
      source_row_id: id,
      source_record_url: entry.detailUrl ?? entry.pageUrl,
      repository_url: entry.repositoryUrl,
      title: entry.title,
      metadata_license: license,
      metadata_owner: owner,
      metadata_release_date: releaseDate,
      metadata_screen: broadPass ? 'candidate' : 'excluded',
      metadata_screen_reason: broadPass
        ? 'Public Dutch OSS Register row with publiccode.yml; survey-priority flag separately requires an exact license, standalone type, and nonfork status. This ledger is metadata triage only.'
        : 'Missing repository URL or source record URL.',
      metadata: {
        source_listing_url: entry.pageUrl,
        publiccode_present: true,
        publiccode_manifest_url: manifestUrl,
        publiccode_version: publiccodeVersion || null,
        software_type: softwareType || null,
        development_status: developmentStatus || null,
        source_activity_text: entry.activity || null,
        description: cardDescription || null,
        standalone: standalone,
        exact_license_declared: licensed,
        nonfork_status: nonFork,
        survey_priority_license_standalone_nonfork: priority ? 'pending_nonfork_check' : false,
        note: 'Dutch API requires a read-only API key; the public rendered register listing and individual detail pages were used instead.',
      },
    });
  });
  const excluded = noPubliccodePages.map((entry) => {
    const id = entry.detailUrl?.match(/\/repositories\/([0-9a-f-]{36})$/i)?.[1] ?? entry.repositoryUrl;
    return makeRecord({
      source_id: sourceId,
      source_row_id: id,
      source_record_url: entry.detailUrl ?? entry.pageUrl,
      repository_url: entry.repositoryUrl,
      title: entry.title,
      metadata_license: null,
      metadata_owner: entry.organization,
      metadata_release_date: null,
      metadata_screen: 'excluded',
      metadata_screen_reason: 'No publiccode.yml in the Dutch OSS Register; excluded from the survey publiccode metadata screen.',
      metadata: {
        source_listing_url: entry.pageUrl,
        publiccode_present: false,
        individual_detail_url: entry.detailUrl ?? null,
        individual_detail_route_missing: !entry.detailUrl,
        organization: entry.organization,
        description: entry.description || null,
        source_activity_text: entry.activity || null,
        note: 'Public listing metadata only; license, repository status, and software identity were not individually checked.',
      },
    });
  });
  const rows = [...detailed, ...excluded];
  await writeJsonl('netherlands-oss-register.jsonl', rows);
  return { ...rowDedupCounts(rows), publiccode_rows: publiccodeSource.count, no_publiccode_rows: noPubliccodeSource.count,
    source_total_rows: publiccodeSource.count + noPubliccodeSource.count,
    candidate_rows: rows.filter((row) => row.metadata_screen === 'candidate').length,
    excluded_rows: rows.filter((row) => row.metadata_screen === 'excluded').length,
    candidate_distinct: new Set(rows.filter((row) => row.metadata_screen === 'candidate').map((row) => row.normalized_repository_url)).size,
    exact_license_standalone_rows: rows.filter((row) => row.metadata.survey_priority_license_standalone_nonfork === 'pending_nonfork_check').length,
    source_pages: new Set(rows.map((row) => row.metadata.source_listing_url)).size,
    publiccode_pages: publiccodeSource.pageCount, no_publiccode_pages: noPubliccodeSource.pageCount,
    publiccode_cards: publiccodeSource.enumeratedCards, no_publiccode_cards: noPubliccodeSource.enumeratedCards,
    enumerated_cards: publiccodeSource.enumeratedCards + noPubliccodeSource.enumeratedCards,
    missing_repository_cards: publiccodeSource.missingRepositoryCards + noPubliccodeSource.missingRepositoryCards,
    missing_detail_cards: publiccodeSource.missingDetailCards + noPubliccodeSource.missingDetailCards,
    unmaterialized_source_records: Math.max(0, publiccodeSource.count + noPubliccodeSource.count - rows.length) };
}

async function buildFrance() {
  const sourceUrl = 'https://code.gouv.fr/data/codegouvfr-repositories.json';
  const sourceRows = await getJson(sourceUrl);
  const broadEligible = (row) => row.fork === false && row.archived === false && row.template === false &&
    Boolean(String(row.description ?? '').trim()) && Boolean(String(row.license ?? '').trim()) &&
    String(row.license).toLowerCase() !== 'other';
  const records = sourceRows.filter((row) => row.id).map((row) => {
    const pass = broadEligible(row);
    const repositoryUrl = row.id;
    const reasons = [];
    if (row.fork !== false) reasons.push('fork or fork status unknown');
    if (row.archived !== false) reasons.push('archived or archive status unknown');
    if (row.template !== false) reasons.push('template or template status unknown');
    if (!String(row.description ?? '').trim()) reasons.push('empty description');
    if (!String(row.license ?? '').trim()) reasons.push('empty license');
    if (String(row.license).toLowerCase() === 'other') reasons.push('license labeled Other');
    return makeRecord({
      source_id: 'france-public-body-inventory',
      // full_name is not globally unique across forges in this inventory.
      source_row_id: row.id,
      source_record_url: sourceUrl,
      repository_url: repositoryUrl,
      title: row.repo_name ?? row.full_name ?? null,
      metadata_license: row.license ?? null,
      metadata_owner: row.owner ?? null,
      metadata_release_date: null,
      metadata_screen: pass ? 'candidate' : 'excluded',
      metadata_screen_reason: pass
        ? 'French broad survey screen: nonfork, nonarchived, nontemplate, nonempty description and license, license not Other; publiccode flag recorded separately.'
        : reasons.join('; '),
      metadata: {
        inventory_url: sourceUrl,
        publiccode: row.publiccode === true,
        fork: row.fork,
        archived: row.archived,
        template: row.template,
        description: row.description,
        source_updated_at: row.updated_at ?? null,
        platform: row.platform ?? null,
        language: row.language ?? null,
        full_name: row.full_name ?? null,
        source_owner_url: row.owner ?? null,
        awesome_score: row['awesome-score'] ?? null,
        contributing_metadata: row.contributing ?? null,
        survey_publiccode_subset: row.publiccode === true,
        four_check_research: 'not performed; source metadata only',
      },
    });
  });
  await writeJsonl('france-public-body-inventory.jsonl', records);
  const candidate = records.filter((row) => row.metadata_screen === 'candidate');
  const publiccode = records.filter((row) => row.metadata.publiccode);
  return { ...rowDedupCounts(records), candidate_rows: candidate.length,
    candidate_distinct: new Set(candidate.map((row) => row.normalized_repository_url)).size,
    publiccode_rows: publiccode.length,
    publiccode_broad_screen_rows: publiccode.filter((row) => row.metadata_screen === 'candidate').length,
    publiccode_broad_screen_distinct: new Set(publiccode.filter((row) => row.metadata_screen === 'candidate').map((row) => row.normalized_repository_url)).size };
}

async function buildUk() {
  const sourceUrl = 'https://chrishylanduk.github.io/xgov-opensource-repo-scraper/repos.json';
  const mappingUrl = 'https://raw.githubusercontent.com/chrishylanduk/uk-public-sector-code-by-org/main/public/data/org-mapping.json';
  const [sourceRows, mapping] = await Promise.all([getJson(sourceUrl), getJson(mappingUrl)]);
  const ownerMapping = new Map();
  for (const org of mapping.organisations ?? []) {
    for (const account of org.github_accounts ?? []) ownerMapping.set(account.toLowerCase(), org);
  }
  const cutoff = '2026-03-31T00:00:00Z';
  const records = sourceRows.filter((row) => row.url).map((row, index) => {
    const license = row.license?.spdxId ?? null;
    const reasons = [];
    if (row.isFork !== false) reasons.push('fork or fork status unknown');
    if (row.archived !== false) reasons.push('archived or archive status unknown');
    if (!String(row.description ?? '').trim()) reasons.push('empty description');
    if (!license || license === 'NOASSERTION') reasons.push('missing or NOASSERTION detected SPDX license');
    if (!row.pushedAt || row.pushedAt < cutoff) reasons.push(`last push older than 180-day cutoff ${cutoff}`);
    const pass = reasons.length === 0;
    const org = ownerMapping.get(String(row.owner ?? '').toLowerCase()) ?? null;
    const bodyName = org?.site_slug ? org.site_slug : null;
    const recordUrl = org?.site_url ?? sourceUrl;
    return makeRecord({
      source_id: 'uk-public-sector-code',
      // The upstream JSON contains repeated URL records; keep each source
      // occurrence traceable even when owner/name is identical.
      source_row_id: `${row.url}#${index + 1}`,
      source_record_url: recordUrl,
      repository_url: row.url,
      title: row.name,
      metadata_license: license,
      metadata_owner: row.owner,
      metadata_release_date: null,
      metadata_screen: pass ? 'candidate' : 'excluded',
      metadata_screen_reason: pass
        ? `UK mapping screen: nonfork, nonarchived, described, detected SPDX other than NOASSERTION, pushed within 180 days of ${RETRIEVED_AT.slice(0, 10)}.`
        : reasons.join('; '),
      metadata: {
        inventory_url: sourceUrl,
        organization_mapping_url: mappingUrl,
        owner: row.owner,
        description: row.description,
        license_name: row.license?.name ?? null,
        license_key: row.license?.key ?? null,
        fork: row.isFork,
        archived: row.archived,
        created_at: row.createdAt ?? null,
        updated_at: row.updatedAt ?? null,
        pushed_at: row.pushedAt ?? null,
        stars: row.stargazersCount ?? null,
        forks: row.forksCount ?? null,
        language: row.language ?? null,
        mapped_public_body: org ? {
          type: org.type ?? org.org_type ?? null,
          govuk_slug: org.govuk_slug ?? null,
          site_slug: bodyName,
          site_url: org.site_url ?? null,
          wikidata_id: org.wikidata_id ?? null,
        } : null,
        four_check_research: 'not performed; mapping is community-maintained and repository metadata is a lead only',
      },
    });
  });
  await writeJsonl('uk-public-sector-code.jsonl', records);
  const candidate = records.filter((row) => row.metadata_screen === 'candidate');
  return { ...rowDedupCounts(records), candidate_rows: candidate.length,
    candidate_distinct: new Set(candidate.map((row) => row.normalized_repository_url)).size,
    cutoff, mapped_candidates: candidate.filter((row) => row.metadata.mapped_public_body).length,
    unmapped_candidates: candidate.filter((row) => !row.metadata.mapped_public_body).length };
}

async function buildSpain() {
  const sourceUrl = 'https://api.github.com/orgs/ctt-gob-es/repos?per_page=100&sort=updated';
  const rows = await getJson(sourceUrl);
  const records = rows.filter((row) => row.html_url).map((row) => makeRecord({
    source_id: 'spain-ctt',
    source_row_id: row.node_id ?? `${row.owner?.login}/${row.name}`,
    source_record_url: row.html_url,
    repository_url: row.html_url,
    title: row.name,
    metadata_license: row.license?.spdx_id ?? null,
    metadata_owner: row.owner?.login ?? 'ctt-gob-es',
    metadata_release_date: null,
    metadata_screen: 'candidate',
    metadata_screen_reason: 'Public repository in the official Spanish CTT source organization; discovery lead only, with no directory-wide license or four-check claim.',
    metadata: {
      ctt_landing_url: 'https://administracionelectronica.gob.es/ctt/index.jsp',
      official_github_organization: 'https://github.com/ctt-gob-es',
      github_api_record_url: row.url ?? null,
      description: row.description ?? null,
      homepage: row.homepage ?? null,
      license_name: row.license?.name ?? null,
      fork: row.fork ?? null,
      archived: row.archived ?? null,
      created_at: row.created_at ?? null,
      updated_at: row.updated_at ?? null,
      pushed_at: row.pushed_at ?? null,
      stars: row.stargazers_count ?? null,
      forks: row.forks_count ?? null,
      language: row.language ?? null,
      four_check_research: 'not performed; collection membership alone is insufficient',
    },
  }));
  await writeJsonl('spain-ctt.jsonl', records);
  return { ...rowDedupCounts(records), candidate_rows: records.length,
    candidate_distinct: new Set(records.map((row) => row.normalized_repository_url)).size };
}

await mkdir(OUTPUT, { recursive: true });
const report = {};
for (const [name, fn] of [
  ['swiss', buildSwiss],
  ['netherlands', buildDutch],
  ['france', buildFrance],
  ['uk', buildUk],
  ['spain', buildSpain],
]) {
  try {
    report[name] = await fn();
    if (!report[name].error) await writeManifest(name, report[name]);
  }
  catch (error) { report[name] = { error: String(error) }; }
}
console.log(JSON.stringify({ retrieved_at_utc: RETRIEVED_AT, output_directory: OUTPUT, sources: report }, null, 2));
