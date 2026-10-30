import type { Project } from '../types';

export default {
  id: 'rgalt',
  name: 'Regard d’Altitude (RGAlt)',
  summary:
    'A collaborative database and web service for recording noteworthy natural events in mountain environments.',
  sponsor:
    'PARN leads the project with Parc national des Écrins and SNGM as partners/originators; OSUG / Université Grenoble Alpes hosts the current portal',
  agencyIds: ['fr-parc-national-ecrins'],
  geography: 'Écrins massif and the French Alps',
  jurisdiction: 'International',
  domain: 'Environmental monitoring and risk management',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/PnEcrins/RGAlt',
  officialUrl: 'https://rgalt.osug.fr/',
  evidenceUrl: 'https://rgalt.osug.fr/a-propos/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'Alps', 'environment', 'mountain hazards', 'MIT'],
} satisfies Project;
