import type { Project } from '../types';

export default {
  id: 'uk-ukho-exchange-set-service',
  name: 'ADDS Exchange Set Service',
  summary:
    'An API and backend for generating custom S-63 electronic navigational chart exchange sets for distributors.',
  sponsor:
    'UK Hydrographic Office (UKHO), an executive agency sponsored by the Ministry of Defence',
  agencyIds: ['uk-ukho'],
  geography: 'United Kingdom; UKHO’s international maritime-data customers',
  jurisdiction: 'International',
  domain: 'Maritime and geospatial data services',
  openSourceYear: 2021,
  license: 'MIT',
  repository: 'https://github.com/UKHO/exchange-set-service',
  officialUrl: 'https://fss.admiralty.co.uk/',
  evidenceUrl:
    'https://assets.admiralty.co.uk/public/documents/2025-04/AVCS-user-guide.pdf?VersionId=m9aY2LOgdqRajxLaq_L20iRAcmsBq3OO',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHO', 'Hydrography', 'Maritime data'],
} satisfies Project;
