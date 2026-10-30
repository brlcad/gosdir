import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cnp-githubactions-library',
  name: 'HMCTS CNP GitHub Actions Library',
  summary:
    'Reusable GitHub Actions workflows and composite actions for HMCTS Cloud Native Platform repositories.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2025,
  license: 'MIT (GitHub Actions library repository source only)',
  repository: 'https://github.com/hmcts/cnp-githubactions-library',
  officialUrl: 'https://github.com/hmcts/cnp-githubactions-library',
  evidenceUrl:
    'https://github.com/hmcts/hmcts.github.io/blob/a4e82c6c15e9f8fdd66d23eeaca2490cbea7262a/source/cloud-native-platform/shared-libraries/github-actions-library.html.md.erb',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'cloud native platform',
    'github actions',
    'ci/cd',
    'workflows',
  ],
} satisfies Project;
