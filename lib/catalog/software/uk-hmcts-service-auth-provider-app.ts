import type { Project } from '../types';

export default {
  id: 'uk-hmcts-service-auth-provider-app',
  name: 'HMCTS Service-to-Service Authentication Provider',
  summary:
    'A service-to-service authentication provider for HMCTS applications.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (HMCTS services; exact deployment footprint not established)',
  jurisdiction: 'International',
  domain: 'Security & identity',
  openSourceYear: 2018,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/service-auth-provider-app',
  officialUrl:
    'https://github.com/hmcts/service-auth-provider-app/blob/master/README.md',
  evidenceUrl:
    'https://github.com/hmcts/service-auth-provider-app/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'authentication',
    'identity',
    'service-to-service',
  ],
} satisfies Project;
