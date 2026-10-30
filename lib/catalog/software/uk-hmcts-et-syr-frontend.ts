import type { Project } from '../types';

export default {
  id: 'uk-hmcts-et-syr-frontend',
  name: 'Submit Your Response (Employment Tribunals) Frontend',
  summary:
    'HMCTS public frontend for Submit Your Response (ET-SYR/ET3), allowing respondents to answer Employment Tribunal claims.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England, Wales, and Scotland (Employment Tribunal response service)',
  jurisdiction: 'International',
  domain: 'Business & government services',
  openSourceYear: 2024,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/et-syr-frontend',
  officialUrl:
    'https://www.respond-employment-tribunals.service.gov.uk/?lng=en',
  evidenceUrl:
    'https://www.respond-employment-tribunals.service.gov.uk/?lng=en',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'employment tribunals',
    'online service',
    'frontend',
  ],
} satisfies Project;
