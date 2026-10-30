import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-job',
  name: 'HMCTS Kubernetes Job and CronJob Helm Chart',
  summary: 'A Helm chart for Kubernetes Job and CronJob workloads.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2019,
  license:
    'MIT (chart repository source only; applications and dependencies excluded)',
  repository: 'https://github.com/hmcts/chart-job',
  officialUrl: 'https://github.com/hmcts/chart-job',
  evidenceUrl: 'https://github.com/hmcts/chart-job/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'helm', 'kubernetes', 'jobs', 'cronjobs'],
} satisfies Project;
