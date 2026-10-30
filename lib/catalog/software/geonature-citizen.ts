import type { Project } from '../types';

export default {
  id: 'geonature-citizen',
  name: 'GeoNature-citizen',
  summary:
    'A configurable public portal for citizen-science biodiversity data collection, distinct from the GeoNature platform and its modules.',
  sponsor:
    'Valence Romans Agglomération and French national-park partners; carried by PnX-SI with Parc national des Écrins technical support',
  agencyIds: [
    'fr-valence-romans-agglo',
    'fr-parc-national-mercantour',
    'fr-parc-national-ecrins',
    'fr-pnx-si',
  ],
  geography: 'France, with documented deployments in Belgium and Switzerland',
  jurisdiction: 'International',
  domain: 'Environmental management and citizen science',
  openSourceYear: 2018,
  license: 'AGPL-3.0',
  repository: 'https://github.com/PnX-SI/GeoNature-citizen',
  officialUrl: 'https://democitizen.geonature.fr/',
  evidenceUrl: 'https://geonature.fr/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'citizen science', 'biodiversity', 'AGPL-3.0'],
} satisfies Project;
