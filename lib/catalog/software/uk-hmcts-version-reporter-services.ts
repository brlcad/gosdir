import type { Project } from '../types';

export default {
  id: 'uk-hmcts-version-reporter-services',
  name: 'HMCTS Version Reporter Services',
  summary: 'A suite of services for reporting HMCTS software versions.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom (HMCTS IT operations)',
  jurisdiction: 'International',
  domain: 'IT operations & observability',
  openSourceYear: 2023,
  license: 'GPL-3.0-only (source in this repository only)',
  repository: 'https://github.com/hmcts/version-reporter-services',
  officialUrl: 'https://github.com/hmcts/version-reporter-services',
  evidenceUrl:
    'https://github.com/hmcts/version-reporter-services/blob/master/azure-pipelines.yaml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'version reporting',
    'operations',
    'azure pipelines',
  ],
} satisfies Project;
