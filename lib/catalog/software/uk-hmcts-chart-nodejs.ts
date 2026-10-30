import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-nodejs',
  name: 'HMCTS Node.js Microservice Helm Chart',
  summary: 'A Helm chart for deploying Node.js applications and microservices.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2018,
  license:
    'MIT (chart repository source only; dependencies and applications excluded)',
  repository: 'https://github.com/hmcts/chart-nodejs',
  officialUrl: 'https://github.com/hmcts/chart-nodejs',
  evidenceUrl: 'https://github.com/hmcts/chart-nodejs/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'helm',
    'kubernetes',
    'node.js',
    'microservices',
  ],
} satisfies Project;
