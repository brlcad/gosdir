#!/usr/bin/env node

import { readFile, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

import {
  applyProjectAvailabilityPolicy,
  availabilityReasonCodes,
  findBlastRadiusViolation,
  shouldUsePendingAvailabilitySnapshot,
} from './lib/project-availability-policy.mjs';
import { checkPublicLink } from './lib/public-link-check.mjs';

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const outputPath = path.join(
  repositoryRoot,
  'lib/catalog/project-availability.json',
);
const candidatePath = path.join(
  repositoryRoot,
  'lib/catalog/project-availability.candidate.json',
);
const freshnessPath = path.join(
  repositoryRoot,
  'lib/catalog/project-freshness.json',
);
const temporaryOutputPath = `${outputPath}.tmp-${process.pid}`;
const today = new Date().toISOString().slice(0, 10);
const bootstrap = process.argv.includes('--bootstrap');
const acceptBlastRadius = process.argv.includes('--accept-blast-radius');
const baseSnapshotOption = stringOption(
  '--base-snapshot',
  process.env.GOSDIR_AVAILABILITY_BASE_SNAPSHOT,
);
const baseSnapshotPath = baseSnapshotOption
  ? path.resolve(repositoryRoot, baseSnapshotOption)
  : null;
const maximumStatusChanges = integerOption(
  '--max-status-changes',
  process.env.GOSDIR_MAX_AVAILABILITY_STATUS_CHANGES,
  5,
);
const linkConcurrency = integerOption(
  '--link-concurrency',
  process.env.GOSDIR_LINK_CHECK_CONCURRENCY,
  8,
);
const userAgent = 'GOSDIR-record-health/1.0 (+https://gosdir.com/methodology/)';

let vite;

try {
  vite = await createServer({
    root: repositoryRoot,
    configFile: false,
    appType: 'custom',
    logLevel: 'silent',
    server: { middlewareMode: true },
  });
  const { projects } = await vite.ssrLoadModule(
    '/lib/catalog/software/index.ts',
  );
  const freshness = await readJson(freshnessPath);
  const canonicalPrevious = bootstrap
    ? null
    : await readJsonIfPresent(outputPath);

  if (!bootstrap && !canonicalPrevious) {
    throw new Error(
      'No availability snapshot exists. Run npm run review:availability -- --bootstrap once before the scheduled review.',
    );
  }

  const previous = bootstrap
    ? null
    : await selectPreviousSnapshot(canonicalPrevious, baseSnapshotPath);

  const checkedLinksByProject = bootstrap
    ? linksFromFreshness(projects, freshness)
    : await collectCurrentLinks(projects);
  const records = {};

  for (const project of projects) {
    const links = checkedLinksByProject[project.id];
    const freshnessRecord = freshness.projects?.[project.id];
    const corroboratedRepositoryUnavailable = Boolean(
      freshnessRecord?.collectionStatus === 'unavailable' &&
      freshnessRecord.links?.repository?.url === project.repository,
    );

    records[project.id] = applyProjectAvailabilityPolicy({
      previous: previous?.projects?.[project.id],
      previousCheckedAt: previous?.generatedAt,
      links,
      checkedAt: today,
      corroboratedRepositoryUnavailable,
    });
  }

  const output = { generatedAt: today, projects: records };
  validateSnapshot(output, projects);

  // Carry pending state forward for consecutive-failure policy, but bound the
  // complete proposed publication diff against the actual default-branch state.
  const blastRadiusViolation = canonicalPrevious
    ? findBlastRadiusViolation(
        canonicalPrevious.projects,
        output.projects,
        maximumStatusChanges,
      )
    : null;

  if (blastRadiusViolation && !acceptBlastRadius) {
    await writeJson(candidatePath, output);
    const transitions = blastRadiusViolation.changes
      .map(({ id, before, after }) => `${id} (${before} -> ${after})`)
      .join(', ');
    throw new Error(
      `Availability blast-radius guard stopped ${blastRadiusViolation.changes.length} status changes (limit ${maximumStatusChanges}): ${transitions}. Review ${path.relative(repositoryRoot, candidatePath)} and rerun with --accept-blast-radius only after confirming the observations.`,
    );
  }

  await writeJson(temporaryOutputPath, output);
  await rename(temporaryOutputPath, outputPath);
  await unlink(candidatePath).catch((error) => {
    if (error?.code !== 'ENOENT') throw error;
  });

  const statusCounts = countBy(Object.values(records), ({ status }) => status);
  const linkCounts = countBy(
    Object.values(records).flatMap(({ links }) => Object.values(links)),
    ({ status }) => status,
  );
  console.log(
    `${bootstrap ? 'Bootstrapped' : 'Wrote'} ${path.relative(repositoryRoot, outputPath)} (${JSON.stringify({ statuses: statusCounts, links: linkCounts })})`,
  );
} finally {
  await unlink(temporaryOutputPath).catch(() => {});
  if (vite) await vite.close();
}

async function collectCurrentLinks(projects) {
  const urls = [
    ...new Set(
      projects.flatMap((project) => Object.values(expectedLinks(project))),
    ),
  ];
  const results = new Map();
  let completed = 0;

  await mapWithConcurrency(urls, linkConcurrency, async (url) => {
    const observation = await checkPublicLink(url, { userAgent });
    results.set(url, observation);
    completed += 1;
    process.stdout.write(`[${completed}/${urls.length}] ${url}\n`);
  });

  return Object.fromEntries(
    projects.map((project) => [
      project.id,
      Object.fromEntries(
        Object.entries(expectedLinks(project)).map(([role, url]) => [
          role,
          results.get(url),
        ]),
      ),
    ]),
  );
}

function linksFromFreshness(projects, freshness) {
  return Object.fromEntries(
    projects.map((project) => {
      const previousLinks = freshness.projects?.[project.id]?.links;
      const links = Object.fromEntries(
        Object.entries(expectedLinks(project)).map(([role, url]) => {
          const observation = previousLinks?.[role];
          return [
            role,
            observation?.url === url
              ? cloneLinkObservation(observation)
              : notChecked(url),
          ];
        }),
      );
      return [project.id, links];
    }),
  );
}

function expectedLinks(project) {
  return {
    repository: project.repository,
    official: project.officialUrl,
    ...(project.evidenceUrl ? { provenance: project.evidenceUrl } : {}),
  };
}

function cloneLinkObservation(observation) {
  return {
    url: observation.url,
    status: observation.status,
    ...(observation.httpStatus === undefined
      ? {}
      : { httpStatus: observation.httpStatus }),
    ...(observation.finalUrl === undefined
      ? {}
      : { finalUrl: observation.finalUrl }),
    ...(observation.errorCode === undefined
      ? {}
      : { errorCode: observation.errorCode }),
  };
}

function notChecked(url) {
  return { url, status: 'error', errorCode: 'not-checked' };
}

async function mapWithConcurrency(values, concurrency, operation) {
  let nextIndex = 0;
  const workers = Array.from(
    { length: Math.min(concurrency, values.length) },
    async () => {
      for (;;) {
        const index = nextIndex;
        nextIndex += 1;
        if (index >= values.length) return;
        await operation(values[index], index);
      }
    },
  );
  await Promise.all(workers);
}

function validateSnapshot(snapshot, projects) {
  if (!isDate(snapshot.generatedAt) || snapshot.generatedAt !== today) {
    throw new Error('Availability generatedAt must be today');
  }
  if (!snapshot.projects || typeof snapshot.projects !== 'object') {
    throw new Error('Availability projects must be an object');
  }

  const expectedIds = projects.map(({ id }) => id).sort();
  const actualIds = Object.keys(snapshot.projects).sort();
  if (JSON.stringify(expectedIds) !== JSON.stringify(actualIds)) {
    throw new Error('Availability snapshot does not cover the catalog exactly');
  }

  const statuses = new Set(['enabled', 'disabled']);
  const reasons = new Set(availabilityReasonCodes);
  const linkStatuses = new Set([
    'ok',
    'redirected',
    'auth-required',
    'rate-limited',
    'not-found',
    'transient',
    'unavailable',
    'error',
  ]);

  for (const project of projects) {
    const record = snapshot.projects[project.id];
    if (!record || typeof record !== 'object') {
      throw new Error(`${project.id}: availability record must be an object`);
    }
    if (!statuses.has(record.status)) {
      throw new Error(`${project.id}: invalid availability status`);
    }
    if (
      !isDate(record.statusChangedAt) ||
      record.statusChangedAt > snapshot.generatedAt
    ) {
      throw new Error(`${project.id}: invalid availability statusChangedAt`);
    }
    if (
      !Number.isSafeInteger(record.failureStreak) ||
      record.failureStreak < 0
    ) {
      throw new Error(`${project.id}: invalid availability failureStreak`);
    }
    if (
      !Array.isArray(record.reasonCodes) ||
      record.reasonCodes.some((reason) => !reasons.has(reason)) ||
      new Set(record.reasonCodes).size !== record.reasonCodes.length
    ) {
      throw new Error(`${project.id}: invalid availability reasonCodes`);
    }
    if (record.status === 'disabled' && !record.reasonCodes.length) {
      throw new Error(`${project.id}: disabled record must include a reason`);
    }
    if (record.failureStreak === 0 && record.reasonCodes.length) {
      throw new Error(`${project.id}: healthy streak cannot include a reason`);
    }

    const expected = expectedLinks(project);
    const actualRoles = Object.keys(record.links ?? {}).sort();
    if (
      JSON.stringify(actualRoles) !==
      JSON.stringify(Object.keys(expected).sort())
    ) {
      throw new Error(
        `${project.id}: availability links do not match catalog roles`,
      );
    }
    for (const [role, url] of Object.entries(expected)) {
      const observation = record.links[role];
      if (
        !observation ||
        observation.url !== url ||
        !linkStatuses.has(observation.status)
      ) {
        throw new Error(`${project.id}: invalid ${role} availability link`);
      }
      if (
        observation.httpStatus !== undefined &&
        (!Number.isInteger(observation.httpStatus) ||
          observation.httpStatus < 100 ||
          observation.httpStatus > 599)
      ) {
        throw new Error(`${project.id}: invalid ${role} HTTP status`);
      }
      if (
        observation.finalUrl !== undefined &&
        !isHttpUrl(observation.finalUrl)
      ) {
        throw new Error(`${project.id}: invalid ${role} final URL`);
      }
      if (
        observation.errorCode !== undefined &&
        (typeof observation.errorCode !== 'string' || !observation.errorCode)
      ) {
        throw new Error(`${project.id}: invalid ${role} error code`);
      }
    }
  }
}

function integerOption(name, environmentValue, fallback) {
  const prefix = `${name}=`;
  const argument = process.argv.find((value) => value.startsWith(prefix));
  const raw = argument ? argument.slice(prefix.length) : environmentValue;
  if (raw === undefined || raw === '') return fallback;
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value < 1 || value > 100) {
    throw new Error(`${name} must be an integer from 1 through 100`);
  }
  return value;
}

