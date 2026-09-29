#!/usr/bin/env node

import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

import { classifyLinkObservation } from './lib/project-availability-policy.mjs';

const execFileAsync = promisify(execFile);
const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const canonicalPath = path.join(
  repositoryRoot,
  'lib/catalog/project-availability.json',
);
const candidatePath = path.join(
  repositoryRoot,
  'lib/catalog/project-availability.candidate.json',
);
const { snapshot: current, candidate } = await readCurrentSnapshot();
const baseline = await readBaselineSnapshot();
const projects = await loadCanonicalProjects();
const failOnEditorialReview = process.argv.includes(
  '--fail-on-editorial-review',
);
const statusChanges = [];
const otherChanges = [];
const pendingFailures = [];
const hardLinks = [];
const inconclusive = [];
const editorialReviewsDue = [];

for (const [id, record] of Object.entries(current.projects)) {
  const before = baseline?.projects?.[id];
  if (!before) {
    otherChanges.push(`${id}: new availability record (${record.status})`);
  } else {
    if (before.status !== record.status) {
      statusChanges.push(
        `${id}: ${before.status} -> ${record.status}${reasonSuffix(record.reasonCodes)}`,
      );
    }
    if (before.failureStreak !== record.failureStreak) {
      otherChanges.push(
        `${id}: failure streak ${before.failureStreak} -> ${record.failureStreak}`,
      );
    }
    for (const [role, link] of Object.entries(record.links)) {
      const previousLink = before.links?.[role];
      if (
        !previousLink ||
        previousLink.status !== link.status ||
        previousLink.finalUrl !== link.finalUrl ||
        previousLink.errorCode !== link.errorCode
      ) {
        otherChanges.push(
          `${id}: ${role} ${previousLink?.status ?? 'new'} -> ${link.status}`,
        );
      }
    }
  }

  if (
    record.status === 'enabled' &&
    record.failureStreak > 0 &&
    record.reasonCodes.length
  ) {
    pendingFailures.push(
      `${id}: hard failure ${record.failureStreak}/2${reasonSuffix(record.reasonCodes)}; another hard assessment disables this record`,
    );
  }
  for (const [role, link] of Object.entries(record.links)) {
    const classification = classifyLinkObservation(link);
    if (classification === 'hard') {
      hardLinks.push(`${id}: ${role} ${linkDetail(link)}`);
    } else if (classification === 'inconclusive') {
      inconclusive.push(`${id}: ${role} ${linkDetail(link)}`);
    }
  }
}

for (const id of Object.keys(baseline?.projects ?? {})) {
  if (!(id in current.projects)) {
    otherChanges.push(`${id}: availability record removed with catalog entry`);
  }
}

const snapshotDay = Date.parse(`${current.generatedAt}T00:00:00Z`);
for (const project of projects) {
  const availability = current.projects[project.id];
  if (
    availability?.status !== 'enabled' ||
    project.directory?.status === 'disabled'
  ) {
    continue;
  }

  const verifiedDay = Date.parse(`${project.verified}T00:00:00Z`);
  const ageDays = Math.floor((snapshotDay - verifiedDay) / 86_400_000);
  if (Number.isFinite(ageDays) && ageDays > 365) {
    editorialReviewsDue.push(
      `${project.id}: substantive criteria last reviewed ${project.verified} (${ageDays} days ago); re-review \`lib/catalog/software/${project.id}.ts\``,
    );
  }
}

console.log('# Daily project availability review');
console.log('');
console.log(`Generated: **${current.generatedAt}**`);
console.log(`Records: **${Object.keys(current.projects).length}**`);
console.log(
  `Input: **${candidate ? 'blast-radius candidate' : 'publishable snapshot'}**`,
);
console.log('');
printCounts(
  'Publication status',
  Object.values(current.projects).map(({ status }) => status),
);
printCounts(
  'Link observations',
  Object.values(current.projects).flatMap(({ links }) =>
    Object.values(links).map(({ status }) => status),
  ),
);
printList('Publication status changes', statusChanges);
printList('Pending hard failures', pendingFailures);
printList('Definitive link failures', hardLinks);
printList('Inconclusive observations', inconclusive);
printList('Editorial criteria review due', editorialReviewsDue);
printList('Other observed changes', otherChanges);

