import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cnp-jenkins-library',
  name: 'HMCTS CNP Shared Jenkins Library',
  summary:
    'Reusable HMCTS Cloud Native Platform Jenkins library for application, infrastructure, nightly, test and release pipelines.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2018,
  license: 'MIT (shared library repository source only)',
  repository: 'https://github.com/hmcts/cnp-jenkins-library',
  officialUrl: 'https://github.com/hmcts/cnp-jenkins-library',
  evidenceUrl:
    'https://github.com/hmcts/cnp-jenkins-library/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'cloud native platform',
    'jenkins',
    'ci/cd',
    'pipelines',
  ],
} satisfies Project;
