#!/usr/bin/env node

import { execFile } from 'node:child_process';
import {
  mkdtemp,
  readFile,
  rename,
  rm,
  unlink,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

import { checkPublicLink } from './lib/public-link-check.mjs';

const execFileAsync = promisify(execFile);
const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const outputPath = path.join(
  repositoryRoot,
  'lib/catalog/project-freshness.json',
);
const candidatePath = path.join(
  repositoryRoot,
  'lib/catalog/project-freshness.candidate.json',
);
const temporaryOutputPath = `${outputPath}.tmp-${process.pid}`;
const githubToken = process.env.GOSDIR_GITHUB_TOKEN?.trim();
const acceptNewUnavailable = process.argv.includes('--accept-new-unavailable');
const reuseSameDay = process.argv.includes('--reuse-same-day');
const yearsToCollect = 5;
const today = new Date().toISOString().slice(0, 10);
const currentYear = Number(today.slice(0, 4));
const years = Array.from(
  { length: yearsToCollect },
  (_, index) => currentYear - yearsToCollect + 1 + index,
);
const userAgent =
  'GOSDIR-evidence-reviewer/1.0 (+https://gosdir.com/methodology/)';
// Clone-only local reviews cannot read forge archive metadata. This reviewed fallback
// is ignored when the authenticated provider API returns an archive value.
const archivalOverrides = { 'ca-design-system': true };
const activityOverrides = {
  'cloud-gov': {
    url: 'https://github.com/cloud-gov/deploy-cf',
    label: 'Representative cloud.gov deployment source',
  },
  'code-mil': {
    url: 'https://github.com/Code-dot-mil/code.mil',
    label: 'Representative Code.mil site source',
  },
};

class ProviderError extends Error {}
class RecordUnavailableError extends Error {}

let vite;
let temporaryRoot;

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
  const previous = await readJsonIfPresent(outputPath);
  temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'gosdir-freshness-'));

  const linkCache = new Map();
  const records = {};
  let reusedSameDayRecords = 0;
  for (const [index, project] of projects.entries()) {
    const activitySource = activityOverrides[project.id] ?? {
      url: project.repository,
      label: 'Canonical repository',
    };
    const linkEntries = [
      ['repository', project.repository],
      ['official', project.officialUrl],
      ...(project.evidenceUrl ? [['provenance', project.evidenceUrl]] : []),
    ];
    const previousRecord =
      reuseSameDay && previous?.generatedAt === today
        ? previous.projects?.[project.id]
        : null;
    const canReuseSameDay =
      previousRecord?.collectionStatus === 'measured' &&
      previousRecord.activitySource === activitySource.url &&
      previousRecord.activitySourceLabel === activitySource.label &&
      previousRecord.annualCommits?.length === years.length &&
      previousRecord.annualCommits.every(
        ({ year }, index) => year === years[index],
      ) &&
      Object.keys(previousRecord.links ?? {}).length === linkEntries.length &&
      linkEntries.every(
        ([kind, url]) =>
          previousRecord.links?.[kind]?.url === url &&
          !['error', 'unavailable'].includes(previousRecord.links[kind].status),
      );
    if (canReuseSameDay) {
      records[project.id] = {
        ...previousRecord,
        activityBasis:
          'commits reachable from the default branch, measured earlier today; same-day snapshot reused without a new remote HEAD confirmation',
      };
      reusedSameDayRecords += 1;
      process.stdout.write(
        `[${index + 1}/${projects.length}] ${project.name} (same-day evidence reused)\n`,
      );
      continue;
    }
    process.stdout.write(`[${index + 1}/${projects.length}] ${project.name}\n`);

    let activity;
    let reusedSameDayActivity = false;
    let reusedHeadReconfirmed = false;
    try {
      activity = await collectActivity(activitySource.url, project.id);
    } catch (error) {
      const previousRecord =
        previous?.generatedAt === today
          ? previous.projects?.[project.id]
          : null;
      const reusableSameDayRecord =
        previousRecord?.activitySource === activitySource.url &&
        previousRecord.collectionStatus === 'measured' &&
        previousRecord.annualCommits?.length === years.length &&
        previousRecord.annualCommits.every(
          ({ year, commits }, index) =>
            year === years[index] &&
            Number.isSafeInteger(commits) &&
            commits >= 0,
        );
      const sameHeadAfterCloneFailure =
        error instanceof RecordUnavailableError &&
        reusableSameDayRecord &&
        (await remoteHeadMatches(activitySource.url, previousRecord.headOid));
      // A same-day measurement remains a valid as-observed record if a forge
      // rate-limits a later request. Link health is checked separately below.
      if (
        reusableSameDayRecord &&
        (error instanceof ProviderError ||
          error instanceof RecordUnavailableError)
      ) {
        reusedHeadReconfirmed = Boolean(sameHeadAfterCloneFailure);
        console.warn(
          `  Activity error (${error.message}); reusing today's earlier measured activity${reusedHeadReconfirmed ? ' after confirming the same remote HEAD' : ' without a new remote HEAD confirmation'}`,
        );
        activity = {
          headOid: previousRecord.headOid,
          lastChangeAt: previousRecord.lastChangeAt,
          annualCommits: new Map(
            previousRecord.annualCommits.map(({ year, commits }) => [
              year,
              commits,
            ]),
          ),
          archived: previousRecord.archived,
          collectionStatus: 'measured',
        };
        reusedSameDayActivity = true;
      } else {
        if (error instanceof ProviderError) throw error;
        console.warn(`  Activity unavailable (${activityErrorCode(error)})`);
        activity = {
          headOid: null,
          lastChangeAt: null,
          annualCommits: new Map(),
          archived: null,
          collectionStatus: 'unavailable',
        };
      }
    }

    const checkedLinks = await Promise.all(
      linkEntries.map(async ([kind, url]) => {
        if (!linkCache.has(url)) {
          linkCache.set(url, checkPublicLink(url, { userAgent }));
        }
        return [kind, await linkCache.get(url)];
      }),
    );

    const archived = activity.archived ?? archivalOverrides[project.id] ?? null;
    records[project.id] = {
      activitySource: activitySource.url,
      activitySourceLabel: activitySource.label,
      activityBasis: reusedSameDayActivity
        ? `commits reachable from the default branch, measured earlier today; remote HEAD ${reusedHeadReconfirmed ? 'reconfirmed' : 'not reconfirmed'}`
        : 'commits reachable from the current default branch',
      headOid: activity.headOid,
      lastChangeAt: activity.lastChangeAt,
      status: freshnessStatus(activity.lastChangeAt, archived),
      annualCommits: years.map((year) => ({
        year,
        commits: activity.annualCommits.get(year) ?? null,
      })),
      archived,
      collectionStatus: activity.collectionStatus ?? 'measured',
      links: Object.fromEntries(checkedLinks),
    };
  }

  const output = { generatedAt: today, years, projects: records };
  validateGeneratedSnapshot(output, projects);

  const previousUnavailable = new Set(
    Object.entries(previous?.projects ?? {})
      .filter(([, record]) => record?.collectionStatus === 'unavailable')
      .map(([id]) => id),
  );
  const newlyUnavailable = Object.entries(records)
    .filter(
      ([id, record]) =>
        record.collectionStatus === 'unavailable' &&
        !previousUnavailable.has(id),
    )
    .map(([id]) => id);

  if (newlyUnavailable.length && !acceptNewUnavailable) {
    await writeFile(candidatePath, `${JSON.stringify(output, null, 2)}\n`);
    throw new Error(
      `Refusing to replace the reviewed snapshot because activity became unavailable for: ${newlyUnavailable.join(', ')}. Review ${path.relative(repositoryRoot, candidatePath)} and rerun with --accept-new-unavailable to accept it.`,
    );
  }

  await writeFile(temporaryOutputPath, `${JSON.stringify(output, null, 2)}\n`);
  await rename(temporaryOutputPath, outputPath);
  await unlink(candidatePath).catch((error) => {
    if (error?.code !== 'ENOENT') throw error;
  });

  const totals = Object.values(records).reduce(
    (summary, record) => {
      summary[record.status] = (summary[record.status] ?? 0) + 1;
      for (const link of Object.values(record.links)) {
        summary.links[link.status] = (summary.links[link.status] ?? 0) + 1;
      }
      return summary;
    },
    { links: {} },
  );
  console.log(
    `Wrote ${path.relative(repositoryRoot, outputPath)} (${JSON.stringify(totals)})`,
  );
  if (reuseSameDay)
    console.log(`Reused ${reusedSameDayRecords} same-day measured records`);
} finally {
  await unlink(temporaryOutputPath).catch(() => {});
  if (vite) await vite.close();
  if (temporaryRoot) await rm(temporaryRoot, { recursive: true, force: true });
}

