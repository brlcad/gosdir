import type { Project } from '../types';

export default {
  id: 'uk-hmcts-java-logging',
  name: 'HMCTS Java Logging',
  summary:
    'A Java library providing common application logging configuration for HMCTS services.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2017,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/java-logging',
  officialUrl: 'https://github.com/hmcts/java-logging',
  evidenceUrl:
    'https://pkgs.dev.azure.com/hmcts/Artifacts/_packaging/hmcts-lib/maven/v1/com/github/hmcts/java-logging/logging/maven-metadata.xml',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'java', 'logging', 'developer tools'],
} satisfies Project;
