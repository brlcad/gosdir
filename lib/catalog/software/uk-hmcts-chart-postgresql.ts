import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-postgresql',
  name: 'HMCTS Azure PostgreSQL Helm Chart',
  summary: 'A Helm chart for Azure Database for PostgreSQL Flexible Server.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2023,
  license:
    'MIT (chart repository source only; external OCI dependencies excluded)',
  repository: 'https://github.com/hmcts/chart-postgresql',
  officialUrl: 'https://github.com/hmcts/chart-postgresql',
  evidenceUrl:
    'https://github.com/hmcts/chart-postgresql/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'helm',
    'kubernetes',
    'postgresql',
    'azure',
  ],
} satisfies Project;