async function collectActivity(url, projectId) {
  const parsed = parseActivityRepository(url);
  if (parsed.hostname === 'github.com' && githubToken)
    return collectGitHubActivity(parsed);
  if (
    [
      'gitlab.com',
      'gitlab.opencode.de',
      'code.europa.eu',
      'code.jgi.doe.gov',
      'forge.inrae.fr',
      'forge.apps.education.fr',
      'code.usgs.gov',
      'code.ornl.gov',
    ].includes(parsed.hostname)
  ) {
    try {
      return await collectGitLabActivity(parsed);
    } catch (error) {
      if (!(error instanceof ProviderError)) throw error;
      console.warn(
        `  GitLab API error (${error.message}); trying direct public git history`,
      );
      return collectGitActivity(parsed, projectId);
    }
  }
  if (parsed.hostname === 'gitlab.kitware.com' && githubToken)
    return collectGitLabActivity(parsed);
  return collectGitActivity(parsed, projectId);
}

async function remoteHeadMatches(url, expectedOid) {
  // A forge can deny shallow clone even while its public HEAD is readable. Only
  // reuse a same-day measurement when the exact commit being measured is unchanged.
  if (!/^[0-9a-f]{40,64}$/i.test(expectedOid ?? '')) return false;
  try {
    const { stdout } = await execFileAsync('git', ['ls-remote', url, 'HEAD'], {
      env: {
        ...process.env,
        GIT_ALLOW_PROTOCOL: 'https',
        GIT_CONFIG_NOSYSTEM: '1',
        GIT_PROTOCOL_FROM_USER: '0',
        GIT_TERMINAL_PROMPT: '0',
      },
      maxBuffer: 1024 * 1024,
      timeout: 30_000,
    });
    const [headOid, ref] = stdout.trim().split(/\s+/);
    return ref === 'HEAD' && headOid === expectedOid;
  } catch {
    return false;
  }
}

