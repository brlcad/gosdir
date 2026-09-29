import assert from 'node:assert/strict';
import test from 'node:test';

import {
  applyProjectAvailabilityPolicy,
  assessProjectLinks,
  classifyLinkObservation,
  findBlastRadiusViolation,
  shouldUsePendingAvailabilitySnapshot,
} from '../lib/project-availability-policy.mjs';
import {
  classifyPublicLinkError,
  shouldRetryPublicLinkWithGet,
} from '../lib/public-link-check.mjs';

const firstDay = '2026-09-27';
const secondDay = '2026-09-28';

function link(status, extra = {}) {
  return { url: 'https://example.gov/project', status, ...extra };
}

function healthyLinks() {
  return {
    repository: link('ok'),
    official: link('redirected', {
      finalUrl: 'https://www.example.gov/project',
    }),
  };
}

function enabledPrevious(overrides = {}) {
  return {
    status: 'enabled',
    statusChangedAt: firstDay,
    failureStreak: 0,
    reasonCodes: [],
    links: healthyLinks(),
    ...overrides,
  };
}

test('classifies only durable failures as hard', () => {
  assert.equal(classifyLinkObservation(link('ok')), 'reachable');
  assert.equal(classifyLinkObservation(link('redirected')), 'reachable');
  assert.equal(classifyLinkObservation(link('not-found')), 'hard');
  assert.equal(
    classifyLinkObservation(link('error', { errorCode: 'invalid-public-url' })),
    'hard',
  );
  assert.equal(
    classifyLinkObservation(
      link('error', { errorCode: 'non-public-destination' }),
    ),
    'hard',
  );
  for (const errorCode of [
    'connection-refused',
    'dns-not-found',
    'invalid-tls-certificate',
  ]) {
    assert.equal(classifyLinkObservation(link('error', { errorCode })), 'hard');
  }

  for (const observation of [
    link('auth-required', { httpStatus: 403 }),
    link('unavailable', { httpStatus: 421 }),
    link('rate-limited', { httpStatus: 429 }),
    link('transient', { httpStatus: 503 }),
    link('error', { errorCode: 'request-timeout' }),
    link('error', { errorCode: 'ipv6-only-destination' }),
    link('error', { errorCode: 'request-failed' }),
    link('error', { errorCode: 'redirect-limit' }),
    link('error', { errorCode: 'not-checked' }),
  ]) {
    assert.equal(classifyLinkObservation(observation), 'inconclusive');
  }
});

test('retries GET for method-sensitive and HEAD-only not-found responses', () => {
  for (const status of [400, 403, 404, 405, 410, 501]) {
    assert.equal(shouldRetryPublicLinkWithGet(status), true);
  }
  for (const status of [200, 401, 429, 500]) {
    assert.equal(shouldRetryPublicLinkWithGet(status), false);
  }
});

test('maps durable transport failures to explicit error codes', () => {
  for (const code of ['ENOTFOUND', 'ENODATA', 'EAI_NONAME']) {
    assert.equal(classifyPublicLinkError(errorWithCode(code)), 'dns-not-found');
  }
  assert.equal(
    classifyPublicLinkError(errorWithCode('ECONNREFUSED')),
    'connection-refused',
  );
  for (const code of [
    'CERT_HAS_EXPIRED',
    'ERR_TLS_CERT_ALTNAME_INVALID',
    'SELF_SIGNED_CERT_IN_CHAIN',
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
  ]) {
    assert.equal(
      classifyPublicLinkError(errorWithCode(code)),
      'invalid-tls-certificate',
    );
  }

  assert.equal(
    classifyPublicLinkError(errorWithCode('EAI_AGAIN')),
    'request-failed',
  );
  assert.equal(
    classifyPublicLinkError(errorWithCode('ECONNRESET')),
    'request-failed',
  );
  assert.equal(
    classifyPublicLinkError(new Error('request-timeout')),
    'request-timeout',
  );
  assert.equal(
    classifyPublicLinkError(new Error('ipv6-only-destination')),
    'ipv6-only-destination',
  );
});

test('requires a reachable repository and one reachable public evidence link', () => {
  assert.deepEqual(assessProjectLinks(healthyLinks()), {
    assessment: 'healthy',
    reasonCodes: [],
  });

  assert.deepEqual(
    assessProjectLinks({
      repository: link('ok'),
      official: link('not-found'),
      provenance: link('ok'),
    }),
    { assessment: 'healthy', reasonCodes: [] },
  );

  assert.deepEqual(
    assessProjectLinks({
      repository: link('not-found'),
      official: link('ok'),
    }),
    { assessment: 'hard', reasonCodes: ['repository-unreachable'] },
  );

  assert.deepEqual(
    assessProjectLinks({
      repository: link('ok'),
      official: link('not-found'),
      provenance: link('not-found'),
    }),
    {
      assessment: 'hard',
      reasonCodes: ['public-evidence-unreachable'],
    },
  );
});

