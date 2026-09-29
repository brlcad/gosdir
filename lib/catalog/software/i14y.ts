import type { Project } from '../types';

export default {
  id: 'i14y',
  name: 'I14Y',
  summary:
    'Switzerland’s national metadata catalogue for public-sector datasets, APIs, and government services.',
  sponsor:
    'Swiss Federal Statistical Office, with the Federal Office of Information Technology',
  agencyIds: ['ch-fso'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Data interoperability',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/metadata-swiss/I14Y',
  officialUrl: 'https://www.i14y.admin.ch/',
  evidenceUrl: 'https://www.opensource.admin.ch/en/softwares/5w7cen/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'metadata', 'interoperability', 'open data'],
} satisfies Project;
