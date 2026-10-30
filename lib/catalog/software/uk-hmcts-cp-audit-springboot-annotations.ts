import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cp-audit-springboot-annotations',
  name: 'HMCTS Common Platform Audit Annotation Starter',
  summary:
    'Reusable HMCTS Common Platform Spring Boot audit-annotation starter.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2026,
  license:
    'MIT (audit annotation starter repository source only; dependencies and consumers excluded)',
  repository: 'https://github.com/hmcts/cp-audit-springboot-annotations',
  officialUrl: 'https://github.com/hmcts/cp-audit-springboot-annotations',
  evidenceUrl:
    'https://github.com/hmcts/cp-audit-springboot-annotations/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'common platform',
    'spring boot',
    'audit',
    'java library',
  ],
} satisfies Project;
