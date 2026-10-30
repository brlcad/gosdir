import type { Project } from '../types';

export default {
  id: 'uk-hmcts-payments-java-client',
  name: 'HMCTS Payments Java Client',
  summary:
    'A Java Feign client for integrating applications with HMCTS Payments.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Payments & financial services',
  openSourceYear: 2019,
  license: 'MIT (client source in this repository only)',
  repository: 'https://github.com/hmcts/payments-java-client',
  officialUrl: 'https://github.com/hmcts/payments-java-client',
  evidenceUrl: 'https://github.com/hmcts/payments-java-client/releases',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'payments',
    'java',
    'api client',
    'library',
  ],
} satisfies Project;
