import type { Project } from '../types';

export default {
  id: 'fr-geonature-suivi-habitat-station',
  name: 'GeoNature Suivi Habitat Station',
  summary:
    'A GeoNature module for monitoring habitat composition and change at survey stations.',
  sponsor:
    'Conservatoire botanique national alpin (pilot), with Parc national des Écrins as GeoNature and IT partner.',
  agencyIds: ['fr-cbna', 'fr-parc-national-ecrins', 'fr-pnx-si'],
  geography:
    'French Alps, France; intended for participating botanical-conservation and park partners',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2018,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/gn_module_monitoring_habitat_station',
  officialUrl: 'https://geonature.fr/',
  evidenceUrl:
    'https://geonature.fr/documents/2022-09-Cendrine-Hoarau--rapport-stage-M2-CBNA.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'France',
    'GeoNature',
    'habitat',
    'biodiversity monitoring',
    'GPL-3.0',
  ],
} satisfies Project;