function parseActivityRepository(url) {
  const parsed = new URL(url);
  const allowedHosts = new Set([
    'github.com',
    'gitlab.com',
    'gitlab.opencode.de',
    'gitlab.kitware.com',
    'code.europa.eu',
    'code.jgi.doe.gov',
    'forge.inrae.fr',
    'forge.apps.education.fr',
    'code.usgs.gov',
    'code.ornl.gov',
    'bitbucket.org',
  ]);
  const pathParts = parsed.pathname
    .replace(/\.git$/i, '')
    .split('/')
    .filter(Boolean);
  if (
    parsed.protocol !== 'https:' ||
    parsed.port ||
    parsed.username ||
    parsed.password ||
    parsed.search ||
    parsed.hash ||
    !allowedHosts.has(parsed.hostname) ||
    ([
      'gitlab.com',
      'gitlab.opencode.de',
      'code.jgi.doe.gov',
      'forge.inrae.fr',
      'forge.apps.education.fr',
      'code.usgs.gov',
      'code.ornl.gov',
    ].includes(parsed.hostname)
      ? pathParts.length < 2 || pathParts.length > 5
      : pathParts.length !== 2) ||
    pathParts.some((part) => !/^[A-Za-z0-9._-]+$/.test(part))
  ) {
    throw new RecordUnavailableError('unsupported-activity-source');
  }
  parsed.pathname = `/${pathParts.join('/')}`;
  return parsed;
}

