import type { Project } from '../types';

export default {
  id: 'uk-hmcts-idam-legacy-auth-support',
  name: 'HMCTS IDAM Legacy Auth Support',
  summary:
    'Java/Spring library for HMCTS CFT services that adds Feign support for legacy IDAM password grants and S2S leases.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Identity and Access Management',
  openSourceYear: 2024,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/idam-legacy-auth-support',
  officialUrl: 'https://github.com/hmcts/idam-legacy-auth-support',
  evidenceUrl:
    'https://pkgs.dev.azure.com/hmcts/Artifacts/_packaging/hmcts-lib/maven/v1/com/github/hmcts/idam-legacy-auth-support/maven-metadata.xml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'identity',
    'java',
    'api client',
    'library',
  ],
} satisfies Project;
