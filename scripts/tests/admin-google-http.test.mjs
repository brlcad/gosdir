import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import net from 'node:net';
import { once } from 'node:events';

test(
  'Google enrollment protects client configuration, disables password fallback and rejects missing/replayed challenges',
  { timeout: 30_000 },
  async (t) => {
    const state = await mkdtemp(path.join(tmpdir(), 'gosdir-google-test-'));
    await writeFile(
      path.join(state, 'google.json'),
      JSON.stringify({
        allowedEmail: 'owner@gmail.com',
        clientId: null,
        subject: null,
      }),
    );
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
    child.stdout.on('data', (value) => {
      output += value;
    });
    child.stderr.on('data', (value) => {
      output += value;
    });
    t.after(async () => {
      if (child.exitCode === null) {
        child.kill('SIGTERM');
        await once(child, 'exit');
      }
      await rm(state, { recursive: true, force: true });
    });
    for (let i = 0; !output.includes('admin listening'); i++) {
      if (i > 150 || child.exitCode !== null) throw new Error(output);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const request = (endpoint, input, headers = {}) =>
      fetch(
        `http://127.0.0.1:${port}/admin/${endpoint}`,
        input === undefined
          ? {}
          : {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Origin: 'https://gosdir.com',
                ...headers,
              },
              body: JSON.stringify(input),
            },
      );
    const session = await (await request('api/session')).json();
    assert.equal(session.provider, 'google');
    assert.equal(session.google.clientId, null);
    assert.equal(session.google.enrollmentRequired, true);
    assert.ok(!JSON.stringify(session).includes('owner@gmail.com'));
    const privacy = await request('privacy');
    assert.equal(privacy.status, 200);
    assert.match(privacy.headers.get('x-robots-tag'), /noindex/);
    assert.equal((await request('api/status')).status, 401);
    assert.equal(
      (await request('api/setup', { password: 'a-long-test-password' })).status,
      403,
    );
    assert.equal(
      (await request('api/login', { password: 'a-long-test-password' })).status,
      403,
    );
    const token = await readFile(path.join(state, 'setup-token'), 'utf8');
    const clientId = '123456-fixture.apps.googleusercontent.com';
    assert.equal(
      (
        await request('api/google/configure', {
          clientId,
          token: 'wrong-token',
        })
      ).status,
      403,
    );
    assert.equal(
      (
        await request(
          'api/google/configure',
          { clientId, token },
          { Origin: 'https://elsewhere.example' },
        )
      ).status,
      403,
    );
    assert.equal(
      (
        await request('api/google/configure', {
          clientId: 'invalid-client',
          token,
        })
      ).status,
      400,
    );
    const configured = await request('api/google/configure', {
      clientId,
      token,
    });
    assert.equal(configured.status, 200);
    assert.equal(
      JSON.parse(await readFile(path.join(state, 'google.json'), 'utf8'))
        .clientId,
      clientId,
    );
    assert.equal((await request('api/google/challenge', {})).status, 403);
    const challenge = await request('api/google/challenge', { token });
    assert.equal(challenge.status, 200);
    assert.match((await challenge.json()).nonce, /^[a-f0-9]{64}$/);
    assert.match(
      challenge.headers.get('set-cookie'),
      /HttpOnly; Secure; SameSite=Strict/,
    );
    assert.equal(
      (await request('api/google/login', { credential: '', token })).status,
      401,
    );
    const cookie = challenge.headers.get('set-cookie').split(';')[0];
    assert.equal(
      (
        await request(
          'api/google/login',
          { credential: '', token },
          { Cookie: cookie },
        )
      ).status,
      401,
    );
    const replay = await request(
      'api/google/login',
      { credential: '', token },
      { Cookie: cookie },
    );
    assert.equal(replay.status, 401);
    assert.match((await replay.json()).error, /expired/);
  },
);
