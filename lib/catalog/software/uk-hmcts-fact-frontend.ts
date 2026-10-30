import type { Project } from '../types';

export default {
  id: 'uk-hmcts-fact-frontend',
  name: 'Find a Court or Tribunal Frontend',
  summary:
    'HMCTS public Find a Court or Tribunal (FaCT) website/frontend, helping users locate courts and tribunals and view venue information.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England and Wales; limited Scotland coverage for immigration, benefit and employment-claims appeals',
  jurisdiction: 'International',
  domain: 'Business & government services',
  openSourceYear: 2020,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/fact-frontend',
  officialUrl: 'https://www.find-court-tribunal.service.gov.uk/?lng=en',
  evidenceUrl: 'https://www.find-court-tribunal.service.gov.uk/?lng=en',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'court finder',
    'tribunals',
    'online service',
    'frontend',
  ],
} satisfies Project;
