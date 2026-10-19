import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client();
const issuers = new Set(['accounts.google.com', 'https://accounts.google.com']);
const invalid = (message, status = 401) =>
  Object.assign(new Error(message), { status });

export function validateGoogleConfig(value) {
  if (value === null) return null;
  if (
    !value ||
    typeof value !== 'object' ||
    typeof value.allowedEmail !== 'string' ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.allowedEmail)
  ) {
    throw new Error(
      'Google admin configuration requires one allowed account email.',
    );
  }
  if (
    value.clientId !== null &&
    (typeof value.clientId !== 'string' ||
      !/^\d+-[A-Za-z0-9_-]+\.apps\.googleusercontent\.com$/.test(
        value.clientId,
      ))
  ) {
    throw new Error(
      'Enter the Google web OAuth client ID ending in .apps.googleusercontent.com.',
    );
  }
  if (
    value.subject !== null &&
    (typeof value.subject !== 'string' ||
      !value.subject.length ||
      value.subject.length > 255)
  ) {
    throw new Error('Invalid enrolled Google account ID.');
  }
  if (value.subject && !value.clientId)
    throw new Error('An enrolled Google account requires a client ID.');
  return { ...value, allowedEmail: value.allowedEmail.toLowerCase() };
}

export function authorizeGoogleClaims(
  payload,
  config,
  nonce,
  now = Date.now(),
) {
  if (
    !payload ||
    !issuers.has(payload.iss) ||
    payload.aud !== config.clientId ||
    !Number.isFinite(payload.exp) ||
    payload.exp * 1000 <= now ||
    typeof payload.sub !== 'string' ||
    !payload.sub.length ||
    payload.sub.length > 255 ||
    payload.nonce !== nonce
  ) {
    throw invalid('Google sign-in could not be verified. Please try again.');
  }
  if (
    payload.email_verified !== true ||
    typeof payload.email !== 'string' ||
    payload.email.toLowerCase() !== config.allowedEmail ||
    (config.subject && payload.sub !== config.subject)
  ) {
    throw invalid(
      'This Google account is not authorized for the admin portal.',
      403,
    );
  }
  return { subject: payload.sub, email: payload.email.toLowerCase() };
}

export async function verifyGoogleIdentity(
  credential,
  config,
  nonce,
  verifier = client,
) {
  if (
    typeof credential !== 'string' ||
    credential.length > 20_000 ||
    !credential.length
  )
    throw invalid('A Google sign-in credential is required.');
  let ticket;
  try {
    ticket = await verifier.verifyIdToken({
      idToken: credential,
      audience: config.clientId,
    });
  } catch {
    throw invalid('Google sign-in could not be verified. Please try again.');
  }
  return authorizeGoogleClaims(ticket.getPayload(), config, nonce);
}
