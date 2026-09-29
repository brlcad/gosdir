#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'docs/research/ledger/sources');
const retrievedAt = new Date().toISOString();

async function html(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'GOSDIR-candidate-ledger/1.0' } });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.text();
}

function sourceRecord(sourceId, sourceUrl, slug, reason, metadata = {}) {
  const repository = `https://github.com/${slug}`;
  const normalized = `https://github.com/${slug.toLowerCase()}`;
  return {
    source_id: sourceId,
    source_row_id: slug,
    source_record_url: sourceUrl,
    repository_url: repository,
    normalized_repository_url: normalized,
    title: slug.split('/').at(-1),
    metadata_license: null,
    metadata_owner: slug.split('/')[0],
    metadata_release_date: null,
    metadata_screen: reason === 'documentation_or_guidance' ? 'excluded' : 'candidate',
    metadata_screen_reason: reason,
    retrieved_at_utc: retrievedAt,
    metadata: { ...metadata, four_check_research: 'not performed; collection link only' },
  };
}

async function save(sourceId, sourceUrl, records, extra = {}) {
  const unique = [...new Map(records.map((record) => [record.normalized_repository_url, record])).values()];
  unique.sort((a, b) => a.normalized_repository_url.localeCompare(b.normalized_repository_url));
  await writeFile(path.join(outputDirectory, `${sourceId}.jsonl`), `${unique.map((record) => JSON.stringify(record)).join('\n')}\n`);
  await writeFile(path.join(outputDirectory, `${sourceId}.manifest.json`), `${JSON.stringify({
    source_id: sourceId,
    source_url: sourceUrl,
    retrieved_at_utc: retrievedAt,
    repository_rows: unique.length,
    distinct_normalized_repositories: unique.length,
    metadata_candidates: unique.filter((record) => record.metadata_screen === 'candidate').length,
    metadata_excluded: unique.filter((record) => record.metadata_screen === 'excluded').length,
    note: 'Collection membership is a discovery lead, not government provenance or an individual four-check review.',
    ...extra,
  }, null, 2)}\n`);
  console.log(`${sourceId}: ${unique.length} repository leads`);
}

await mkdir(outputDirectory, { recursive: true });

const gsaUrl = 'https://open.gsa.gov/oss-examples/';
const gsaHtml = await html(gsaUrl);
const gsaSlugs = [...gsaHtml.matchAll(/https:\/\/github\.com\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)(?:[#"/?<]|$)/g)]
  .map((match) => match[1]);
if (new Set(gsaSlugs).size !== 4) throw new Error(`Expected four GSA example repository links; found ${new Set(gsaSlugs).size}`);
await save('gsa-oss-examples', gsaUrl, gsaSlugs.map((slug) => sourceRecord(
  'gsa-oss-examples', gsaUrl, slug,
  /\/handbook$|\/cto-website$/i.test(slug) ? 'documentation_or_guidance' : 'official_gsa_example_repository; direct_license_and_product_check_pending',
)));

const payUrl = 'https://docs.payments.service.gov.uk/contribute/';
const payHtml = await html(payUrl);
const paySlugs = [...payHtml.matchAll(/https:\/\/github\.com\/(govuk-pay\/pay-[a-z0-9-]+)(?:[#"/?<]|$)/gi)]
  .map((match) => match[1]);
if (new Set(paySlugs).size < 11) throw new Error(`Expected at least eleven GOV.UK Pay component links; found ${new Set(paySlugs).size}`);
await save('govuk-pay-components', payUrl, paySlugs.map((slug) => sourceRecord(
  'govuk-pay-components', payUrl, slug,
  slug.endsWith('/pay-tech-docs') ? 'documentation_or_guidance' : 'official_govuk_pay_component; product_family_dedup_required',
  { product_family: 'GOV.UK Pay' },
)), { official_named_components: 11 });
