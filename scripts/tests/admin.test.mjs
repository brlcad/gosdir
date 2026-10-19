import test from 'node:test';
import assert from 'node:assert/strict';
import { planModeration, canReinstate } from '../lib/admin-moderation.mjs';
import {
  passwordHash,
  passwordMatches,
  validateAction,
  effectiveStatus,
} from '../lib/admin-security.mjs';

test('passwords use salted hashes and reject incorrect or oversized inputs', () => {
  const password = 'long-test-password-for-admin';
  const credential = passwordHash(password);
  assert.notEqual(credential.hash, passwordHash(password).hash);
  assert.equal(passwordMatches(password, credential), true);
  assert.equal(passwordMatches('incorrect-password', credential), false);
  assert.equal(passwordMatches('a'.repeat(257), credential), false);
  assert.throws(() => passwordHash('short'));
});

test('administrative actions require known records, bounded selections, reasons and explicit confirmation', () => {
  const projects = new Map([['known', {}]]);
  const input = {
    action: 'delete',
    ids: ['known'],
    reason: 'Duplicate of another record.',
    confirm: 'DELETE',
  };
  assert.equal(validateAction(input, projects).action, 'delete');
  assert.throws(() => validateAction({ ...input, action: 'shell' }, projects));
  assert.throws(() =>
    validateAction({ ...input, ids: ['../credential.json'] }, projects),
  );
  assert.throws(() =>
    validateAction({ ...input, ids: ['known', 'known'] }, projects),
  );
  assert.throws(() =>
    validateAction({ ...input, confirm: 'CONFIRM' }, projects),
  );
  assert.throws(() => validateAction({ ...input, reason: '' }, projects));
  assert.throws(() => validateAction({ ...input, ids: [] }, projects));
});

test('manual holds override healthy automation and canonical holds remain suspended', () => {
  const healthy = { status: 'enabled' };
  assert.equal(effectiveStatus({}, healthy), 'published');
  assert.equal(
    effectiveStatus({ directory: { status: 'disabled' } }, healthy),
    'suspended',
  );
  for (const status of ['suspended', 'hidden', 'deleted'])
    assert.equal(effectiveStatus({}, healthy, { status }), status);
  assert.equal(effectiveStatus({}, { status: 'disabled' }), 'suspended');
  assert.equal(effectiveStatus({}, undefined), 'suspended');
});

const now = new Date('2026-10-18T12:00:00Z');
function fixture() {
  const project = {
    id: 'known',
    repository: 'https://example.com/source',
    officialUrl: 'https://example.com/evidence',
    verified: '2026-01-01',
  };
  return {
    projects: [project, { ...project, id: 'untouched' }],
    administration: {
      records: {
        known: {
          status: 'hidden',
          reason: 'Review required.',
          updatedAt: '2026-10-17T12:00:00Z',
        },
      },
    },
    availability: {
      generatedAt: '2026-10-17',
      projects: {
        known: {
          status: 'disabled',
          statusChangedAt: '2026-10-17',
          failureStreak: 2,
          reasonCodes: ['repository-unreachable'],
        },
        untouched: { status: 'enabled' },
      },
    },
    observations: {
      known: {
        checkedAt: '2026-10-18T11:00:00Z',
        links: {
          repository: { url: project.repository, status: 'ok' },
          official: { url: project.officialUrl, status: 'redirected' },
        },
      },
    },
  };
}

test('reinstatement clears a portal and automated hold only after recent matching healthy checks', () => {
  const data = fixture();
  const next = planModeration(
    { action: 'reinstate', ids: ['known'], reason: 'Reviewed recovery.' },
    data,
    now,
  );
  assert.equal(next.administration.records.known, undefined);
  assert.equal(next.availability.projects.known.status, 'enabled');
  assert.equal(next.availability.projects.known.failureStreak, 0);
  assert.deepEqual(next.availability.projects.known.reasonCodes, []);
  assert.equal(next.availability.projects.known.statusChangedAt, '2026-10-18');
  assert.deepEqual(
    next.availability.projects.untouched,
    data.availability.projects.untouched,
  );
  assert.deepEqual(next.availability.carriedForwardProjectIds, ['untouched']);
  assert.equal(data.projects[0].verified, '2026-01-01');
  assert.equal(data.administration.records.known.status, 'hidden');
});

test('stale, mismatched, inconclusive or editorially held records cannot be reinstated', () => {
  for (const mutate of [
    (data) => {
      data.observations.known.checkedAt = '2026-10-16T12:00:00Z';
    },
    (data) => {
      data.observations.known.checkedAt = 'invalid';
    },
    (data) => {
      data.observations.known.checkedAt = '2026-10-19T12:00:00Z';
    },
    (data) => {
      data.observations.known.links.repository.url =
        'https://different.example/source';
    },
    (data) => {
      data.observations.known.links.repository.status = 'auth-required';
    },
    (data) => {
      data.projects[0].directory = {
        status: 'disabled',
        reason: 'License review required.',
      };
    },
  ]) {
    const data = fixture();
    mutate(data);
    assert.equal(
      canReinstate(data.projects[0], data.observations.known, now.getTime()),
      false,
    );
    assert.throws(() =>
      planModeration({ action: 'reinstate', ids: ['known'] }, data, now),
    );
  }
});

test('suspension, hiding and deletion preserve canonical records and automated observations', () => {
  const data = fixture();
  for (const [action, status] of [
    ['suspend', 'suspended'],
    ['hide', 'hidden'],
    ['delete', 'deleted'],
  ]) {
    const next = planModeration(
      { action, ids: ['known'], reason: 'An explicit reviewed reason.' },
      data,
      now,
    );
    assert.equal(next.administration.records.known.status, status);
    assert.equal(
      next.administration.records.known.reason,
      action === 'suspend'
        ? 'An explicit reviewed reason.'
        : `This record has been ${status} by an administrator.`,
    );
    assert.equal(next.availability, null);
    assert.equal(data.projects.length, 2);
    assert.equal(data.availability.projects.known.status, 'disabled');
  }
});
