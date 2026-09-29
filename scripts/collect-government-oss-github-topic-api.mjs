#!/usr/bin/env node

import { randomUUID } from 'node:crypto';
import { mkdir, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(root, 'docs/research/ledger/sources');
const sourceId = 'github-topic-government-api';
const retrievedAt = new Date().toISOString();
const topic = 'government';
// Separate date windows keep each GitHub Search API query below its 1,000-result cap.
// Check the returned count at runtime and stop if a window has outgrown the cap.
const windows = [
  { label: 'through-2021', created: '<=2021-12-31' },
  { label: '2022-2023', created: '2022-01-01..2023-12-31' },
  { label: '2024-2025', created: '2024-01-01..2025-12-31' },
  { label: '2026-onward', created: '>=2026-01-01' },
];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function search(created, page, perPage) {
  const url = new URL('https://api.github.com/search/repositories');
  url.searchParams.set('q', `topic:${topic} created:${created}`);
  url.searchParams.set('sort', 'created');
  url.searchParams.set('order', 'asc');
  url.searchParams.set('page', String(page));
  url.searchParams.set('per_page', String(perPage));
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'GOSDIR-candidate-ledger/1.0',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    if (response.ok) {
      const body = await response.json();
      if (body.incomplete_results || !Number.isInteger(body.total_count)) {
        throw new Error(`${url}: incomplete or missing result count`);
      }
      if (!Array.isArray(body.items)) throw new Error(`${url}: no items array`);
      if (response.headers.get('x-ratelimit-remaining') === '0') {
        const reset = Number(response.headers.get('x-ratelimit-reset'));
        if (Number.isFinite(reset)) {
          await sleep(Math.max(1_000, reset * 1_000 - Date.now() + 2_000));
        }
      }
      return { body, url: url.href };
    }
    const remaining = response.headers.get('x-ratelimit-remaining');
    const retryAfterHeader = response.headers.get('retry-after');
    const retryAfter =
      retryAfterHeader == null ? null : Number(retryAfterHeader);
    const reset = Number(response.headers.get('x-ratelimit-reset'));
    if (
      (response.status === 403 || response.status === 429) &&
      (remaining === '0' || retryAfter !== null)
    ) {
      const waitMs =
        retryAfter !== null && Number.isFinite(retryAfter)
          ? Math.max(1_000, retryAfter * 1_000)
          : Math.max(5_000, reset * 1_000 - Date.now() + 2_000);
      console.warn(
        `${response.status} GitHub search limit; waiting ${Math.ceil(waitMs / 1_000)}s`,
      );
      await sleep(waitMs);
      continue;
    }
    throw new Error(`${url}: HTTP ${response.status}`);
  }
  throw new Error(`${url}: rate-limit retry budget exhausted`);
}

const rows = [];
const windowStats = [];
for (const window of windows) {
  const first = await search(window.created, 1, 100);
  const count = first.body.total_count;
  if (count > 1_000) {
    throw new Error(
      `${window.label}: ${count} results exceed the GitHub Search API 1,000-result cap; split this date window`,
    );
  }
  const items = [...first.body.items];
  const pages = Math.ceil(count / 100);
  for (let page = 2; page <= pages; page += 1) {
    const result = await search(window.created, page, 100);
    if (result.body.total_count !== count) {
      throw new Error(
        `${window.label}: result count drifted from ${count} to ${result.body.total_count}; retry the snapshot`,
      );
    }
    items.push(...result.body.items);
  }
  const ids = new Set(items.map((item) => item.id));
  if (items.length !== count || ids.size !== count) {
    throw new Error(
      `${window.label}: expected ${count} unique items but retrieved ${items.length} rows / ${ids.size} IDs; retry the snapshot`,
    );
  }
  for (const item of items) {
    if (
      !Number.isInteger(item.id) ||
      !/^https:\/\/github\.com\/[^/]+\/[^/]+$/.test(item.html_url)
    ) {
      throw new Error(`${window.label}: malformed GitHub repository item`);
    }
    rows.push({
      source_id: sourceId,
      source_row_id: String(item.id),
      source_record_url: item.url,
      repository_url: item.html_url,
      normalized_repository_url: item.html_url.toLowerCase(),
      title: item.name,
      metadata_license: item.license?.spdx_id ?? null,
      metadata_owner: item.owner?.login ?? null,
      metadata_release_date: null,
      metadata_screen: 'excluded',
      metadata_screen_reason:
        'github_topic_tag_only; does_not_establish_government_provenance_or_software_license',
      retrieved_at_utc: retrievedAt,
      metadata: {
        topic,
        github_repository_id: item.id,
        github_search_query_url: first.url,
        created_at: item.created_at,
        pushed_at: item.pushed_at,
        fork: item.fork,
        archived: item.archived,
        stargazers_count: item.stargazers_count,
        four_check_research: 'not performed; search-tag discovery only',
      },
    });
  }
  windowStats.push({
    window: window.label,
    query: window.created,
    result_count: count,
    pages,
  });
  console.log(`${window.label}: ${count} topic cards captured`);
}

const allIds = new Set(rows.map((row) => row.source_row_id));
if (allIds.size !== rows.length)
  throw new Error('Duplicate GitHub repository ID across date windows');
const distinctUrls = new Set(rows.map((row) => row.normalized_repository_url));
const manifest = {
  source_id: sourceId,
  source_url: 'https://api.github.com/search/repositories?q=topic%3Agovernment',
  retrieved_at_utc: retrievedAt,
  repository_rows: rows.length,
  distinct_normalized_repositories: distinctUrls.size,
  metadata_candidates: 0,
  metadata_excluded: rows.length,
  windows: windowStats,
  note: 'This is a date-partitioned GitHub Search API snapshot, not a government provenance or license review. Query results may change as topics are edited. It complements the separately captured HTML cards; neither is counted as an individual four-check decision.',
};

await mkdir(outputDirectory, { recursive: true });
for (const [filename, content] of [
  [
    `${sourceId}.jsonl`,
    `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`,
  ],
  [`${sourceId}.manifest.json`, `${JSON.stringify(manifest, null, 2)}\n`],
]) {
  const target = path.join(outputDirectory, filename);
  const temporary = `${target}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, content);
    await rename(temporary, target);
  } finally {
    await unlink(temporary).catch(() => {});
  }
}
console.log(`${sourceId}: ${rows.length} discovery-only rows captured`);
