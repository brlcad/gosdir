import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cookie-manager',
  name: 'HMCTS Cookie Manager',
  summary: 'HMCTS JavaScript cookie-consent library for the GDS Cookie Banner.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2021,
  license:
    'MIT (Cookie Manager repository source only; consuming sites and GDS Cookie Banner excluded)',
  repository: 'https://github.com/hmcts/cookie-manager',
  officialUrl: 'https://hmcts.github.io/cookie-manager/',
  evidenceUrl: 'https://github.com/hmcts/cookie-manager/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'javascript',
    'cookie consent',
    'gds cookie banner',
    'web components',
  ],
} satisfies Project;