async function collectGitHubActivity(parsed) {
  const [owner, repository] = parsed.pathname.split('/').filter(Boolean);
  const variableDefinitions = [];
  const variables = { owner, repository };
  const historyFields = [];
  years.forEach((year, index) => {
    variableDefinitions.push(
      `$since${index}: GitTimestamp!`,
      `$until${index}: GitTimestamp!`,
    );
    variables[`since${index}`] = `${year}-01-01T00:00:00Z`;
    variables[`until${index}`] = bucketEnd(year);
    historyFields.push(
      `y${index}: history(since: $since${index}, until: $until${index}) { totalCount }`,
    );
  });
  const query = `
    query RepositoryActivity($owner: String!, $repository: String!, ${variableDefinitions.join(', ')}) {
      repository(owner: $owner, name: $repository) {
        isArchived
        defaultBranchRef {
          target {
            ... on Commit {
              oid
              committedDate
              ${historyFields.join('\n')}
            }
          }
        }
      }
    }
  `;
  const response = await providerFetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': userAgent,
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!response.ok) throw new ProviderError(`github-http-${response.status}`);
  const body = await response.json();
  if (body.errors?.length) {
    if (
      body.data?.repository == null &&
      body.errors.every(({ type }) => type === 'NOT_FOUND')
    )
      throw new RecordUnavailableError('repository-not-found');
    throw new ProviderError(
      `github-graphql-${body.errors[0]?.type ?? 'error'}`,
    );
  }
  const details = body.data?.repository;
  if (!details) throw new RecordUnavailableError('repository-not-found');
  const head = details.defaultBranchRef?.target;
  const annualCommits = new Map(
    years.map((year, index) => [year, head?.[`y${index}`]?.totalCount ?? 0]),
  );
  return {
    headOid: head?.oid ?? null,
    lastChangeAt: head?.committedDate?.slice(0, 10) ?? null,
    annualCommits,
    archived: Boolean(details.isArchived),
    collectionStatus: 'measured',
  };
}

async function collectGitLabActivity(parsed) {
  const projectPath = parsed.pathname.replace(/^\/+|\/+$/g, '');
  const base = `https://${parsed.hostname}/api/v4/projects/${encodeURIComponent(projectPath)}`;
  const details = await providerJson(base);
  const latest = await providerJson(
    `${base}/repository/commits?ref_name=${encodeURIComponent(details.default_branch)}&per_page=1`,
  );
  const annualCommits = new Map();
  for (const year of years) {
    const pageUrl = new URL(`${base}/repository/commits`);
    pageUrl.searchParams.set('ref_name', details.default_branch);
    pageUrl.searchParams.set('since', `${year}-01-01T00:00:00Z`);
    pageUrl.searchParams.set('until', bucketEnd(year));
    pageUrl.searchParams.set('per_page', '100');
    let response = await providerFetch(pageUrl.href, {
      headers: { 'User-Agent': userAgent },
    });
    if (response.status === 404)
      throw new RecordUnavailableError('repository-not-found');
    if (!response.ok) throw new ProviderError(`gitlab-http-${response.status}`);
    const totalHeader = response.headers.get('x-total');
    const total =
      totalHeader == null || totalHeader === '' ? null : Number(totalHeader);
    if (total !== null && Number.isSafeInteger(total) && total >= 0) {
      annualCommits.set(year, total);
      continue;
    }
    // Some public GitLab instances omit x-total. Count their pages rather
    // than treating otherwise reachable source activity as unavailable.
    let counted = 0;
    for (let page = 0; page < 1000; page += 1) {
      const entries = await response.json();
      if (!Array.isArray(entries))
        throw new ProviderError('gitlab-invalid-commits');
      counted += entries.length;
      const nextPage = response.headers.get('x-next-page');
      if (!nextPage) break;
      if (!/^\d+$/.test(nextPage))
        throw new ProviderError('gitlab-invalid-next-page');
      pageUrl.searchParams.set('page', nextPage);
      response = await providerFetch(pageUrl.href, {
        headers: { 'User-Agent': userAgent },
      });
      if (!response.ok)
        throw new ProviderError(`gitlab-http-${response.status}`);
      if (page === 999) throw new ProviderError('gitlab-too-many-pages');
    }
    annualCommits.set(year, counted);
  }
  return {
    headOid: latest[0]?.id ?? null,
    lastChangeAt: latest[0]?.committed_date?.slice(0, 10) ?? null,
    annualCommits,
    archived: typeof details.archived === 'boolean' ? details.archived : null,
    collectionStatus: 'measured',
  };
}

