import type { Project } from '../types';

export default {
  id: 'fr-geonature-suivi-flore-territoire',
  name: 'GeoNature Suivi Flore Territoire',
  summary:
    'A module for repeated territory-level botanical monitoring within GeoNature and the Flore Sentinelle network.',
  sponsor:
    'Conservatoire botanique national alpin (protocol lead), with Parc national des Écrins as development partner.',
  agencyIds: ['fr-cbna', 'fr-parc-national-ecrins', 'fr-pnx-si'],
  geography: 'French Alps and the Flore Sentinelle partner network, France',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2018,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/gn_module_suivi_flore_territoire',
  officialUrl: 'https://floresentinelle.fr/',
  evidenceUrl:
    'https://geonature.fr/documents/2018-09-Nguyen-Khanh-Chau-Rapport-stage-M2DCISS.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'flora', 'biodiversity monitoring', 'GPL-3.0'],
} satisfies Project;
