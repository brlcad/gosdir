import type { Project } from '../types';

export default {
  id: 'fr-geonature-zones-humides-module',
  name: 'GeoNature Zones Humides',
  summary:
    'A GeoNature module for wetland inventory, evaluation, and monitoring, distinct from the public-facing GeoNature-ZH atlas.',
  sponsor:
    'Parc naturel régional du Luberon / SIT PNR PACA (commissioner), with Parc national des Écrins technical support and regional/national public partners.',
  agencyIds: ['fr-pnr-luberon', 'fr-parc-national-ecrins', 'fr-pnx-si'],
  geography:
    'Provence-Alpes-Côte d’Azur, France; publicly demonstrated regional deployment at zones-humides.pnrsud.fr',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2022,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/gn_module_ZH',
  officialUrl: 'https://zones-humides.pnrsud.fr/map/',
  evidenceUrl:
    'https://geonature.fr/documents/rencontres/2024/posters/Poster-ZH-SIT-PNR-PACA.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'wetlands', 'biodiversity', 'GPL-3.0'],
} satisfies Project;
