import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cnp-api-docs',
  name: 'HMCTS Cloud Native Platform API Documentation Registry',
  summary:
    'HMCTS CNP OpenAPI registry and API documentation/architecture portal.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2017,
  license:
    'MIT (API registry repository source only; documented APIs excluded)',
  repository: 'https://github.com/hmcts/cnp-api-docs',
  officialUrl: 'https://hmcts.github.io/cnp-api-docs/',
  evidenceUrl: 'https://github.com/hmcts/cnp-api-docs/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'cloud native platform',
    'openapi',
    'api documentation',
  ],
} satisfies Project;