function stringOption(name, environmentValue) {
  const prefix = `${name}=`;
  const inlineArgument = process.argv.find((value) => value.startsWith(prefix));
  const argumentIndex = process.argv.indexOf(name);
  let raw = inlineArgument?.slice(prefix.length);

  if (argumentIndex !== -1) {
    raw = process.argv[argumentIndex + 1];
    if (!raw || raw.startsWith('--')) {
      throw new Error(`${name} must be followed by a file path`);
    }
  }
  if (raw === undefined) raw = environmentValue;
  if (raw === undefined || raw === '') return null;
  if (typeof raw !== 'string' || !raw.trim()) {
    throw new Error(`${name} must be a non-empty file path`);
  }
  return raw;
}

async function selectPreviousSnapshot(canonical, suppliedPath) {
  if (!isDate(canonical.generatedAt) || canonical.generatedAt > today) {
    throw new Error('Canonical availability snapshot has an invalid date');
  }
  if (!suppliedPath) return canonical;

  const supplied = await readJson(suppliedPath);
  validateBaseSnapshot(supplied, suppliedPath);

  if (
    shouldUsePendingAvailabilitySnapshot({
      canonicalDate: canonical.generatedAt,
      pendingDate: supplied.generatedAt,
      today,
    })
  ) {
    console.log(
      `Using pending availability state from ${path.relative(repositoryRoot, suppliedPath)} (${supplied.generatedAt})`,
    );
    return supplied;
  }

  const reason =
    supplied.generatedAt === today
      ? 'it was already generated today'
      : 'it is not newer than the canonical snapshot';
  console.log(
    `Ignoring pending availability state from ${path.relative(repositoryRoot, suppliedPath)} because ${reason}`,
  );
  return canonical;
}