async function collectGitActivity(parsed, projectId) {
  const directory = path.join(temporaryRoot, projectId);
  const since = `${years[0] - 1}-01-01`;
  const cloneUrl = `${parsed.href.replace(/\/+$/, '')}.git`;
  const gitEnvironment = {
    ...process.env,
    GIT_ALLOW_PROTOCOL: 'https',
    GIT_CONFIG_NOSYSTEM: '1',
    GIT_PROTOCOL_FROM_USER: '0',
    GIT_TERMINAL_PROMPT: '0',
    GIT_CONFIG_COUNT: '5',
    GIT_CONFIG_KEY_0: 'protocol.file.allow',
    GIT_CONFIG_VALUE_0: 'never',
    GIT_CONFIG_KEY_1: 'protocol.ext.allow',
    GIT_CONFIG_VALUE_1: 'never',
    GIT_CONFIG_KEY_2: 'http.lowSpeedLimit',
    GIT_CONFIG_VALUE_2: '1024',
    GIT_CONFIG_KEY_3: 'http.lowSpeedTime',
    GIT_CONFIG_VALUE_3: '30',
    GIT_CONFIG_KEY_4: 'http.followRedirects',
    GIT_CONFIG_VALUE_4: 'false',
  };
  try {
    await execFileAsync(
      'git',
      [
        'clone',
        '--quiet',
        '--bare',
        '--filter=blob:none',
        '--single-branch',
        `--shallow-since=${since}`,
        cloneUrl,
        directory,
      ],
      {
        env: gitEnvironment,
        maxBuffer: 1024 * 1024 * 8,
        timeout: 180_000,
        killSignal: 'SIGKILL',
      },
    );
  } catch {
    throw new RecordUnavailableError('git-clone-failed');
  }
  const { stdout: latest } = await execFileAsync(
    'git',
    ['--git-dir', directory, 'log', '-1', '--format=%H%n%cI'],
    {
      env: gitEnvironment,
      maxBuffer: 1024 * 1024,
      timeout: 30_000,
    },
  );
  const [headOid = '', committedAt = ''] = latest.trim().split('\n');
  const lastChangeAt = committedAt
    ? new Date(committedAt).toISOString().slice(0, 10)
    : null;
  const annualCommits = new Map();
  for (const year of years) {
    const { stdout } = await execFileAsync(
      'git',
      [
        '--git-dir',
        directory,
        'rev-list',
        '--count',
        `--since=${year}-01-01T00:00:00Z`,
        `--until=${bucketEnd(year)}`,
        'HEAD',
      ],
      { env: gitEnvironment, maxBuffer: 1024 * 1024, timeout: 30_000 },
    );
    annualCommits.set(year, Number(stdout.trim()));
  }
  return {
    headOid: headOid || null,
    lastChangeAt,
    annualCommits,
    archived: null,
    collectionStatus: 'measured',
  };
}

function bucketEnd(year) {
  return year === currentYear
    ? `${today}T23:59:59Z`
    : `${year}-12-31T23:59:59Z`;
}

function freshnessStatus(lastChangeAt, archived) {
  if (archived) return 'historical';
  if (!isDate(lastChangeAt) || lastChangeAt > today) return 'unknown';
  if (lastChangeAt >= calendarMonthsBefore(today, 6)) return 'fresh';
  if (lastChangeAt >= calendarMonthsBefore(today, 24)) return 'current';
  if (lastChangeAt >= calendarMonthsBefore(today, 48)) return 'quiet';
  return 'historical';
}

function calendarMonthsBefore(date, months) {
  const value = new Date(`${date}T00:00:00Z`);
  const sourceDay = value.getUTCDate();
  value.setUTCDate(1);
  value.setUTCMonth(value.getUTCMonth() - months);
  const lastTargetDay = new Date(
    Date.UTC(value.getUTCFullYear(), value.getUTCMonth() + 1, 0),
  ).getUTCDate();
  value.setUTCDate(Math.min(sourceDay, lastTargetDay));
  return value.toISOString().slice(0, 10);
}

