import availabilityData from './project-availability.json';
import type { EvidenceLinkCheck } from './freshness';

export type ProjectAvailabilityStatus = 'enabled' | 'disabled';
export type ProjectAvailabilityReasonCode =
  | 'repository-unreachable'
  | 'public-evidence-unreachable';

export type ProjectAvailabilityRecord = {
  status: ProjectAvailabilityStatus;
  statusChangedAt: string;
  failureStreak: number;
  reasonCodes: ProjectAvailabilityReasonCode[];
  links: {
    repository: EvidenceLinkCheck;
    official: EvidenceLinkCheck;
    provenance?: EvidenceLinkCheck;
  };
};

export type ProjectAvailabilitySnapshot = {
  generatedAt: string;
  projects: Record<string, ProjectAvailabilityRecord>;
};

export const availabilitySnapshot =
  availabilityData as ProjectAvailabilitySnapshot;

export const projectAvailabilityById: Readonly<
  Partial<Record<string, ProjectAvailabilityRecord>>
> = availabilitySnapshot.projects;

export const availabilityReasonLabels: Record<
  ProjectAvailabilityReasonCode,
  string
> = {
  'repository-unreachable':
    'The public source repository is not currently reachable.',
  'public-evidence-unreachable':
    'No supporting public evidence link is currently reachable.',
};

const hardLinkErrorCodes = new Set([
  'connection-refused',
  'dns-not-found',
  'invalid-public-url',
  'invalid-tls-certificate',
  'non-public-destination',
]);

export function getProjectAvailability(projectId: string) {
  return projectAvailabilityById[projectId];
}

export function isKnownHardDeadLink(
  link: EvidenceLinkCheck | undefined,
): boolean {
  if (!link) return false;
  return (
    link.status === 'not-found' || hardLinkErrorCodes.has(link.errorCode ?? '')
  );
}
