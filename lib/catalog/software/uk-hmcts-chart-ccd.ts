import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-ccd',
  name: 'HMCTS Core Case Data Helm Chart',
  summary: 'A Helm chart for deploying HMCTS Core Case Data components.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2018,
  license:
    'MIT (chart repository source only; runtime and dependencies excluded)',
  repository: 'https://github.com/hmcts/chart-ccd',
  officialUrl: 'https://github.com/hmcts/chart-ccd',
  evidenceUrl: 'https://github.com/hmcts/chart-ccd/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'helm', 'kubernetes', 'core case data'],
} satisfies Project;
