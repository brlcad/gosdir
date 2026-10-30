import type { Project } from '../types';

export default {
  id: 'uk-hmcts-et-sya-frontend',
  name: 'Submit Your Appeal (Employment Tribunals) Frontend',
  summary:
    'HMCTS public frontend for Submit Your Appeal (SYA), the Employment Tribunal claim service.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'England, Wales, and Scotland (Employment Tribunal claim service)',
  jurisdiction: 'International',
  domain: 'Business & government services',
  openSourceYear: 2022,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/et-sya-frontend',
  officialUrl: 'https://www.claim-employment-tribunals.service.gov.uk/',
  evidenceUrl: 'https://www.claim-employment-tribunals.service.gov.uk/',
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
