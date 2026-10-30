import type { Project } from '../types';

export default {
  id: 'uk-hmcts-ccd-data-store-api',
  name: 'Core Case Data Store API',
  summary:
    'HMCTS Core Case Data Store API for storing and searching case records and providing workbaskets.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2018,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/ccd-data-store-api',
  officialUrl: 'https://hmcts.github.io/ccd-data-store-api/api/latest/',
  evidenceUrl:
    'https://github.com/hmcts/ccd-data-store-api/blob/master/catalog-info.yaml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'core case data',
    'case records',
    'api',
    'justice',
  ],
} satisfies Project;
