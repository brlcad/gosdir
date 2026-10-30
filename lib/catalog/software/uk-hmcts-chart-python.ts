import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-python',
  name: 'HMCTS Python Microservice Helm Chart',
  summary: 'A Helm chart for deploying Python microservices.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2026,
  license:
    'MIT (chart repository source only; external Azure OCI dependencies excluded)',
  repository: 'https://github.com/hmcts/chart-python',
  officialUrl: 'https://github.com/hmcts/chart-python',
  evidenceUrl: 'https://github.com/hmcts/chart-python/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'helm',
    'kubernetes',
    'python',
    'microservices',
  ],
} satisfies Project;
