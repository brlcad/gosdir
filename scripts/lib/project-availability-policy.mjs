export const availabilityReasonCodes = [
  'repository-unreachable',
  'public-evidence-unreachable',
];

const hardErrorCodes = new Set([
  'connection-refused',
  'dns-not-found',
  'invalid-public-url',
  'invalid-tls-certificate',
  'non-public-destination',
]);
const reachableStatuses = new Set(['ok', 'redirected']);

export function classifyLinkObservation(observation) {
  if (reachableStatuses.has(observation?.status)) return 'reachable';
  if (observation?.status === 'not-found') return 'hard';
  if (
    observation?.status === 'error' &&
    hardErrorCodes.has(observation.errorCode)
  ) {
    return 'hard';
  }
  return 'inconclusive';
}

export function assessProjectLinks(links) {
  const repository = classifyLinkObservation(links?.repository);
  const evidence = [links?.official, links?.provenance]
    .filter(Boolean)
    .map(classifyLinkObservation);
  const hasReachableEvidence = evidence.includes('reachable');
  const allEvidenceHard =
    evidence.length > 0 && evidence.every((state) => state === 'hard');
  const reasonCodes = [];

  if (repository === 'hard') reasonCodes.push('repository-unreachable');
  if (allEvidenceHard) reasonCodes.push('public-evidence-unreachable');

  if (repository === 'reachable' && hasReachableEvidence) {
    return { assessment: 'healthy', reasonCodes: [] };
  }
  if (reasonCodes.length) return { assessment: 'hard', reasonCodes };
  return { assessment: 'inconclusive', reasonCodes: [] };
}

export function applyProjectAvailabilityPolicy({
  previous,
  previousCheckedAt,
  links,
  checkedAt,
  corroboratedRepositoryUnavailable = false,
}) {
  const { assessment, reasonCodes } = assessProjectLinks(links);
  const previousStatus = previous?.status ?? 'enabled';
  const previousStreak = validFailureStreak(previous?.failureStreak)
    ? previous.failureStreak
    : 0;
  const previousChangedAt = previous?.statusChangedAt ?? checkedAt;

  if (assessment === 'healthy') {
    const status = 'enabled';
    return {
      status,
      statusChangedAt:
        status === previousStatus ? previousChangedAt : checkedAt,
      failureStreak: 0,
      reasonCodes: [],
      links,
    };
  }

  if (assessment === 'inconclusive') {
    return {
      status: previousStatus,
      statusChangedAt: previousChangedAt,
      failureStreak: previousStreak,
      reasonCodes: [...(previous?.reasonCodes ?? [])],
      links,
    };
  }

  const failureStreak =
    previousCheckedAt === checkedAt
      ? Math.max(previousStreak, 1)
      : Math.min(Number.MAX_SAFE_INTEGER, previousStreak + 1);
  const disableImmediately =
    corroboratedRepositoryUnavailable &&
    reasonCodes.includes('repository-unreachable');
  const status =
    previousStatus === 'disabled' || disableImmediately || failureStreak >= 2
      ? 'disabled'
      : 'enabled';

  return {
    status,
    statusChangedAt: status === previousStatus ? previousChangedAt : checkedAt,
    failureStreak,
    reasonCodes,
    links,
  };
}

export function findAvailabilityStatusChanges(previousProjects, nextProjects) {
  const changes = [];

  for (const [id, current] of Object.entries(nextProjects)) {
    const previous = previousProjects?.[id];
    if (previous && previous.status !== current.status) {
      changes.push({ id, before: previous.status, after: current.status });
    }
  }

  return changes;
}

export function findBlastRadiusViolation(
  previousProjects,
  nextProjects,
  maximumStatusChanges,
) {
  const changes = findAvailabilityStatusChanges(previousProjects, nextProjects);
  if (changes.length <= maximumStatusChanges) return null;
  return { maximumStatusChanges, changes };
}

export function shouldUsePendingAvailabilitySnapshot({
  canonicalDate,
  pendingDate,
  today,
}) {
  return pendingDate >= canonicalDate && pendingDate < today;
}

function validFailureStreak(value) {
  return Number.isSafeInteger(value) && value >= 0;
}
