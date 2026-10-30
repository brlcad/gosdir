import type { Project } from '../types';

export default {
  id: 'fr-geonature-habref-api',
  name: 'Habref API Module',
  summary:
    'A reusable Flask API for querying the French Habref habitat reference system.',
  sponsor:
    'French National Parks / GeoNature maintainers; INPN/MNHN supplies upstream Habref reference data, not necessarily software sponsorship.',
  agencyIds: ['fr-pnx-si'],
  geography:
    'France; national habitat reference system for biodiversity implementations',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2019,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/Habref-api-module',
  officialUrl: 'https://docs.geonature.fr/admin-manual.html',
  evidenceUrl: 'https://docs.geonature.fr/CHANGELOG.html',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'Habref', 'habitats', 'GPL-3.0'],
} satisfies Project;
