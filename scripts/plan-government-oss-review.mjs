#!/usr/bin/env node

import {
  mkdir,
  open,
  readFile,
  readdir,
  rename,
  unlink,
  writeFile,
} from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ledger = path.join(root, 'docs/research/ledger');
const batchDirectory = path.join(ledger, 'batches');
const option = (name) => {
  const index = process.argv.indexOf(name);
  return index < 0 ? null : process.argv[index + 1];
};
const batchId = option('--batch-id');
const sourceId = option('--source');
const exactUrl = option('--url');
const sourceMetadataFlag = option('--source-metadata-flag');
const metadataScreen = option('--metadata-screen') ?? 'candidate';
const limit = Number(option('--limit') ?? 20);
if (!batchId || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(batchId)) {
  throw new Error('Pass --batch-id with a unique lowercase slug');
}
if (!Number.isInteger(limit) || limit < 1 || limit > 200) {
  throw new Error('--limit must be an integer from 1 through 200');
}
if (
  sourceMetadataFlag &&
  (!sourceId || !/^[a-z_][a-z0-9_]*$/.test(sourceMetadataFlag))
) {
  throw new Error(
    '--source-metadata-flag requires --source and a snake_case flag name',
  );
}
if (!['candidate', 'excluded', 'all'].includes(metadataScreen)) {
  throw new Error('--metadata-screen must be candidate, excluded, or all');
}
if (exactUrl) {
  let parsed;
  try {
    parsed = new URL(exactUrl);
  } catch {
    throw new Error('--url must be a normalized HTTP(S) repository URL');
  }
  if (
    !['http:', 'https:'].includes(parsed.protocol) ||
    parsed.href !== exactUrl
  ) {
    throw new Error('--url must be a normalized HTTP(S) repository URL');
  }
}

await mkdir(batchDirectory, { recursive: true });
const lockPath = path.join(batchDirectory, '.planner.lock');
let lock;
for (let attempt = 0; attempt < 300; attempt += 1) {
  try {
    lock = await open(lockPath, 'wx');
    break;
  } catch (error) {
    if (error?.code !== 'EEXIST') throw error;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}
if (!lock) throw new Error(`Review batch planner lock busy: ${lockPath}`);
try {
  const existingBatchFiles = (await readdir(batchDirectory)).filter((name) =>
    name.endsWith('.jsonl'),
  );
  if (existingBatchFiles.includes(`${batchId}.jsonl`)) {
    throw new Error(`Batch ${batchId} already exists`);
  }
  const assigned = new Set();
  for (const filename of existingBatchFiles) {
    const lines = (await readFile(path.join(batchDirectory, filename), 'utf8'))
      .split(/\r?\n/)
      .filter(Boolean);
    for (const line of lines)
      assigned.add(JSON.parse(line).normalized_repository_url);
  }
  const candidates = (
    await readFile(path.join(ledger, 'candidates.jsonl'), 'utf8')
  )
    .split(/\r?\n/)
    .filter(Boolean)
    .map(JSON.parse);
  let flaggedSourceUrls = null;
  if (sourceMetadataFlag) {
    const sourceFile = path.join(ledger, 'sources', `${sourceId}.jsonl`);
    flaggedSourceUrls = new Set(
      (await readFile(sourceFile, 'utf8'))
        .split(/\r?\n/)
        .filter(Boolean)
        .map(JSON.parse)
        .filter((row) => row.metadata?.[sourceMetadataFlag] === true)
        .map((row) => row.normalized_repository_url),
    );
  }
  const eligible = candidates.filter(
    (candidate) =>
      candidate.review_status === 'unreviewed' &&
      (metadataScreen === 'all' ||
        candidate.metadata_candidate === (metadataScreen === 'candidate')) &&
      (!exactUrl || candidate.normalized_repository_url === exactUrl) &&
      !assigned.has(candidate.normalized_repository_url) &&
      (!sourceId ||
        candidate.source_rows.some((row) => row.source_id === sourceId)) &&
      (!flaggedSourceUrls ||
        flaggedSourceUrls.has(candidate.normalized_repository_url)),
  );
  eligible.sort((a, b) => {
    const aSourceCount = new Set(a.source_rows.map((row) => row.source_id))
      .size;
    const bSourceCount = new Set(b.source_rows.map((row) => row.source_id))
      .size;
    if (aSourceCount !== bSourceCount) return bSourceCount - aSourceCount;
    return a.normalized_repository_url.localeCompare(
      b.normalized_repository_url,
    );
  });
  const batch = eligible.slice(0, limit).map((candidate) => ({
    batch_id: batchId,
    normalized_repository_url: candidate.normalized_repository_url,
    titles: candidate.titles,
    catalog_project_id: candidate.catalog_project_id,
    source_rows: candidate.source_rows,
  }));
  if (exactUrl && batch.length !== 1) {
    throw new Error(
      `--url ${exactUrl} has no eligible unreviewed, unassigned candidate`,
    );
  }
  const target = path.join(batchDirectory, `${batchId}.jsonl`);
  const temporary = `${target}.${randomUUID()}.tmp`;
  try {
    await writeFile(
      temporary,
      batch.map(JSON.stringify).join('\n') + (batch.length ? '\n' : ''),
    );
    await rename(temporary, target);
  } finally {
    await unlink(temporary).catch(() => {});
  }
  console.log(
    `${batchId}: assigned ${batch.length} of ${eligible.length} available unreviewed ${metadataScreen} leads${sourceId ? ` from ${sourceId}` : ''}${sourceMetadataFlag ? ` with ${sourceMetadataFlag}=true` : ''}`,
  );
} finally {
  await lock.close();
  await unlink(lockPath);
}
