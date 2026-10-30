import type { Project } from '../types';

export default {
  id: 'uk-hmcts-rse-idam-simulator',
  name: 'HMCTS IdAM API Simulator',
  summary:
    'A development and testing simulator for the HMCTS identity and access management API.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (HMCTS development tooling; no separate service jurisdiction)',
  jurisdiction: 'International',
  domain: 'Identity & access management',
  openSourceYear: 2020,
  license: 'MIT (simulator source in this repository only)',
  repository: 'https://github.com/hmcts/rse-idam-simulator',
  officialUrl: 'https://github.com/hmcts/rse-idam-simulator',
  evidenceUrl:
    'https://github.com/hmcts/ccd-docker/blob/d29edd5ea3094ac515ba9830ccf5e789c5aa131a/compose/idam-sim.yml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'identity',
    'api simulator',
    'development tool',
  ],
} satisfies Project;
