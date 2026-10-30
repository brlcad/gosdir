import type { Project } from '../types';

export default {
  id: 'geonature-zh-atlas',
  name: 'GeoNature-ZH-atlas',
  summary:
    'A public-facing web atlas for sharing territorial wetland-management information, distinct from the internal wetlands-entry module.',
  sponsor:
    'Parc naturel régional du Luberon, with DREAL PACA, Agence de l’eau, Région Sud, and CEN PACA funding partners',
  agencyIds: ['fr-pnr-luberon', 'fr-pnx-si'],
  geography: 'Provence-Alpes-Côte d’Azur, France',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2023,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/GeoNature-ZH-atlas',
  officialUrl: 'https://atlas-zones-humides.pnrsud.fr/',
  evidenceUrl: 'https://pnx-si.github.io/GeoNature-ZH-atlas/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'wetlands', 'biodiversity', 'atlas', 'GPL-3.0'],
} satisfies Project;
