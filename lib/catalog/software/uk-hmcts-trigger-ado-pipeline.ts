import type { Project } from '../types';

export default {
  id: 'uk-hmcts-trigger-ado-pipeline',
  name: 'HMCTS Azure DevOps Pipeline Trigger GitHub Action',
  summary: 'Reusable GitHub Action for triggering Azure DevOps pipelines.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom (HMCTS developer tooling)',
  jurisdiction: 'International',
  domain: 'Developer tools & automation',
  openSourceYear: 2025,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/trigger-ado-pipeline',
  officialUrl: 'https://github.com/hmcts/trigger-ado-pipeline',
  evidenceUrl:
    'https://github.com/hmcts/trigger-ado-pipeline/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'github actions',
    'azure devops',
    'pipeline automation',
  ],
} satisfies Project;