async function providerJson(url) {
  const response = await providerFetch(url, {
    headers: { 'User-Agent': userAgent },
  });
  if (response.status === 404)
    throw new RecordUnavailableError('repository-not-found');
  if (!response.ok) throw new ProviderError(`provider-http-${response.status}`);
  return response.json();
}

async function providerFetch(url, options = {}) {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(30_000),
      });
      const retryableGitLab403 =
        response.status === 403 &&
        [
          'code.jgi.doe.gov',
          'forge.inrae.fr',
          'code.usgs.gov',
          'code.ornl.gov',
        ].includes(new URL(url).hostname);
      if (
        response.status !== 429 &&
        response.status < 500 &&
        !retryableGitLab403
      )
        return response;
      lastError = new ProviderError(`provider-http-${response.status}`);
      if (attempt < 2)
        await delay(retryDelay(response.headers.get('retry-after'), attempt));
    } catch (error) {
      lastError = error;
      if (attempt < 2) await delay(500 * (attempt + 1));
    }
  }
  throw new ProviderError(
    lastError instanceof Error ? lastError.message : 'provider-request-failed',
  );
}

function retryDelay(header, attempt) {
  const seconds = Number(header);
  return Number.isFinite(seconds)
    ? Math.min(seconds * 1000, 5_000)
    : 500 * (attempt + 1);
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function validateGeneratedSnapshot(snapshot, projects) {
  const expectedIds = new Set(projects.map(({ id }) => id));
  const actualIds = Object.keys(snapshot.projects);
  if (!isDate(snapshot.generatedAt) || snapshot.generatedAt !== today)
    throw new Error('Generated date is invalid');
  if (
    snapshot.years.length !== yearsToCollect ||
    snapshot.years.some((year, index) => year !== years[index])
  )
    throw new Error('Year buckets are invalid');
  if (
    actualIds.length !== expectedIds.size ||
    actualIds.some((id) => !expectedIds.has(id))
  )
    throw new Error('Snapshot does not cover the catalog exactly');
  for (const [id, record] of Object.entries(snapshot.projects)) {
    if (record.annualCommits.length !== years.length)
      throw new Error(`${id}: invalid annual buckets`);
    record.annualCommits.forEach(({ year, commits }, index) => {
      if (
        year !== years[index] ||
        (commits !== null && (!Number.isSafeInteger(commits) || commits < 0))
      )
        throw new Error(`${id}: invalid commit count`);
    });
    if (
      record.headOid !== null &&
      (typeof record.headOid !== 'string' ||
        !/^[0-9a-f]{40,64}$/i.test(record.headOid))
    )
      throw new Error(`${id}: invalid default-branch head OID`);
    if (record.collectionStatus === 'unavailable' && record.headOid !== null)
      throw new Error(`${id}: unavailable activity has a head OID`);
    if (
      record.lastChangeAt !== null &&
      (!isDate(record.lastChangeAt) || record.lastChangeAt > today)
    )
      throw new Error(`${id}: invalid last change date`);
    if (record.status !== freshnessStatus(record.lastChangeAt, record.archived))
      throw new Error(`${id}: inconsistent freshness status`);
    if (
      record.collectionStatus === 'measured' &&
      record.annualCommits.some(({ commits }) => commits === null)
    )
      throw new Error(`${id}: measured activity has missing buckets`);
  }
}

function isDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value))
    return false;
  const timestamp = Date.parse(`${value}T00:00:00Z`);
  return (
    Number.isFinite(timestamp) &&
    new Date(timestamp).toISOString().slice(0, 10) === value
  );
}

async function readJsonIfPresent(filename) {
  try {
    return JSON.parse(await readFile(filename, 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT') return null;
    throw error;
  }
}

function activityErrorCode(error) {
  return error instanceof RecordUnavailableError
    ? error.message
    : 'activity-collection-failed';
}
