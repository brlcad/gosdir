import {
  randomBytes,
  scryptSync,
  timingSafeEqual,
  createHash,
} from 'node:crypto';

export const token = () => randomBytes(32).toString('hex');
export const digest = (value) =>
  createHash('sha256').update(value).digest('hex');

export function passwordHash(password) {
  if (
    typeof password !== 'string' ||
    password.length < 14 ||
    password.length > 256
  ) {
    throw new Error('Use a password between 14 and 256 characters.');
  }
  const salt = token();
  return { salt, hash: scryptSync(password, salt, 64).toString('hex') };
}

export function passwordMatches(password, credential) {
  if (typeof password !== 'string' || password.length > 256) return false;
  const actual = scryptSync(password, credential.salt, 64);
  const expected = Buffer.from(credential.hash, 'hex');
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function effectiveStatus(project, availability, administration) {
  return (
    administration?.status ??
    (project.directory || availability?.status !== 'enabled'
      ? 'suspended'
      : 'published')
  );
}

export function validateAction(body, projects) {
  const actions = [
    'scan-all',
    'scan-suspended',
    'scan-selected',
    'suspend',
    'hide',
    'reinstate',
    'delete',
    'validate',
    'publish',
  ];
  if (!actions.includes(body.action))
    throw new Error('Unknown administrative job.');
  if (
    !Array.isArray(body.ids) ||
    body.ids.length > 100 ||
    body.ids.some((id) => typeof id !== 'string' || !projects.has(id)) ||
    new Set(body.ids).size !== body.ids.length
  ) {
    throw new Error('Select at most 100 unique, existing records.');
  }
  if (
    ['scan-selected', 'suspend', 'hide', 'reinstate', 'delete'].includes(
      body.action,
    ) &&
    !body.ids.length
  ) {
    throw new Error('Select at least one record.');
  }
  if (['suspend', 'hide', 'reinstate', 'delete'].includes(body.action)) {
    if (
      typeof body.reason !== 'string' ||
      body.reason.trim().length < 8 ||
      body.reason.length > 500
    ) {
      throw new Error(
        'Provide a reason between 8 and 500 characters. Suspension reasons are public.',
      );
    }
    if (body.confirm !== (body.action === 'delete' ? 'DELETE' : 'CONFIRM')) {
      throw new Error('The action must be explicitly confirmed.');
    }
  }
  return {
    action: body.action,
    ids: [...body.ids],
    reason: body.reason?.trim() ?? '',
  };
}
