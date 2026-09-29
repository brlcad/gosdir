import type { Project } from '../types';

export default {
  id: 'codes-postaux',
  name: 'codes-postaux',
  summary:
    'A reusable JavaScript library for French postal-code files and data, distributed by the Base Adresse Nationale project and used by its production platform.',
  sponsor: 'Base Adresse Nationale (DINUM, IGN, and ANCT; originally SGMAP)',
  agencyIds: ['fr-dinum', 'fr-ign', 'fr-anct'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2014,
  license: 'MIT',
  repository: 'https://github.com/BaseAdresseNationale/codes-postaux',
  officialUrl: 'https://github.com/BaseAdresseNationale/codes-postaux',
  evidenceUrl: 'https://github.com/BaseAdresseNationale/ban-plateforme/blob/master/package.json',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['france', 'postal codes', 'addresses', 'javascript', 'ban'],
} satisfies Project;
