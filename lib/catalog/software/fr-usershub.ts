import type { Project } from '../types';

export default {
  id: 'fr-usershub',
  name: 'UsersHub',
  summary:
    'A French national-park web application for centrally managing users, groups, organizations, and access rights across biodiversity web applications.',
  sponsor:
    'Parc national des Écrins; maintained and distributed within the PnX-SI French national-park information-systems network.',
  agencyIds: ['fr-parc-national-ecrins', 'fr-pnx-si'],
  geography:
    'Écrins National Park, French Alps; distributed within the French national-park biodiversity information-system network',
  jurisdiction: 'International',
  domain: 'Identity and access management; biodiversity information systems',
  openSourceYear: 2015,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/UsersHub',
  officialUrl: 'https://geonature.fr/',
  evidenceUrl: 'https://geonature.fr/documents/2018-10-si-pne.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'France',
    'national parks',
    'biodiversity',
    'identity management',
    'GPL-3.0',
  ],
} satisfies Project;
