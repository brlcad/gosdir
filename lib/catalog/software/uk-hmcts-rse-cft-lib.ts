import type { Project } from '../types';

export default {
  id: 'uk-hmcts-rse-cft-lib',
  name: 'HMCTS Reform CFT Common Component SDK',
  summary:
    'A component SDK for HMCTS Reform Civil, Family and Tribunals applications.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (HMCTS platform tooling; no separate service jurisdiction)',
  jurisdiction: 'International',
  domain: 'Software development & DevOps',
  openSourceYear: 2022,
  license: 'MIT (this SDK repository only)',
  repository: 'https://github.com/hmcts/rse-cft-lib',
  officialUrl: 'https://github.com/hmcts/rse-cft-lib',
  evidenceUrl:
    'https://github.com/hmcts/fpl-ccd-configuration/blob/f5528042a0436c306ab67a6dded9f6030e7063ab/service/build.gradle',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'cft', 'java', 'sdk', 'library'],
} satisfies Project;
