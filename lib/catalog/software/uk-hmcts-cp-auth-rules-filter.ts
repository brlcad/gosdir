import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cp-auth-rules-filter',
  name: 'HMCTS Common Platform Auth Rules Filter',
  summary: 'HMCTS Common Platform Spring Boot authentication-rules filter.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2026,
  license:
    'MIT (auth-rules-filter repository source only; package/version scope caveat above)',
  repository: 'https://github.com/hmcts/cp-auth-rules-filter',
  officialUrl: 'https://github.com/hmcts/cp-auth-rules-filter',
  evidenceUrl:
    'https://github.com/hmcts/cp-auth-rules-filter/blob/v1.0.10/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'common platform',
    'spring boot',
    'authentication',
    'security',
    'java library',
  ],
} satisfies Project;