function validateBaseSnapshot(snapshot, filename) {
  const label = path.relative(repositoryRoot, filename);
  if (!snapshot || typeof snapshot !== 'object' || Array.isArray(snapshot)) {
    throw new Error(`${label}: base availability snapshot must be an object`);
  }
  if (!isDate(snapshot.generatedAt) || snapshot.generatedAt > today) {
    throw new Error(
      `${label}: base availability generatedAt must be a real, non-future date`,
    );
  }
  if (
    !snapshot.projects ||
    typeof snapshot.projects !== 'object' ||
    Array.isArray(snapshot.projects)
  ) {
    throw new Error(`${label}: base availability projects must be an object`);
  }

  const statuses = new Set(['enabled', 'disabled']);
  const reasons = new Set(availabilityReasonCodes);
  for (const [id, record] of Object.entries(snapshot.projects)) {
    if (!record || typeof record !== 'object' || Array.isArray(record)) {
      throw new Error(`${label}: ${id} must be an availability record`);
    }
    if (!statuses.has(record.status)) {
      throw new Error(`${label}: ${id} has an invalid availability status`);
    }
    if (
      !isDate(record.statusChangedAt) ||
      record.statusChangedAt > snapshot.generatedAt
    ) {
      throw new Error(`${label}: ${id} has an invalid statusChangedAt`);
    }
    if (
      !Number.isSafeInteger(record.failureStreak) ||
      record.failureStreak < 0
    ) {
      throw new Error(`${label}: ${id} has an invalid failureStreak`);
    }
    if (
      !Array.isArray(record.reasonCodes) ||
      record.reasonCodes.some((reason) => !reasons.has(reason))
    ) {
      throw new Error(`${label}: ${id} has invalid reasonCodes`);
    }
  }
}

function countBy(values, select) {
  return values.reduce((counts, value) => {
    const key = select(value);
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});
}

function isDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const timestamp = Date.parse(`${value}T00:00:00Z`);
  return (
    Number.isFinite(timestamp) &&
    new Date(timestamp).toISOString().slice(0, 10) === value
  );
}

function isHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

async function readJson(filename) {
  return JSON.parse(await readFile(filename, 'utf8'));
}

async function readJsonIfPresent(filename) {
  try {
    return await readJson(filename);
  } catch (error) {
    if (error?.code === 'ENOENT') return null;
    throw error;
  }
}

async function writeJson(filename, value) {
  await writeFile(filename, `${JSON.stringify(value, null, 2)}\n`);
}
