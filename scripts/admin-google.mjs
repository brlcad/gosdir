#!/usr/bin/env node
import { mkdir, readFile, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { token, digest } from './lib/admin-security.mjs';
import { validateGoogleConfig } from './lib/admin-google.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const state = process.env.GOSDIR_ADMIN_STATE ?? path.join(root, '.admin-state');
function option(name) {
  const argument = process.argv.find((value) => value.startsWith(`--${name}=`));
  return argument?.slice(name.length + 3).trim();
}
const allowedEmail = option('email');
const clientId = option('client-id') ?? null;
const config = validateGoogleConfig({ allowedEmail, clientId, subject: null });
await mkdir(state, { recursive: true, mode: 0o700 });
let previous;
try {
  previous = JSON.parse(
    await readFile(path.join(state, 'google.json'), 'utf8'),
  );
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
if (previous?.subject)
  throw new Error(
    'A Google account is already enrolled. Remove google.json while the service is stopped to explicitly reset enrollment.',
  );
async function writeJson(name, value) {
  const destination = path.join(state, name);
  const temporary = `${destination}.${token().slice(0, 12)}.next`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, destination);
}
const enrollment = token();
await writeJson('setup.json', { hash: digest(enrollment) });
await writeFile(path.join(state, 'setup-token'), enrollment, { mode: 0o600 });
await writeJson('google.json', config);
console.log(
  `Google admin sign-in prepared for ${config.allowedEmail}. Restart the admin service to activate it.`,
);
console.log(
  `Private enrollment: https://gosdir.com/admin/#setup=${enrollment}`,
);
