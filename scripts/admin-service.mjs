#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { mkdir, readFile, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const state = path.join(root, '.admin-state');
const action = process.argv[2] ?? 'status';
const pidFile = path.join(state, 'supervisor.pid');
await mkdir(state, { recursive: true, mode: 0o700 });
async function running() {
  try {
    const pid = Number((await readFile(pidFile, 'utf8')).trim());
    if (!Number.isSafeInteger(pid) || pid <= 1) return null;
    process.kill(pid, 0);
    return pid;
  } catch {
    return null;
  }
}
async function start() {
  if (await running()) {
    console.log('GOSDIR admin is already running.');
    return;
  }
  const result = spawnSync(
    '/usr/sbin/daemon',
    [
      '-r',
      '-R',
      '5',
      '-P',
      pidFile,
      '-p',
      path.join(state, 'server.pid'),
      '-o',
      path.join(state, 'service.log'),
      process.execPath,
      path.join(root, 'scripts/admin-server.mjs'),
    ],
    {
      cwd: root,
      encoding: 'utf8',
      stdio: 'ignore',
      env: {
        ...process.env,
        PATH: `/usr/local/bin:/usr/bin:/bin:${process.env.PATH ?? ''}`,
      },
    },
  );
  if (result.status !== 0)
    throw new Error(
      result.stderr ||
        result.error?.message ||
        'Could not start the admin service.',
    );
  console.log('Started the GOSDIR admin supervisor.');
}
if (action === 'start') await start();
else if (action === 'stop') {
  const pid = await running();
  if (pid) {
    process.kill(pid, 'SIGTERM');
    for (let attempt = 0; attempt < 100 && (await running()); attempt++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    if (await running())
      throw new Error(
        'The supervisor did not stop within 10 seconds. Check the service log.',
      );
  }
  console.log(
    pid
      ? 'Stopped the GOSDIR admin supervisor.'
      : 'GOSDIR admin is not running.',
  );
} else if (action === 'status')
  console.log(
    (await running())
      ? 'GOSDIR admin supervisor is running.'
      : 'GOSDIR admin is not running.',
  );
else if (action === 'setup-link') {
  try {
    console.log(
      `https://gosdir.com/admin/#setup=${(await readFile(path.join(state, 'setup-token'), 'utf8')).trim()}`,
    );
  } catch {
    throw new Error(
      'No enrollment token exists. Start the service or follow docs/admin-google-sign-in.md for Google re-enrollment; reset-password applies only to password mode.',
    );
  }
} else if (action === 'reset-password') {
  if (await running())
    throw new Error('Stop the admin service before resetting its password.');
  const googleConfig = await readFile(
    path.join(state, 'google.json'),
    'utf8',
  ).catch((error) => {
    if (error.code !== 'ENOENT') throw error;
    return null;
  });
  if (googleConfig)
    throw new Error(
      'Google sign-in is configured. Follow docs/admin-google-sign-in.md to re-enroll the authorized account.',
    );
  for (const name of ['credential.json', 'setup.json', 'setup-token'])
    await unlink(path.join(state, name)).catch((error) => {
      if (error.code !== 'ENOENT') throw error;
    });
  console.log(
    'Password removed. Start the service and run setup-link to choose a new password.',
  );
} else if (action === 'install') {
  const current = spawnSync('crontab', ['-l'], { encoding: 'utf8' });
  if (
    current.error ||
    (current.status !== 0 && !current.stderr.includes('no crontab'))
  )
    throw new Error('Could not read the current crontab.');
  const marker = '# gosdir-admin-service';
  const shellQuote = (value) => `'${value.replaceAll("'", "'\\''")}'`;
  const line = `@reboot ${shellQuote(process.execPath)} ${shellQuote(path.join(root, 'scripts/admin-service.mjs'))} start ${marker}`;
  const previous = (current.stdout ?? '')
    .split('\n')
    .filter((entry) => !entry.includes(marker))
    .join('\n')
    .trimEnd();
  const installed = spawnSync('crontab', ['-'], {
    input: `${previous}${previous ? '\n' : ''}${line}\n`,
    encoding: 'utf8',
  });
  if (installed.status !== 0)
    throw new Error(installed.stderr || 'Could not install the reboot entry.');
  console.log(
    'Installed the admin service reboot entry in the current user’s crontab.',
  );
  await start();
} else
  throw new Error(
    'Use start, stop, status, setup-link, reset-password, or install.',
  );
