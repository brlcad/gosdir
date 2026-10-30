import type { Project } from '../types';

export default {
  id: 'uk-hmcts-em-hrs-ingestor',
  name: 'Hearing Recording Storage Ingestor',
  summary:
    'HMCTS component that retrieves Cloud Video Platform (CVP) Blobstore files, performs ingestion checks and submits recording files and metadata to the separate Hearing Recording Storage API.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England and Wales; exact deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2021,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/em-hrs-ingestor',
  officialUrl: 'https://github.com/hmcts/em-hrs-ingestor',
  evidenceUrl: 'https://github.com/hmcts/em-hrs-ingestor/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'hearing recordings',
    'ingestion',
    'justice',
  ],
} satisfies Project;