test('disables after two hard assessments', () => {
  const links = {
    repository: link('not-found'),
    official: link('ok'),
  };
  const first = applyProjectAvailabilityPolicy({
    previous: enabledPrevious(),
    links,
    checkedAt: firstDay,
  });

  assert.equal(first.status, 'enabled');
  assert.equal(first.failureStreak, 1);
  assert.deepEqual(first.reasonCodes, ['repository-unreachable']);

  const second = applyProjectAvailabilityPolicy({
    previous: first,
    links,
    checkedAt: secondDay,
  });
  assert.equal(second.status, 'disabled');
  assert.equal(second.statusChangedAt, secondDay);
  assert.equal(second.failureStreak, 2);
});

test('same-day reruns record a failure once without advancing its streak', () => {
  const hardLinks = {
    repository: link('not-found'),
    official: link('ok'),
  };
  const first = applyProjectAvailabilityPolicy({
    previous: enabledPrevious(),
    previousCheckedAt: secondDay,
    links: hardLinks,
    checkedAt: secondDay,
  });
  assert.equal(first.failureStreak, 1);
  assert.equal(first.status, 'enabled');

  const rerun = applyProjectAvailabilityPolicy({
    previous: first,
    previousCheckedAt: secondDay,
    links: hardLinks,
    checkedAt: secondDay,
  });
  assert.equal(rerun.failureStreak, 1);
  assert.equal(rerun.status, 'enabled');
});

test('corroborated repository loss disables immediately', () => {
  const result = applyProjectAvailabilityPolicy({
    previous: enabledPrevious(),
    links: {
      repository: link('not-found'),
      official: link('ok'),
    },
    checkedAt: secondDay,
    corroboratedRepositoryUnavailable: true,
  });

  assert.equal(result.status, 'disabled');
  assert.equal(result.failureStreak, 1);
  assert.equal(result.statusChangedAt, secondDay);
});

test('a healthy assessment immediately restores a disabled record', () => {
  const result = applyProjectAvailabilityPolicy({
    previous: enabledPrevious({
      status: 'disabled',
      failureStreak: 7,
      reasonCodes: ['repository-unreachable'],
    }),
    links: healthyLinks(),
    checkedAt: secondDay,
  });

  assert.equal(result.status, 'enabled');
  assert.equal(result.statusChangedAt, secondDay);
  assert.equal(result.failureStreak, 0);
  assert.deepEqual(result.reasonCodes, []);
});

test('an inconclusive assessment preserves prior publication state', () => {
  const previous = enabledPrevious({
    status: 'disabled',
    failureStreak: 3,
    reasonCodes: ['repository-unreachable'],
  });
  const links = {
    repository: link('auth-required', { httpStatus: 403 }),
    official: link('ok'),
  };
  const result = applyProjectAvailabilityPolicy({
    previous,
    links,
    checkedAt: secondDay,
  });

  assert.equal(result.status, 'disabled');
  assert.equal(result.statusChangedAt, firstDay);
  assert.equal(result.failureStreak, 3);
  assert.deepEqual(result.reasonCodes, ['repository-unreachable']);
  assert.equal(result.links, links);
});

test('blast-radius guard counts publication transitions only', () => {
  const previous = {
    a: enabledPrevious(),
    b: enabledPrevious(),
    c: enabledPrevious(),
  };
  const next = {
    a: { ...previous.a, status: 'disabled' },
    b: { ...previous.b, status: 'disabled' },
    c: previous.c,
    added: enabledPrevious(),
  };

  assert.deepEqual(findBlastRadiusViolation(previous, next, 1), {
    maximumStatusChanges: 1,
    changes: [
      { id: 'a', before: 'enabled', after: 'disabled' },
      { id: 'b', before: 'enabled', after: 'disabled' },
    ],
  });
  assert.equal(findBlastRadiusViolation(previous, next, 2), null);
});

test('pending state advances only on a later UTC day', () => {
  assert.equal(
    shouldUsePendingAvailabilitySnapshot({
      canonicalDate: '2026-09-27',
      pendingDate: '2026-09-28',
      today: '2026-09-29',
    }),
    true,
  );
  assert.equal(
    shouldUsePendingAvailabilitySnapshot({
      canonicalDate: '2026-09-28',
      pendingDate: '2026-09-28',
      today: '2026-09-29',
    }),
    true,
  );
  assert.equal(
    shouldUsePendingAvailabilitySnapshot({
      canonicalDate: '2026-09-27',
      pendingDate: '2026-09-28',
      today: '2026-09-28',
    }),
    false,
  );
  assert.equal(
    shouldUsePendingAvailabilitySnapshot({
      canonicalDate: '2026-09-28',
      pendingDate: '2026-09-27',
      today: '2026-09-29',
    }),
    false,
  );
});

function errorWithCode(code) {
  return Object.assign(new Error(`simulated ${code}`), { code });
}
