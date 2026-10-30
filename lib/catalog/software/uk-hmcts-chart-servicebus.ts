import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-servicebus',
  name: 'HMCTS Azure Service Bus Helm Chart',
  summary: 'A Helm chart for Azure Service Bus integration.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2018,
  license:
    'MIT (chart repository source only; Azure service and dependencies excluded)',
  repository: 'https://github.com/hmcts/chart-servicebus',
  officialUrl: 'https://github.com/hmcts/chart-servicebus',
  evidenceUrl:
    'https://github.com/hmcts/chart-servicebus/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'helm',
    'kubernetes',
    'service bus',
    'azure',
  ],
} satisfies Project;
