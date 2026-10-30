import type { Project } from '../types';

export default {
  id: 'fr-inria-projectivefriction',
  name: 'ProjectiveFriction',
  summary:
    'A C++ simulator for projective dynamics with dry-frictional contact.',
  sponsor:
    'Inria Project-Team ELAN, with the Laboratoire Jean Kuntzmann (Université Grenoble Alpes)',
  agencyIds: ['fr-inria'],
  geography:
    'Grenoble, Auvergne-Rhône-Alpes, France (Inria Centre at Université Grenoble Alpes / LJK)',
  jurisdiction: 'International',
  domain: 'Physics-based simulation & computational mechanics',
  openSourceYear: 2021,
  license: 'GNU GPL-3.0',
  repository: 'https://gitlab.inria.fr/elan-public-code/projectivefriction',
  officialUrl: 'https://gitlab.inria.fr/elan-public-code/projectivefriction',
  evidenceUrl: 'https://radar.inria.fr/report/2021/elan/uid0.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: [
    'france',
    'inria',
    'simulation',
    'friction',
    'computational-mechanics',
  ],
} satisfies Project;
