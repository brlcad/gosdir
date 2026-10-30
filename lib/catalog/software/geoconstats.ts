import type { Project } from '../types';

export default {
  id: 'geoconstats',
  name: 'GeoConstats',
  summary:
    'A Parc national des Écrins web application for recording and mapping livestock-predation reports.',
  sponsor:
    'Parc national des Écrins, a French public establishment under the environment ministry',
  agencyIds: ['fr-parc-national-ecrins'],
  geography: 'Écrins massif, France (Hautes-Alpes and Isère)',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2020,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnEcrins/GeoConstats',
  officialUrl: 'https://github.com/PnEcrins/GeoConstats',
  evidenceUrl:
    'https://data.ecrins-parcnational.fr/documents/stages/2020-08-rapport-stage-Raphael-Bres-SI-BDD-PNE.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'Écrins', 'environment', 'biodiversity', 'GPL-3.0'],
} satisfies Project;
