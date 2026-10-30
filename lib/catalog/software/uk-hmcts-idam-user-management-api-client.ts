import type { Project } from '../types';

export default {
  id: 'uk-hmcts-idam-user-management-api-client',
  name: 'HMCTS IdAM User Management API Client',
  summary:
    'Reusable Java client for HMCTS IdAM V1 user-management endpoints, with Feign interfaces, models, and usage guidance.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Identity and Access Management',
  openSourceYear: 2024,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/idam-user-management-api-client',
  officialUrl: 'https://github.com/hmcts/idam-user-management-api-client',
  evidenceUrl:
    'https://pkgs.dev.azure.com/hmcts/Artifacts/_packaging/hmcts-lib/maven/v1/com/github/hmcts/idam-user-management-api-client/maven-metadata.xml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'identity',
    'api client',
    'java',
    'library',
  ],
} satisfies Project;
