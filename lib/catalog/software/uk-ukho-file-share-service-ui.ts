import type { Project } from '../types';

export default {
  id: 'uk-ukho-file-share-service-ui',
  name: 'UKHO File Share Service web UI',
  summary:
    'The Angular web frontend for the UK Hydrographic Office File Share Service.',
  sponsor:
    'UK Hydrographic Office (UKHO), an executive agency sponsored by the Ministry of Defence',
  agencyIds: ['uk-ukho'],
  geography: 'United Kingdom; service supports UKHO’s international customers',
  jurisdiction: 'International',
  domain: 'Maritime data distribution',
  openSourceYear: 2021,
  license: 'MIT',
  repository: 'https://github.com/UKHO/file-share-service-ui',
  officialUrl: 'https://fss.admiralty.co.uk/',
  evidenceUrl: 'https://www.admiralty.co.uk/share-data/ports-and-harbours',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHO', 'Angular', 'Maritime data'],
} satisfies Project;
