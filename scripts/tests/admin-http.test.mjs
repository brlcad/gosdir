import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import net from 'node:net';
import { once } from 'node:events';

test(
  'admin HTTP endpoints enforce setup, sign-in, Origin, CSRF, logout and path boundaries',
  { timeout: 45_000 },
  async (t) => {
    const state = await mkdtemp(path.join(tmpdir(), 'gosdir-admin-test-'));
    const probe = net.createServer();
    probe.listen(0, '127.0.0.1');
    await once(probe, 'listening');
    const port = probe.address().port;
    await new Promise((resolve) => probe.close(resolve));
    const child = spawn(process.execPath, ['scripts/admin-server.mjs'], {
      env: {
        ...process.env,
        GOSDIR_ADMIN_STATE: state,
        GOSDIR_ADMIN_PORT: String(port),
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    child.stdout.on('data', (chunk) => {
      output += chunk;
    });
    child.stderr.on('data', (chunk) => {
      output += chunk;
    });
    t.after(async () => {
      if (child.exitCode === null) {
        child.kill('SIGTERM');
        await once(child, 'exit');
      }
      await rm(state, { recursive: true, force: true });
    });
    for (let attempt = 0; !output.includes('admin listening'); attempt++) {
      if (child.exitCode !== null || attempt > 150)
        throw new Error(`Service did not start: ${output}`);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const origin = 'https://gosdir.com';
    const auth = { cookie: '', csrf: '' };
    const request = (endpoint, value, headers = {}) =>
      fetch(
        `http://127.0.0.1:${port}/admin/${endpoint}`,
        value !== undefined
          ? {
              method: 'POST',
              body: JSON.stringify(value),
              headers: {
                'Content-Type': 'application/json',
                Origin: origin,
                ...(auth.cookie ? { Cookie: auth.cookie } : {}),
                ...(auth.csrf ? { 'X-CSRF-Token': auth.csrf } : {}),
                ...headers,
              },
            }
          : {
              headers: {
                ...(auth.cookie ? { Cookie: auth.cookie } : {}),
                ...headers,
              },
            },
      );
    const page = await request('');
    assert.equal(page.status, 200);
    assert.match(page.headers.get('x-robots-tag'), /noindex/);
    assert.equal((await request('api/status')).status, 401);
    assert.deepEqual(await (await request('api/session')).json(), {
      authenticated: false,
      setupRequired: true,
      provider: 'password',
      google: null,
    });
    const setup = await readFile(path.join(state, 'setup-token'), 'utf8');
    const password = 'a-strong-private-test-password';
    assert.equal(
      (
        await request(
          'api/setup',
          { token: setup, password },
          { Origin: 'https://elsewhere.example' },
        )
      ).status,
      403,
    );
    assert.equal(
      (await request('api/setup', { token: 'wrong-token', password })).status,
      403,
    );
    const configured = await request('api/setup', { token: setup, password });
    assert.equal(configured.status, 200);
    const rawCookie = configured.headers.get('set-cookie');
    assert.match(rawCookie, /HttpOnly; Secure; SameSite=Strict/);
    auth.cookie = rawCookie.split(';')[0];
    auth.csrf = (await configured.json()).csrf;
    assert.equal(
      (await request('api/setup', { token: setup, password })).status,
      403,
    );
    const status = await request('api/status');
    assert.equal(status.status, 200);
    const data = await status.json();
    assert.ok(data.records.length > 0);
    assert.equal(status.headers.get('cache-control'), 'no-store, private');
    assert.equal(
      (
        await request(
          'api/jobs',
          { action: 'delete', ids: [] },
          { 'X-CSRF-Token': 'wrong' },
        )
      ).status,
      403,
    );
    assert.equal(
      (await request('api/jobs', { action: 'shell', ids: [] })).status,
      400,
    );
    assert.equal(
      (
        await request('api/jobs', {
          action: 'delete',
          ids: [data.records[0].id],
          reason: 'A test reason',
          confirm: 'wrong',
        })
      ).status,
      400,
    );
    assert.equal(
      (await request('../.admin-state/credential.json')).status,
      404,
    );
    assert.equal((await request('api/logout', {})).status, 200);
    assert.equal((await request('api/status')).status, 401);
    assert.equal(
      (await request('api/login', { password: 'wrong' })).status,
      401,
    );
    assert.equal((await request('api/login', { password })).status, 200);
    const stored = await readFile(path.join(state, 'credential.json'), 'utf8');
    assert.ok(!stored.includes(password));
  },
);
