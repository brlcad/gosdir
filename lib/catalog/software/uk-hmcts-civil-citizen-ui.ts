import type { Project } from '../types';

export default {
  id: 'uk-hmcts-civil-citizen-ui',
  name: 'Civil Citizen UI (CCUI)',
  summary: 'The citizen-facing web application for HMCTS civil court services.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Business & government services',
  openSourceYear: 2021,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/civil-citizen-ui',
  officialUrl: 'https://github.com/hmcts/civil-citizen-ui',
  evidenceUrl:
    'https://github.com/hmcts/civil-citizen-ui/blob/master/catalog-info.yaml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'civil courts',
    'citizen service',
    'frontend',
  ],
} satisfies Project;
