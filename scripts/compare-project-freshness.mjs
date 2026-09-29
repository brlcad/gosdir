#!/usr/bin/env node

import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);
const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const canonicalPath = path.join(
  repositoryRoot,
  'lib/catalog/project-freshness.json',
);
const candidatePath = path.join(
  repositoryRoot,
  'lib/catalog/project-freshness.candidate.json',
);
const failOnReview = process.argv.includes('--fail-on-review');
const requirePublication = process.argv.includes('--require-publication');
const current = await readCurrentSnapshot();
const baseline = await readBaselineSnapshot();
const reviewItems = [];
const changes = [];

console.log('# Project freshness review');
console.log('');
console.log(`Generated: **${current.generatedAt}**`);
console.log(`Records: **${Object.keys(current.projects).length}**`);
console.log('');
printCounts(
  'Freshness',
  Object.values(current.projects).map(({ status }) => status),
);
printCounts(
  'Link checks',
  Object.values(current.projects).flatMap(({ links }) =>
    Object.values(links).map(({ status }) => status),
  ),
);

const currentProblems = [];
for (const [id, record] of Object.entries(current.projects)) {
  if (record.collectionStatus === 'unavailable')
    currentProblems.push(`${id}: repository activity unavailable`);
  for (const [role, link] of Object.entries(record.links)) {
    if (link.status === 'auth-required')
      currentProblems.push(
        `${id}: ${role} link blocked the automated check${link.httpStatus ? ` (HTTP ${link.httpStatus})` : ''}`,
      );
    else if (!['ok', 'redirected'].includes(link.status))
      currentProblems.push(
        `${id}: ${role} link ${link.status}${link.httpStatus ? ` (HTTP ${link.httpStatus})` : ''}`,
      );
  }
}

if (!baseline) {
  reviewItems.push(
    'No committed baseline was available; review the complete snapshot.',
  );
} else {
  for (const [id, record] of Object.entries(current.projects)) {
    const before = baseline.projects?.[id];
    if (!before) {
      reviewItems.push(`${id}: new freshness record`);
      continue;
    }
    if (before.status !== record.status)
      reviewItems.push(`${id}: freshness ${before.status} → ${record.status}`);
    if (before.collectionStatus !== record.collectionStatus)
      reviewItems.push(
        `${id}: activity collection ${before.collectionStatus} → ${record.collectionStatus}`,
      );
    if (before.archived !== record.archived)
      reviewItems.push(
        `${id}: archive observation ${String(before.archived)} → ${String(record.archived)}`,
      );
    if (before.headOid !== record.headOid)
      changes.push(`${id}: default-branch head changed`);
    if (before.lastChangeAt !== record.lastChangeAt)
      changes.push(
        `${id}: last commit ${before.lastChangeAt ?? 'unavailable'} → ${record.lastChangeAt ?? 'unavailable'}`,
      );
    if (
      JSON.stringify(before.annualCommits) !==
      JSON.stringify(record.annualCommits)
    )
      changes.push(`${id}: annual commit trend changed`);
    for (const [role, link] of Object.entries(record.links)) {
      const previousLink = before.links?.[role];
      if (
        !previousLink ||
        previousLink.status !== link.status ||
        previousLink.finalUrl !== link.finalUrl
      ) {
        const detail = `${id}: ${role} link ${previousLink?.status ?? 'new'} → ${link.status}`;
        if (
          [
            'not-found',
            'unavailable',
            'error',
            'rate-limited',
            'transient',
          ].includes(link.status)
        )
          reviewItems.push(detail);
        else changes.push(detail);
      }
    }
  }
  for (const id of Object.keys(baseline.projects ?? {})) {
    if (!(id in current.projects))
      reviewItems.push(`${id}: freshness record removed`);
  }
  if (requirePublication && baseline.generatedAt !== current.generatedAt)
    reviewItems.push(
      `Publish the reviewed ${current.generatedAt} snapshot before the 45-day freshness gate expires.`,
    );
}

printList('Current observations that need context', currentProblems);
printList('Editorial review required', reviewItems);
printList('Other observed changes', changes);

if (failOnReview && reviewItems.length) process.exitCode = 1;

function printCounts(label, values) {
  const counts = values.reduce((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});
  console.log(`## ${label}`);
  console.log('');
  console.log(
    Object.entries(counts)
      .sort()
      .map(([name, count]) => `${name}: ${count}`)
      .join(' · '),
  );
  console.log('');
}

function printList(title, items) {
  console.log(`## ${title}`);
  console.log('');
  if (!items.length) console.log('None.');
  else items.forEach((item) => console.log(`- ${item}`));
  console.log('');
}

async function readCurrentSnapshot() {
  try {
    return JSON.parse(await readFile(candidatePath, 'utf8'));
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
    return JSON.parse(await readFile(canonicalPath, 'utf8'));
  }
}

async function readBaselineSnapshot() {
  try {
    const { stdout } = await execFileAsync(
      'git',
      ['show', 'HEAD:lib/catalog/project-freshness.json'],
      {
        cwd: repositoryRoot,
        maxBuffer: 1024 * 1024 * 10,
      },
    );
    return JSON.parse(stdout);
  } catch {
    return null;
  }
}
