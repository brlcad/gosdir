import type { Project } from '../types';

export default {
  id: 'uk-hmcts-idam-oidc-auth-support',
  name: 'HMCTS IdAM OIDC Auth Support',
  summary:
    'Java/Spring library for HMCTS CFT service-to-service OpenID client-credential calls.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Identity and Access Management',
  openSourceYear: 2024,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/idam-oidc-auth-support',
  officialUrl: 'https://github.com/hmcts/idam-oidc-auth-support',
  evidenceUrl:
    'https://pkgs.dev.azure.com/hmcts/Artifacts/_packaging/hmcts-lib/maven/v1/com/github/hmcts/idam-oidc-auth-support/maven-metadata.xml',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'identity', 'oidc', 'java', 'library'],
} satisfies Project;
