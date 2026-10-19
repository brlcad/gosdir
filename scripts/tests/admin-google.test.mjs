import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync, sign } from 'node:crypto';
import { OAuth2Client } from 'google-auth-library';
import {
  validateGoogleConfig,
  verifyGoogleIdentity,
} from '../lib/admin-google.mjs';

const config = {
  allowedEmail: 'owner@gmail.com',
  clientId: '123456-fixture.apps.googleusercontent.com',
  subject: null,
};
const keys = generateKeyPairSync('rsa', { modulusLength: 2048 });
const verifier = new OAuth2Client();
verifier.getFederatedSignonCertsAsync = async () => ({
  certs: { fixture: keys.publicKey.export({ type: 'spki', format: 'pem' }) },
});
function credential(overrides = {}, privateKey = keys.privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(
    JSON.stringify({ alg: 'RS256', kid: 'fixture' }),
  ).toString('base64url');
  const payload = Buffer.from(
    JSON.stringify({
      iss: 'https://accounts.google.com',
      aud: config.clientId,
      sub: '123456789012345678901',
      email: config.allowedEmail,
      email_verified: true,
      nonce: 'test-nonce',
      iat: now - 10,
      exp: now + 3600,
      ...overrides,
    }),
  ).toString('base64url');
  const input = `${header}.${payload}`;
  return `${input}.${sign('RSA-SHA256', Buffer.from(input), privateKey).toString('base64url')}`;
}

test('Google configuration permits one account and a web OAuth client, including pending setup', () => {
  assert.equal(validateGoogleConfig(null), null);
  assert.equal(
    validateGoogleConfig({ ...config, clientId: null }).clientId,
    null,
  );
  assert.equal(
    validateGoogleConfig({ ...config, allowedEmail: 'OWNER@GMAIL.COM' })
      .allowedEmail,
    config.allowedEmail,
  );
  for (const invalid of [
    { ...config, clientId: 'a-secret-or-url' },
    { ...config, allowedEmail: '*' },
    { ...config, subject: '' },
    { ...config, clientId: null, subject: '123' },
  ])
    assert.throws(() => validateGoogleConfig(invalid));
});

test('Google identity verification validates signed tokens with the official Google library', async () => {
  const result = await verifyGoogleIdentity(
    credential(),
    config,
    'test-nonce',
    verifier,
  );
  assert.deepEqual(result, {
    subject: '123456789012345678901',
    email: config.allowedEmail,
  });
  assert.equal(
    (
      await verifyGoogleIdentity(
        credential({ email: 'OWNER@GMAIL.COM' }),
        config,
        'test-nonce',
        verifier,
      )
    ).email,
    config.allowedEmail,
  );
});

test('Google login rejects wrong signatures, issuers, audiences, expiry, nonce and accounts', async () => {
  const otherKey = generateKeyPairSync('rsa', {
    modulusLength: 2048,
  }).privateKey;
  await assert.rejects(
    verifyGoogleIdentity(
      credential({}, otherKey),
      config,
      'test-nonce',
      verifier,
    ),
  );
  for (const invalid of [
    { iss: 'https://malicious.example' },
    { aud: 'another-client.apps.googleusercontent.com' },
    { exp: Math.floor(Date.now() / 1000) - 60 },
    { nonce: 'another-nonce' },
    { nonce: undefined },
    { email: 'someone-else@gmail.com' },
    { email_verified: false },
    { sub: '' },
  ])
    await assert.rejects(
      verifyGoogleIdentity(credential(invalid), config, 'test-nonce', verifier),
    );
  await assert.rejects(
    verifyGoogleIdentity('not-a-jwt', config, 'test-nonce', verifier),
  );
  await assert.rejects(
    verifyGoogleIdentity(
      credential(),
      { ...config, subject: 'a-different-google-account' },
      'test-nonce',
      verifier,
    ),
  );
  assert.equal(
    (
      await verifyGoogleIdentity(
        credential(),
        { ...config, subject: '123456789012345678901' },
        'test-nonce',
        verifier,
      )
    ).subject,
    '123456789012345678901',
  );
});
