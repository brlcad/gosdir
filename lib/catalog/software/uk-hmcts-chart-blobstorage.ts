import type { Project } from '../types';

export default {
  id: 'uk-hmcts-chart-blobstorage',
  name: 'HMCTS Azure Blob Storage Helm Chart',
  summary:
    'A Helm chart for provisioning Azure Blob Storage resources through Azure Service Operator.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2019,
  license:
    'MIT (chart repository source only; dependencies and upstream services excluded)',
  repository: 'https://github.com/hmcts/chart-blobstorage',
  officialUrl: 'https://github.com/hmcts/chart-blobstorage',
  evidenceUrl:
    'https://github.com/hmcts/chart-blobstorage/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'helm', 'kubernetes', 'azure blob storage'],
} satisfies Project;
