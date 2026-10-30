import type { Project } from '../types';

export default {
  id: 'fr-geonature-odk2gn',
  name: 'ODK2GN',
  summary:
    'An integration tool that synchronizes field data from ODK Central into GeoNature Monitoring.',
  sponsor:
    'French National Parks (InterParc) and French Biodiversity Office (Office français de la biodiversité, OFB).',
  agencyIds: ['fr-pnx-si', 'fr-ofb'],
  geography:
    'France; field-data collection and biodiversity monitoring workflows',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2022,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/odk2gn',
  officialUrl:
    'https://geonature.fr/documents/2022-12-PNX-OFB-Workshop-ODK.pdf',
  evidenceUrl:
    'https://geonature.fr/documents/rencontres/2024/presentations/06a-monitoring-presentation.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'ODK Central', 'field data', 'GPL-3.0'],
} satisfies Project;
