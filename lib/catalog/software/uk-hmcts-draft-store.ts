import type { Project } from '../types';

export default {
  id: 'uk-hmcts-draft-store',
  name: 'Draft Store',
  summary:
    'An API service for saving and resuming drafts in HMCTS Reform applications.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England and Wales; exact deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2017,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/draft-store',
  officialUrl: 'https://github.com/hmcts/draft-store',
  evidenceUrl: 'https://github.com/hmcts/draft-store/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'draft storage', 'api', 'justice'],
} satisfies Project;
