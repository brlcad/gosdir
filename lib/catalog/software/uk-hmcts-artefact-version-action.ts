import type { Project } from '../types';

export default {
  id: 'uk-hmcts-artefact-version-action',
  name: 'HMCTS Artefact Version Action',
  summary:
    'A GitHub Action for generating draft and release artifact versions for OpenAPI publication.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2025,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/artefact-version-action',
  officialUrl: 'https://github.com/hmcts/artefact-version-action',
  evidenceUrl:
    'https://github.com/hmcts/artefact-version-action/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'github actions',
    'release automation',
    'openapi',
  ],
} satisfies Project;
