import type { Project } from '../types';

export default {
  id: 'uk-hmcts-em-hrs-api',
  name: 'Hearing Recording Storage API',
  summary:
    'HMCTS Hearing Recording Storage service API for storing and serving hearing recordings.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England and Wales; exact deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2021,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/em-hrs-api',
  officialUrl: 'https://github.com/hmcts/em-hrs-api',
  evidenceUrl: 'https://github.com/hmcts/em-hrs-api/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'hearing recordings', 'api', 'justice'],
} satisfies Project;
