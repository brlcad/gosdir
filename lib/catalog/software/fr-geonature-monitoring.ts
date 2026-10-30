import type { Project } from '../types';

export default {
  id: 'fr-geonature-monitoring',
  name: 'GeoNature Monitoring',
  summary:
    'A reusable GeoNature module for recording biodiversity monitoring sites, visits, and observations.',
  sponsor:
    'French National Parks, with Parc national des Écrins and Parc national des Cévennes as documented developers and maintainers.',
  agencyIds: [
    'fr-parc-national-ecrins',
    'fr-parc-national-cevennes',
    'fr-pnx-si',
  ],
  geography:
    'France; reusable across public natural-area agencies and national parks',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2019,
  license: 'AGPL-3.0',
  repository: 'https://github.com/PnX-SI/gn_module_monitoring',
  officialUrl: 'https://geonature.fr/',
  evidenceUrl:
    'https://geonature.fr/documents/cctp/2021-06-DEPOBIO-CC-suivi-chiro-eolien.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'biodiversity', 'monitoring', 'AGPL-3.0'],
} satisfies Project;
