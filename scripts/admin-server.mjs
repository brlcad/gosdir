#!/usr/bin/env node
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  mkdir,
  readFile,
  writeFile,
  rename,
  unlink,
  open,
  chmod,
} from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { createServer } from 'vite';
import { checkPublicLink } from './lib/public-link-check.mjs';
import { canReinstate, planModeration } from './lib/admin-moderation.mjs';
import {
  validateGoogleConfig,
  verifyGoogleIdentity,
} from './lib/admin-google.mjs';
import {
  assessProjectLinks,
  classifyLinkObservation,
} from './lib/project-availability-policy.mjs';
import {
  token,
  digest,
  passwordHash,
  passwordMatches,
  effectiveStatus,
  validateAction,
} from './lib/admin-security.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const statePath =
  process.env.GOSDIR_ADMIN_STATE ?? path.join(root, '.admin-state');
const origin = process.env.GOSDIR_ADMIN_ORIGIN ?? 'https://gosdir.com';
const port = Number(process.env.GOSDIR_ADMIN_PORT ?? 9137);
const moderationPath = path.join(root, 'lib/catalog/administration.json');
const readJson = async (filename, fallback) => {
  try {
    return JSON.parse(await readFile(filename, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT' && fallback !== undefined) return fallback;
    throw error;
  }
};
async function atomicJson(filename, value) {
  const temporary = `${filename}.${token().slice(0, 12)}.next`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, filename);
}
await mkdir(statePath, { recursive: true, mode: 0o700 });
await chmod(statePath, 0o700);
let credential = await readJson(path.join(statePath, 'credential.json'), null);
let google = validateGoogleConfig(
  await readJson(path.join(statePath, 'google.json'), null),
);
let bindingGoogle = false;
const googleChallenges = new Map();
if (
  !google?.subject &&
  (!credential || google) &&
  !(await readJson(path.join(statePath, 'setup.json'), null))
) {
  const setupToken = token();
  await atomicJson(path.join(statePath, 'setup.json'), {
    hash: digest(setupToken),
  });
  await writeFile(path.join(statePath, 'setup-token'), setupToken, {
    mode: 0o600,
  });
}
const jobs = await readJson(path.join(statePath, 'jobs.json'), []);
for (const job of jobs) {
  if (['running', 'queued'].includes(job.status)) {
    job.status = 'interrupted';
    job.message =
      'The service restarted. Review the record status and publish state before retrying.';
    job.finishedAt = new Date().toISOString();
  }
}
await atomicJson(path.join(statePath, 'jobs.json'), jobs);
const sessions = new Map();
const attempts = new Map();
const vite = await createServer({
  root,
  configFile: false,
  appType: 'custom',
  logLevel: 'silent',
  server: { middlewareMode: true },
});
async function catalog() {
  const { projects } = await vite.ssrLoadModule(
    '/lib/catalog/software/index.ts',
  );
  const availability = await readJson(
    path.join(root, 'lib/catalog/project-availability.json'),
  );
  const administration = await readJson(moderationPath);
  const observations = await readJson(
    path.join(statePath, 'observations.json'),
    {},
  );
  return { projects, availability, administration, observations };
}
const responseHeaders = {
  'Cache-Control': 'no-store, private',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' https://accounts.google.com/gsi/client; style-src 'self' 'unsafe-inline' https://accounts.google.com/gsi/style; connect-src 'self' https://accounts.google.com/gsi/; frame-src https://accounts.google.com/gsi/; img-src 'self' data: https://lh3.googleusercontent.com; object-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'",
};
function json(res, status, value, headers = {}) {
  res.writeHead(status, {
    ...responseHeaders,
    'Content-Type': 'application/json',
    ...headers,
  });
  res.end(JSON.stringify(value));
}
function fail(message, status = 400) {
  return Object.assign(new Error(message), { status });
}
async function body(req) {
  let contents = '';
  if (!req.headers['content-type']?.startsWith('application/json'))
    throw fail('JSON is required.', 415);
  for await (const chunk of req) {
    contents += chunk;
    if (contents.length > 32_768) throw fail('Request too large.', 413);
  }
  try {
    return JSON.parse(contents);
  } catch {
    throw fail('Invalid JSON.');
  }
}
function sessionFor(req) {
  const raw = req.headers.cookie
    ?.split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith('gosdir_admin='))
    ?.slice(13);
  const session = raw ? sessions.get(digest(raw)) : undefined;
  if (!session || session.expires < Date.now())
    throw fail('Sign in to continue.', 401);
  return session;
}
function authenticationDetails() {
  return {
    provider: google ? 'google' : 'password',
    setupRequired: google ? !google.subject : !credential,
    google: google
      ? { clientId: google.clientId, enrollmentRequired: !google.subject }
      : null,
  };
}
function loginBudget() {
  const recent = (attempts.get('login') ?? []).filter(
    (time) => time > Date.now() - 15 * 60 * 1000,
  );
  attempts.set('login', recent);
  if (recent.length >= 10)
    throw fail('Too many sign-in attempts. Try again in 15 minutes.', 429);
  recent.push(Date.now());
}
async function requireEnrollmentToken(value) {
  const setup = await readJson(path.join(statePath, 'setup.json'), null);
  if (!setup || typeof value !== 'string' || digest(value) !== setup.hash)
    throw fail(
      'Use a valid private enrollment link to finish Google sign-in setup.',
      403,
    );
}
function cookieValue(req, name) {
  return req.headers.cookie
    ?.split(';')
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${name}=`))
    ?.slice(name.length + 1);
}
function signIn(res) {
  const raw = token();
  const csrf = token();
  const expires = Date.now() + 8 * 60 * 60 * 1000;
  sessions.set(digest(raw), { csrf, expires });
  for (const [key, session] of sessions)
    if (session.expires < Date.now()) sessions.delete(key);
  return json(
    res,
    200,
    { authenticated: true, csrf, ...authenticationDetails() },
    {
      'Set-Cookie': `gosdir_admin=${raw}; Path=/admin/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`,
    },
  );
}
function log(job, message) {
  job.message = message;
  job.log = [
    ...(job.log ?? []),
    `${new Date().toISOString()} ${message}`,
  ].slice(-100);
  return atomicJson(path.join(statePath, 'jobs.json'), jobs);
}
const activeCommands = new Set();
function stopCommand(child, signal = 'SIGTERM') {
  try {
    process.kill(-child.pid, signal);
  } catch (error) {
    if (error.code !== 'ESRCH') throw error;
  }
}
async function command(job, args) {
  await log(job, `Running npm ${args.join(' ')}`);
  await new Promise((resolve, reject) => {
    const child = spawn('npm', args, {
      cwd: root,
      detached: true,
      env: { ...process.env, NODE_ENV: 'production' },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    activeCommands.add(child);
    let output = '';
    const capture = (chunk) => {
      output = (output + chunk.toString()).slice(-12_000);
    };
    child.stdout.on('data', capture);
    child.stderr.on('data', capture);
    const timer = setTimeout(() => stopCommand(child), 15 * 60 * 1000);
    child.on('error', (error) => {
      activeCommands.delete(child);
      clearTimeout(timer);
      reject(error);
    });
    child.on('close', (code) => {
      activeCommands.delete(child);
      clearTimeout(timer);
      job.output = output;
      if (code === 0) resolve();
      else
        reject(
          new Error(
            `npm ${args.join(' ')} failed (exit ${code}). See job output.`,
          ),
        );
    });
  });
}
async function scan(job, data) {
  const targets = data.projects.filter((project) => {
    if (job.action === 'scan-selected') return job.ids.includes(project.id);
    const status = effectiveStatus(
      project,
      data.availability.projects[project.id],
      data.administration.records[project.id],
    );
    return job.action === 'scan-all'
      ? status !== 'deleted'
      : ['suspended', 'hidden'].includes(status);
  });
  const urls = [
    ...new Set(
      targets.flatMap((p) =>
        [p.repository, p.officialUrl, p.evidenceUrl].filter(Boolean),
      ),
    ),
  ];
  const results = new Map();
  let cursor = 0;
  job.total = urls.length;
  job.completed = 0;
  await log(
    job,
    `Checking ${urls.length} links across ${targets.length} records. Visibility will stay unchanged.`,
  );
  await Promise.all(
    Array.from({ length: Math.min(8, urls.length) }, async () => {
      for (;;) {
        const url = urls[cursor++];
        if (!url) return;
        results.set(url, await checkPublicLink(url));
        job.completed += 1;
        if (job.completed % 25 === 0)
          await log(job, `Checked ${job.completed} of ${urls.length} links.`);
      }
    }),
  );
  const checkedAt = new Date().toISOString();
  const observations = { ...data.observations };
  for (const project of targets) {
    const links = {
      repository: results.get(project.repository),
      official: results.get(project.officialUrl),
      ...(project.evidenceUrl
        ? { provenance: results.get(project.evidenceUrl) }
        : {}),
    };
    observations[project.id] = {
      checkedAt,
      links,
      ...assessProjectLinks(links),
    };
  }
  await atomicJson(path.join(statePath, 'observations.json'), observations);
  await log(
    job,
    `Checked ${targets.length} records. Review the dead-link and uncertain-result filters.`,
  );
}
async function moderate(job, data) {
  const next = planModeration(job, data);
  // Persist intent before publishing. A failed build remains visible as pending
  // and can be retried with the predefined Publish job; never claim it is live.
  await atomicJson(path.join(statePath, 'publication.json'), {
    pending: true,
    jobId: job.id,
    updatedAt: new Date().toISOString(),
  });
  await atomicJson(moderationPath, next.administration);
  if (next.availability)
    await atomicJson(
      path.join(root, 'lib/catalog/project-availability.json'),
      next.availability,
    );
  await command(job, ['run', 'check:catalog']);
  await command(job, ['run', 'build:apache']);
  await atomicJson(path.join(statePath, 'publication.json'), {
    pending: false,
    jobId: job.id,
    updatedAt: new Date().toISOString(),
  });
  await log(
    job,
    `${job.action} applied to ${job.ids.length} records and published through Apache.`,
  );
}
let working = false;
async function run(job) {
  working = true;
  let lock;
  try {
    lock = await open(path.join(statePath, 'job.lock'), 'wx', 0o600);
    job.status = 'running';
    job.startedAt = new Date().toISOString();
    await log(job, 'Job started.');
    const data = await catalog();
    if (job.action.startsWith('scan-')) await scan(job, data);
    else if (job.action === 'validate') await command(job, ['run', 'check']);
    else if (job.action === 'publish') {
      await atomicJson(path.join(statePath, 'publication.json'), {
        pending: true,
        jobId: job.id,
        updatedAt: new Date().toISOString(),
      });
      await command(job, ['run', 'check:catalog']);
      await command(job, ['run', 'build:apache']);
      await atomicJson(path.join(statePath, 'publication.json'), {
        pending: false,
        jobId: job.id,
        updatedAt: new Date().toISOString(),
      });
    } else await moderate(job, data);
    job.status = 'succeeded';
  } catch (error) {
    job.status = 'failed';
    await log(job, error.message);
  } finally {
    job.finishedAt = new Date().toISOString();
    await atomicJson(path.join(statePath, 'jobs.json'), jobs);
    if (lock) {
      await lock.close();
      await unlink(path.join(statePath, 'job.lock'));
    }
    working = false;
  }
}
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, origin);
    if (req.method === 'POST' && req.headers.origin !== origin)
      throw fail('Origin check failed.', 403);
    if (url.pathname === '/admin/api/session' && req.method === 'GET') {
      try {
        const session = sessionFor(req);
        return json(res, 200, {
          authenticated: true,
          csrf: session.csrf,
          ...authenticationDetails(),
        });
      } catch {
        return json(res, 200, {
          authenticated: false,
          ...authenticationDetails(),
        });
      }
    }
    if (
      url.pathname === '/admin/api/google/configure' &&
      req.method === 'POST'
    ) {
      if (!google || google.subject)
        throw fail('Google enrollment is not available.', 403);
      loginBudget();
      const input = await body(req);
      await requireEnrollmentToken(input.token);
      let next;
      try {
        next = validateGoogleConfig({ ...google, clientId: input.clientId });
      } catch (error) {
        throw fail(error.message);
      }
      if (!next.clientId) throw fail('A Google OAuth client ID is required.');
      if (google.subject || bindingGoogle)
        throw fail(
          'Google enrollment is already complete or in progress.',
          409,
        );
      bindingGoogle = true;
      try {
        await atomicJson(path.join(statePath, 'google.json'), next);
        google = next;
        googleChallenges.clear();
      } finally {
        bindingGoogle = false;
      }
      return json(res, 200, authenticationDetails());
    }
    if (
      url.pathname === '/admin/api/google/challenge' &&
      req.method === 'POST'
    ) {
      if (!google?.clientId)
        throw fail('The Google OAuth client has not been configured.', 409);
      const input = await body(req);
      if (!google.subject) await requireEnrollmentToken(input.token);
      for (const [key, challenge] of googleChallenges)
        if (challenge.expires < Date.now()) googleChallenges.delete(key);
      if (googleChallenges.size >= 1000)
        throw fail('Please wait before starting another sign-in attempt.', 429);
      const id = token();
      const nonce = token();
      googleChallenges.set(digest(id), {
        nonce,
        expires: Date.now() + 600_000,
      });
      return json(
        res,
        200,
        { nonce, clientId: google.clientId },
        {
          'Set-Cookie': `gosdir_google=${id}; Path=/admin/; HttpOnly; Secure; SameSite=Strict; Max-Age=600`,
        },
      );
    }
    if (url.pathname === '/admin/api/google/login' && req.method === 'POST') {
      if (!google?.clientId)
        throw fail('The Google OAuth client has not been configured.', 409);
      loginBudget();
      const input = await body(req);
      const id = cookieValue(req, 'gosdir_google');
      const key = id ? digest(id) : '';
      const challenge = googleChallenges.get(key);
      googleChallenges.delete(key);
      if (!challenge || challenge.expires < Date.now())
        throw fail(
          'The Google sign-in request expired. Please try again.',
          401,
        );
      const identity = await verifyGoogleIdentity(
        input.credential,
        google,
        challenge.nonce,
      );
      if (!google.subject) {
        await requireEnrollmentToken(input.token);
        if (google.subject || bindingGoogle)
          throw fail(
            'Google enrollment is already complete or in progress. Please sign in again.',
            409,
          );
        bindingGoogle = true;
        try {
          const next = {
            ...google,
            subject: identity.subject,
            enrolledAt: new Date().toISOString(),
          };
          await atomicJson(path.join(statePath, 'google.json'), next);
          google = next;
          await unlink(path.join(statePath, 'setup.json'));
          await unlink(path.join(statePath, 'setup-token')).catch(() => {});
        } finally {
          bindingGoogle = false;
        }
      } else if (google.subject !== identity.subject)
        throw fail(
          'This Google account is not authorized for the admin portal.',
          403,
        );
      attempts.delete('login');
      return signIn(res);
    }
    if (
      ['/admin/api/login', '/admin/api/setup'].includes(url.pathname) &&
      req.method === 'POST'
    ) {
      if (google)
        throw fail('Use Google sign-in to access this admin portal.', 403);
      // Use one global rate budget: forwarded addresses are untrusted.
      loginBudget();
      const input = await body(req);
      if (url.pathname.endsWith('/setup')) {
        const setup = await readJson(path.join(statePath, 'setup.json'), null);
        if (
          credential ||
          !setup ||
          typeof input.token !== 'string' ||
          digest(input.token) !== setup.hash
        )
          throw fail(
            'The setup link is invalid or has already been used.',
            403,
          );
        credential = passwordHash(input.password);
        await atomicJson(path.join(statePath, 'credential.json'), credential);
        await unlink(path.join(statePath, 'setup.json'));
        await unlink(path.join(statePath, 'setup-token')).catch(() => {});
      } else if (!credential || !passwordMatches(input.password, credential))
        throw fail('Incorrect password.', 401);
      attempts.delete('login');
      return signIn(res);
    }
    if (url.pathname.startsWith('/admin/api/')) {
      const session = sessionFor(req);
      if (req.method === 'POST' && req.headers['x-csrf-token'] !== session.csrf)
        throw fail('Refresh the page and try again.', 403);
      if (url.pathname === '/admin/api/logout' && req.method === 'POST') {
        for (const [key, value] of sessions)
          if (value === session) sessions.delete(key);
        return json(
          res,
          200,
          {},
          {
            'Set-Cookie':
              'gosdir_admin=; Path=/admin/; Secure; HttpOnly; SameSite=Strict; Max-Age=0',
          },
        );
      }
      if (url.pathname === '/admin/api/status' && req.method === 'GET') {
        const data = await catalog();
        const records = data.projects.map((project) => {
          const observation = data.observations[project.id];
          const availability = data.availability.projects[project.id];
          const links = observation?.links ?? availability?.links ?? {};
          return {
            id: project.id,
            name: project.name,
            sponsor: project.sponsor,
            geography: project.geography,
            verified: project.verified,
            status: effectiveStatus(
              project,
              availability,
              data.administration.records[project.id],
            ),
            hold: project.directory?.reason ?? null,
            reason:
              data.administration.records[project.id]?.reason ??
              project.directory?.reason,
            links,
            checkedAt: observation?.checkedAt ?? data.availability.generatedAt,
            deadLinks: Object.values(links).filter(
              (link) => classifyLinkObservation(link) === 'hard',
            ).length,
            uncertainLinks: Object.values(links).filter(
              (link) => classifyLinkObservation(link) === 'inconclusive',
            ).length,
            canReinstate: canReinstate(project, observation),
            assessment:
              observation?.assessment ?? assessProjectLinks(links).assessment,
          };
        });
        return json(res, 200, {
          records,
          jobs: jobs.slice(-50).reverse(),
          working,
          availabilityDate: data.availability.generatedAt,
          publication: await readJson(
            path.join(statePath, 'publication.json'),
            { pending: false },
          ),
        });
      }
      if (url.pathname === '/admin/api/jobs' && req.method === 'POST') {
        if (working)
          throw fail('A job is already running. Wait for it to finish.', 409);
        const input = await body(req);
        const data = await catalog();
        // Recheck after asynchronous reads to prevent concurrent submissions.
        if (working)
          throw fail('A job is already running. Wait for it to finish.', 409);
        let validated;
        try {
          validated = validateAction(
            input,
            new Map(data.projects.map((p) => [p.id, p])),
          );
        } catch (error) {
          throw fail(error.message);
        }
        const job = {
          ...validated,
          id: token().slice(0, 16),
          status: 'queued',
          createdAt: new Date().toISOString(),
        };
        working = true;
        jobs.push(job);
        try {
          await atomicJson(path.join(statePath, 'jobs.json'), jobs);
        } catch (error) {
          working = false;
          jobs.pop();
          throw error;
        }
        json(res, 202, { id: job.id });
        void run(job).catch((error) => {
          console.error(error);
          working = false;
        });
        return;
      }
      throw fail('Endpoint not found.', 404);
    }
    if (!['GET', 'HEAD'].includes(req.method))
      throw fail('Method not allowed.', 405);
    const assets = new Map([
      ['/admin/', ['index.html', 'text/html; charset=utf-8']],
      ['/admin', ['index.html', 'text/html; charset=utf-8']],
      ['/admin/admin.js', ['admin.js', 'text/javascript; charset=utf-8']],
      ['/admin/admin.css', ['admin.css', 'text/css; charset=utf-8']],
      ['/admin/privacy', ['privacy.html', 'text/html; charset=utf-8']],
      ['/admin/privacy/', ['privacy.html', 'text/html; charset=utf-8']],
    ]);
    const asset = assets.get(url.pathname);
    if (!asset) throw fail('Page not found.', 404);
    const contents =
      req.method === 'HEAD'
        ? undefined
        : await readFile(path.join(root, 'admin-src', asset[0]));
    res.writeHead(200, { ...responseHeaders, 'Content-Type': asset[1] });
    res.end(contents);
  } catch (error) {
    if (!res.headersSent)
      json(res, error.status ?? 500, {
        error: error.status
          ? error.message
          : 'The administrative service could not complete the request. See the service log.',
      });
    if (!error.status) console.error(error);
  }
});
server.requestTimeout = 30_000;
server.headersTimeout = 15_000;
// The supervisor starts one process; remove a job lock left by an interrupted
// process only after successfully acquiring the listening port.
server.listen(port, '127.0.0.1', async () => {
  await unlink(path.join(statePath, 'job.lock')).catch((error) => {
    if (error.code !== 'ENOENT') throw error;
  });
  console.log(`GOSDIR admin listening on 127.0.0.1:${port}`);
});
async function shutdown() {
  server.close();
  for (const child of activeCommands) stopCommand(child);
  for (let attempt = 0; attempt < 100 && activeCommands.size; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  for (const child of activeCommands) stopCommand(child, 'SIGKILL');
  await vite.close();
  process.exit(0);
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
