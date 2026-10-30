import type { Project } from '../types';

export default {
  id: 'uk-hmcts-dtspo-daily-monitoring',
  name: 'DTS Platform Operations Daily Monitoring',
  summary:
    'HMCTS Digital Technology Services Platform Operations tool that monitors Azure DevOps pipelines and GitHub workflows and sends status notifications to Slack.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom; exact deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2023,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/dtspo-daily-monitoring',
  officialUrl: 'https://github.com/hmcts/dtspo-daily-monitoring',
  evidenceUrl:
    'https://github.com/hmcts/dtspo-daily-monitoring/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'platform operations',
    'monitoring',
    'slack',
    'devops',
  ],
} satisfies Project;
