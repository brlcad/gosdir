import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-neuvector',
  name: 'HMCTS NeuVector Integration Helm Chart',
  summary:
    'A Helm chart integrating NeuVector with Azure Key Vault, hooks, and policy configuration.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2019,
  license:
    'MIT (integration chart repository source only; upstream software excluded)',
  repository: 'https://github.com/hmcts/chart-neuvector',
  officialUrl: 'https://github.com/hmcts/chart-neuvector',
  evidenceUrl: 'https://github.com/hmcts/chart-neuvector/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'helm',
    'kubernetes',
    'neuvector',
    'azure key vault',
  ],
} satisfies Project;
