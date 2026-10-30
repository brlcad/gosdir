import type { Project } from '../types';

export default {
  id: 'uk-hmcts-wa-chart',
  name: 'HMCTS Work Allocation Umbrella Helm Chart',
  summary:
    'An umbrella Helm chart for deploying HMCTS Work Allocation components.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom (HMCTS Work Allocation)',
  jurisdiction: 'International',
  domain: 'Case management & cloud infrastructure',
  openSourceYear: 2023,
  license: 'MIT (chart source in this repository only)',
  repository: 'https://github.com/hmcts/wa-chart',
  officialUrl: 'https://github.com/hmcts/wa-chart',
  evidenceUrl: 'https://github.com/hmcts/wa-chart/releases/tag/1.1.2',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'work allocation', 'helm', 'kubernetes'],
} satisfies Project;
