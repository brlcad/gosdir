import type { Project } from '../types';

export default {
  id: 'fr-geonature-suivi-habitat-territoire',
  name: 'GeoNature Suivi Habitat Territoire',
  summary:
    'A GeoNature module for territory-scale habitat monitoring used in the Flore Sentinelle partner network.',
  sponsor:
    'Conservatoire botanique national alpin (pilot), with Parc national des Écrins as GeoNature and IT partner.',
  agencyIds: ['fr-cbna', 'fr-parc-national-ecrins', 'fr-pnx-si'],
  geography: 'French Alps and Flore Sentinelle partner network, France',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2022,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/gn_module_suivi_habitat_territoire',
  officialUrl: 'https://floresentinelle.fr/',
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
