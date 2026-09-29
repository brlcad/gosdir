#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'docs/research/ledger/sources');
const retrievedAt = new Date().toISOString();
const headers = { 'User-Agent': 'GOSDIR-candidate-ledger/1.0' };

async function getPage(topic, page) {
  const url = `https://github.com/topics/${topic}?page=${page}`;
  const response = await fetch(url, { headers });
  if (!response.ok) {
    const error = new Error(`${url}: HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  const body = await response.text();
  const declared = Number(body.match(/([0-9,]+) public repositories/)?.[1]?.replaceAll(',', ''));
  const slugs = [...body.matchAll(/REPOSITORY_NAME_HEADING[\s\S]{0,500}?href="\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)"/g)]
    .map((match) => match[1]);
  if (!slugs.length) throw new Error(`${url}: no repository cards parsed`);
  return { url, declared, slugs };
}

async function fetchTopic(topic) {
  let first;
  try { first = await getPage(topic, 1); }
  catch (error) {
    if (error.status === 429 || error.status === 403) {
      console.warn(`${topic}: GitHub rate-limited the first page (HTTP ${error.status}); no snapshot written`);
      return;
    }
    throw error;
  }
  const claimed = first.declared;
  if (!Number.isInteger(claimed) || claimed < first.slugs.length) throw new Error(`${topic}: repository count missing`);
  const accessiblePages = Math.min(50, Math.ceil(claimed / 20));
  const pages = [first];
  let stoppedHttpStatus = null;
  for (let page = 2; page <= accessiblePages; page += 1) {
    await new Promise((resolve) => setTimeout(resolve, 250));
    try { pages.push(await getPage(topic, page)); }
    catch (error) {
      if (error.status === 429 || error.status === 403) {
        stoppedHttpStatus = error.status;
        break;
      }
      throw error;
    }
  }
  const sourceId = `github-topic-${topic}`;
  const rows = pages.flatMap(({ url, slugs }, pageIndex) => slugs.map((slug, cardIndex) => ({
    source_id: sourceId,
    source_row_id: `${pageIndex + 1}:${cardIndex + 1}:${slug}`,
    source_record_url: url,
    repository_url: `https://github.com/${slug}`,
    normalized_repository_url: `https://github.com/${slug.toLowerCase()}`,
    title: slug.split('/')[1],
    metadata_license: null,
    metadata_owner: slug.split('/')[0],
    metadata_release_date: null,
    metadata_screen: 'excluded',
    metadata_screen_reason: 'github_topic_tag_only; does_not_establish_government_provenance_or_software_license',
    retrieved_at_utc: retrievedAt,
    metadata: { topic, page: pageIndex + 1, four_check_research: 'not performed; search-tag discovery only' },
  })));
  const distinct = new Set(rows.map((row) => row.normalized_repository_url));
  await writeFile(path.join(outputDirectory, `${sourceId}.jsonl`), `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`);
  await writeFile(path.join(outputDirectory, `${sourceId}.manifest.json`), `${JSON.stringify({
    source_id: sourceId,
    source_url: `https://github.com/topics/${topic}`,
    retrieved_at_utc: retrievedAt,
    raw_topic_public_repositories_claim: claimed,
    fetched_html_pages: pages.length,
    html_pagination_cap_pages: 50,
    stopped_http_status: stoppedHttpStatus,
    repository_rows: rows.length,
    distinct_normalized_repositories: distinct.size,
    metadata_candidates: 0,
    metadata_excluded: rows.length,
    unenumerated_due_to_rate_or_page_limit_at_least: Math.max(0, claimed - rows.length),
    note: 'Topic tags are discovery only. GitHub topic HTML returns 404 after page 50 here, and may rate-limit earlier; this is a capped partial snapshot, not necessarily the complete topic. Counts can drift while pages are fetched.',
  }, null, 2)}\n`);
  console.log(`${topic}: ${rows.length} captured cards from ${claimed} claimed public repositories`);
}

await mkdir(outputDirectory, { recursive: true });
await fetchTopic('government');
await fetchTopic('publiccode');