console.log('## Manual intervention');
console.log('');
if (candidate) {
  console.log(
    '- The blast-radius guard retained the current published snapshot. Inspect every transition in `lib/catalog/project-availability.candidate.json`; correct bad URLs or checker behavior, then rerun `npm run review:availability -- --accept-blast-radius` only if the complete transition set is valid.',
  );
}
if (pendingFailures.length) {
  console.log(
    '- At least one enabled record has its first durable failure. Confirm or replace its canonical URL before the next daily run; a second hard assessment disables it automatically.',
  );
}
if (inconclusive.length) {
  console.log(
    '- Inconclusive responses do not change publication state. If one persists, verify it in a browser and add a narrowly scoped checker exception only when the public source is independently confirmed.',
  );
}
if (hardLinks.length) {
  console.log(
    '- Repair or replace every definitively unavailable required URL; remove a dead optional URL only when another evidence path remains. Disabled records remain directly addressable so editors can repair and restore them.',
  );
}
if (statusChanges.length) {
  console.log(
    '- Merge the generated pull request after its checks pass. The production Apache checkout is not connected to GitHub Actions; fast-forward `/usr/web/gosdir.com` to the tested merge commit (or use the host deployment hook) to publish the change.',
  );
}
if (editorialReviewsDue.length) {
  console.log(
    '- One or more enabled records require substantive editorial re-review. For every ID under **Editorial criteria review due**:',
  );
  console.log(
    '  1. Open its `lib/catalog/software/<id>.ts` record and the live canonical repository, official page, provenance evidence, and license text.',
  );
  console.log(
    '  2. Re-establish government creation, commissioning, funding, sponsorship, or stewardship; anonymous public source access; an OSI-approved license or clear public-domain basis; and primary evidence.',
  );
  console.log(
    '  3. If every criterion still holds, set `verified` to the date the editor actually completed that review. Do not advance it from automated link results alone.',
  );
  console.log(
    "  4. If any criterion cannot be established, add `directory: { status: 'disabled', reason: '<specific public-facing reason>', reviewed: '<YYYY-MM-DD>' }` instead. Do not delete the record; the hold keeps the direct record explanatory and cannot be cleared by link automation.",
  );
  console.log(
    '  5. Run `npm run review:availability`, `npm run check`, `npm run build`, and `npm run build:apache`; review the resulting snapshot and static diff, then update the pull request.',
  );
}
if (
  !candidate &&
  !pendingFailures.length &&
  !hardLinks.length &&
  !inconclusive.length &&
  !statusChanges.length &&
  !editorialReviewsDue.length
) {
  console.log('- No record-level editorial intervention is required.');
}
console.log('');

if (failOnEditorialReview && editorialReviewsDue.length) process.exitCode = 1;

function reasonSuffix(reasonCodes) {
  return reasonCodes?.length ? ` (${reasonCodes.join(', ')})` : '';
}

function linkDetail(link) {
  const detail = [link.status];
  if (link.httpStatus) detail.push(`HTTP ${link.httpStatus}`);
  if (link.errorCode) detail.push(link.errorCode);
  return detail.join(' / ');
}

function printCounts(title, values) {
  const counts = values.reduce((result, value) => {
    result[value] = (result[value] ?? 0) + 1;
    return result;
  }, {});
  console.log(`## ${title}`);
  console.log('');
  console.log(
    Object.entries(counts)
      .sort(([left], [right]) => left.localeCompare(right))
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
    return {
      snapshot: JSON.parse(await readFile(candidatePath, 'utf8')),
      candidate: true,
    };
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
    return {
      snapshot: JSON.parse(await readFile(canonicalPath, 'utf8')),
      candidate: false,
    };
  }
}

async function readBaselineSnapshot() {
  try {
    const { stdout } = await execFileAsync(
      'git',
      ['show', 'HEAD:lib/catalog/project-availability.json'],
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

async function loadCanonicalProjects() {
  const vite = await createServer({
    root: repositoryRoot,
    configFile: false,
    appType: 'custom',
    logLevel: 'silent',
    server: { middlewareMode: true },
  });

  try {
    const catalog = await vite.ssrLoadModule('/lib/catalog/software/index.ts');
    if (!Array.isArray(catalog.projects)) {
      throw new Error(
        'lib/catalog/software/index.ts must export projects as an array',
      );
    }
    return catalog.projects;
  } finally {
    await vite.close();
  }
}
