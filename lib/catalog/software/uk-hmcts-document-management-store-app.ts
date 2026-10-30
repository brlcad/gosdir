import type { Project } from '../types';

export default {
  id: 'uk-hmcts-document-management-store-app',
  name: 'Document Management Store',
  summary:
    'HMCTS production backend service for storing and retrieving case documents.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England and Wales; exact deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2017,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/document-management-store-app',
  officialUrl:
    'https://hmcts.github.io/cnp-api-docs/swagger.html?url=https://hmcts.github.io/cnp-api-docs/specs/document-management-store-app.json',
  evidenceUrl:
    'https://github.com/hmcts/document-management-store-app/blob/master/catalog-info.yaml',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'document management', 'api', 'justice'],
} satisfies Project;
