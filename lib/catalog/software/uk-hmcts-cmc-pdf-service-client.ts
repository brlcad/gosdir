import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cmc-pdf-service-client',
  name: 'Civil Money Claims PDF Service Java Client',
  summary:
    'Reusable HMCTS Java client for the separate Civil Money Claims PDF service.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2017,
  license:
    'MIT (client repository source only; PDF service and dependencies excluded)',
  repository: 'https://github.com/hmcts/cmc-pdf-service-client',
  officialUrl: 'https://github.com/hmcts/cmc-pdf-service-client',
  evidenceUrl:
    'https://github.com/hmcts/cmc-pdf-service-client/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'civil money claims',
    'java',
    'client library',
  ],
} satisfies Project;
