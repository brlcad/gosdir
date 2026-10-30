import type { Project } from '../types';

export default {
  id: 'fr-geonature-nomenclature-api',
  name: 'Nomenclature API Module',
  summary:
    'A reusable Flask service for centralized biodiversity nomenclature and reference lists.',
  sponsor:
    'French National Parks / GeoNature maintainers; INPN is an upstream source for some reference values.',
  agencyIds: ['fr-pnx-si'],
  geography:
    'France; reusable across GeoNature and other biodiversity information systems',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2017,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/Nomenclature-api-module',
  officialUrl: 'https://docs.geonature.fr/admin-manual.html',
  evidenceUrl: 'https://docs.geonature.fr/CHANGELOG.html',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'nomenclature', 'biodiversity data', 'GPL-3.0'],
} satisfies Project;
