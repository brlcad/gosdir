import type { Project } from '../types';

export default {
  id: 'bilan-stationnel-flore',
  name: 'Bilan Stationnel Flore',
  summary:
    'A specialized botanical-monitoring workflow, formerly GeoNature Flore prioritaire, for surveying priority plant species and mapping their presence areas.',
  sponsor:
    'Parc national des Écrins and Conservatoire botanique national alpin, within the Flore Sentinelle network',
  agencyIds: ['fr-parc-national-ecrins', 'fr-cbna'],
  geography: 'French Alps and Flore Sentinelle partner territories',
  jurisdiction: 'International',
  domain: 'Environmental management and botanical conservation',
  openSourceYear: 2018,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/gn_module_flore_prioritaire',
  officialUrl: 'https://github.com/PnX-SI/gn_module_flore_prioritaire',
  evidenceUrl:
    'https://geonature.fr/documents/2022-09-Cendrine-Hoarau--rapport-stage-M2-CBNA.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'botany', 'conservation', 'scientific research', 'GPL-3.0'],
} satisfies Project;
