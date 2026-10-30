import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-pact-broker',
  name: 'HMCTS Pact Broker Helm Deployment Chart',
  summary: 'A Helm chart for deploying Pact Broker.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2018,
  license:
    'MIT (deployment chart repository source only; Pact Broker upstream excluded)',
  repository: 'https://github.com/hmcts/chart-pact-broker',
  officialUrl: 'https://github.com/hmcts/chart-pact-broker',
  evidenceUrl:
    'https://github.com/hmcts/chart-pact-broker/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'helm',
    'kubernetes',
    'pact broker',
    'deployment',
  ],
} satisfies Project;
