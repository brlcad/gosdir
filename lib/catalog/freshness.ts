import freshnessData from './project-freshness.json';

export type FreshnessStatus =
  | 'fresh'
  | 'current'
  | 'quiet'
  | 'historical'
  | 'unknown';
export type LinkCheckStatus =
  | 'ok'
  | 'redirected'
  | 'auth-required'
  | 'rate-limited'
  | 'not-found'
  | 'transient'
  | 'unavailable'
  | 'error';

export type ActivityBucket = {
  year: number;
  commits: number | null;
};

export type EvidenceLinkCheck = {
  url: string;
  status: LinkCheckStatus;
  httpStatus?: number;
  finalUrl?: string;
  errorCode?: string;
};

export type ProjectFreshness = {
  activitySource: string;
  activitySourceLabel: string;
  activityBasis: string;
  headOid: string | null;
  lastChangeAt: string | null;
  status: FreshnessStatus;
  annualCommits: ActivityBucket[];
  archived: boolean | null;
  collectionStatus: 'measured' | 'unavailable';
  links: {
    repository: EvidenceLinkCheck;
    official: EvidenceLinkCheck;
    provenance?: EvidenceLinkCheck;
  };
};

export type FreshnessSnapshot = {
  generatedAt: string;
  years: number[];
  projects: Record<string, ProjectFreshness>;
};

export const freshnessSnapshot = freshnessData as FreshnessSnapshot;
export const projectFreshnessById: Readonly<
  Partial<Record<string, ProjectFreshness>>
> = freshnessSnapshot.projects;

export function getProjectFreshness(projectId: string) {
  const freshness = projectFreshnessById[projectId];
  if (!freshness)
    throw new Error(`Missing freshness observation for project ${projectId}`);
  return freshness;
}

export const freshnessLabels: Record<FreshnessStatus, string> = {
  fresh: 'Fresh',
  current: 'Current',
  quiet: 'Quiet',
  historical: 'Historical',
  unknown: 'Unknown',
};
