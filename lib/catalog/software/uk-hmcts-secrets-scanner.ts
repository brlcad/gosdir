import type { Project } from '../types';

export default {
  id: 'uk-hmcts-secrets-scanner',
  name: 'HMCTS Secrets Scanner GitHub Action',
  summary:
    'Standalone composite GitHub Action combining Gitleaks and TruffleHog.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (HMCTS developer tooling; no narrower service jurisdiction)',
  jurisdiction: 'International',
  domain: 'Developer tools & security',
  openSourceYear: 2025,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/secrets-scanner',
  officialUrl: 'https://github.com/hmcts/secrets-scanner/blob/main/README.md',
  evidenceUrl: 'https://github.com/hmcts/secrets-scanner/releases/tag/v1.3.1',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'github actions',
    'secrets scanning',
    'security',
  ],
} satisfies Project;
