#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'docs/research/ledger/sources');
const retrievedAt = new Date().toISOString();

async function getJson(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'GOSDIR-candidate-ledger/1.0' } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

function normalizedRepository(raw) {
  const url = new URL(raw);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error(`Unsupported repository URL: ${raw}`);
  url.protocol = 'https:';
  url.username = '';
  url.password = '';
  url.search = '';
  url.hash = '';
  url.hostname = url.hostname.toLowerCase();
  url.pathname = url.pathname.replace(/\/+$/, '').replace(/\.git$/i, '').toLowerCase();
  return url.href;
}

async function writeSource(sourceId, sourceUrl, records, extra = {}) {
  records.sort((a, b) => a.normalized_repository_url.localeCompare(b.normalized_repository_url));
  await writeFile(path.join(outputDirectory, `${sourceId}.jsonl`), `${records.map((record) => JSON.stringify(record)).join('\n')}\n`);
  await writeFile(path.join(outputDirectory, `${sourceId}.manifest.json`), `${JSON.stringify({
    source_id: sourceId,
    source_url: sourceUrl,
    retrieved_at_utc: retrievedAt,
    repository_rows: records.length,
    distinct_normalized_repositories: new Set(records.map((record) => record.normalized_repository_url)).size,
    metadata_candidates: records.filter((record) => record.metadata_screen === 'candidate').length,
    metadata_excluded: records.filter((record) => record.metadata_screen === 'excluded').length,
    note: 'Metadata screens are discovery only; individual four-check reviews are stored separately.',
    ...extra,
  }, null, 2)}\n`);
  console.log(`${sourceId}: ${records.length} repository leads`);
}

function record(sourceId, sourceUrl, repo, options = {}) {
  const license = repo.license?.spdx_id ?? null;
  return {
    source_id: sourceId,
    source_row_id: options.rowId ?? String(repo.id),
    source_record_url: options.recordUrl ?? sourceUrl,
    repository_url: repo.html_url,
    normalized_repository_url: normalizedRepository(repo.html_url),
    title: options.title ?? repo.name,
    metadata_license: license,
    metadata_owner: options.owner ?? repo.owner?.login ?? null,
    metadata_release_date: repo.created_at ?? null,
    metadata_screen: options.screen ?? 'candidate',
    metadata_screen_reason: options.reason ?? 'first_party_collection_lead; source_license_requires_repository_check',
    retrieved_at_utc: retrievedAt,
    metadata: {
      description: repo.description ?? null,
      github_created_at: repo.created_at ?? null,
      github_pushed_at: repo.pushed_at ?? null,
      github_archived: Boolean(repo.archived),
      github_fork: Boolean(repo.fork),
      github_stars: repo.stargazers_count ?? null,
      github_license_detection: license,
      ...options.metadata,
    },
  };
}

await mkdir(outputDirectory, { recursive: true });

// The government page links six products, although Isomer links its GitHub
// organization rather than one repository. The current product repository is
// retained as a lead, with that distinction explicit in the row metadata.
const singaporeSource = 'https://www.open.gov.sg/for-developers/open-source/';
const singaporeProducts = [
  ['Form', 'opengovsg/FormSG', 'direct_product_link'],
  ['Go', 'opengovsg/GoGovSG', 'direct_product_link'],
  ['Postman', 'opengovsg/postmangovsg', 'direct_product_link'],
  ['Isomer', 'opengovsg/isomer', 'government_page_links_organization_not_exact_repository'],
  ['CheckFirst', 'opengovsg/checkfirst', 'direct_product_link'],
  ['MockPass', 'opengovsg/mockpass', 'direct_product_link'],
];
const singaporeRows = await Promise.all(singaporeProducts.map(async ([title, slug, linkStatus], index) => {
  const repo = await getJson(`https://api.github.com/repos/${slug}`);
  return record('singapore-ogp', singaporeSource, repo, {
    rowId: String(index + 1),
    title,
    owner: 'Open Government Products (Singapore)',
    metadata: { official_page_link_status: linkStatus },
  });
}));
await writeSource('singapore-ogp', singaporeSource, singaporeRows, {
  official_product_names: singaporeProducts.length,
  official_page_exact_repository_links: 5,
  official_page_organization_links: 1,
});

// Unlike the 2026-09-22 survey's 16, the live official agency organization
// currently exposes 19 public repositories. All are leads, not assumed products.
const japanSource = 'https://github.com/digital-go-jp';
const japanRepos = await getJson('https://api.github.com/orgs/digital-go-jp/repos?per_page=100');
if (!Array.isArray(japanRepos) || japanRepos.length === 100) throw new Error('Japan organization pagination is required');
const japanRows = japanRepos.map((repo) => record('japan-digital-agency', japanSource, repo, {
  owner: 'Digital Agency of Japan',
  screen: !repo.fork && !repo.archived && repo.license?.spdx_id && repo.license.spdx_id !== 'NOASSERTION' ? 'candidate' : 'excluded',
  reason: repo.fork ? 'github_fork' : repo.archived ? 'github_archived' : !repo.license?.spdx_id || repo.license.spdx_id === 'NOASSERTION' ? 'github_license_not_named' : 'first_party_repository_with_named_detected_license',
}));
await writeSource('japan-digital-agency', japanSource, japanRows, {
  raw_public_repositories: japanRepos.length,
  official_organization_homepage: 'https://www.digital.go.jp/',
});

// Brazil's current government catalog page visibly names four projects; three
// link directly to GitHub. Its older 81-item portal is 403 from this runtime.
// The missing 78+ records are explicitly counted here, not silently omitted.
const brazilSource = 'https://www.gov.br/governodigital/pt-br/plataformas-e-servicos-digitais/software-publico/catalogo/catalogo';
const brazilProducts = [
  ['Gepnet', 'spbgovbr/gepnet', 'Polícia Federal'],
  ['Sistema Programa de Gestão SUSEP', 'spbgovbr/Sistema_Programa_de_Gestao_Susep', 'SUSEP'],
  ['Sistema Programa de Gestão de Demandas CGU/MMA', 'spbgovbr/Sistema_Programa_de_Gestao_de_Demandas_CGU-MMA', 'CGU and MMA'],
];
const brazilRows = await Promise.all(brazilProducts.map(async ([title, slug, agency], index) => {
  const repo = await getJson(`https://api.github.com/repos/${slug}`);
  return record('brazil-software-publico', brazilSource, repo, {
    rowId: String(index + 1),
    title,
    owner: agency,
    metadata: { government_catalog_description_agency: agency },
  });
}));
await writeSource('brazil-software-publico', brazilSource, brazilRows, {
  current_government_page_visible_products: 4,
  current_government_page_git_repositories: 3,
  visible_product_without_repository: 'App Coronavírus-SUS',
  historical_portal_claimed_catalog_size: 81,
  historical_portal_url: 'https://softwarepublico.gov.br/social/search/software_infos',
  historical_portal_access: 'HTTP 403 from this runtime on 2026-09-28; individual entries and repositories not enumerated',
});
