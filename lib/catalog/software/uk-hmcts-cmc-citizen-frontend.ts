import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cmc-citizen-frontend',
  name: 'Civil Money Claims Citizen Frontend',
  summary:
    'The citizen-facing frontend for HMCTS Online Civil Money Claims (Make a court claim for money), supporting online money claims and defences.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Business & government services',
  openSourceYear: 2017,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/cmc-citizen-frontend',
  officialUrl: 'https://www.gov.uk/make-court-claim-for-money',
  evidenceUrl:
    'https://github.com/hmcts/cmc-citizen-frontend/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'civil money claims',
    'online service',
    'frontend',
  ],
} satisfies Project;
