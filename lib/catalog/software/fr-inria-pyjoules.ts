import type { Project } from '../types';

export default {
  id: 'fr-inria-pyjoules',
  name: 'pyJoules',
  summary:
    'A Python toolkit for measuring host energy consumption during code execution, including Intel CPU/RAM and supported GPU devices.',
  sponsor: 'Inria SPIRALS project-team and Université de Lille',
  agencyIds: ['fr-inria', 'fr-university-lille'],
  geography:
    'Lille, Hauts-de-France, France (Inria Centre at University of Lille; SPIRALS)',
  jurisdiction: 'International',
  domain: 'Energy measurement & scientific computing',
  openSourceYear: 2019,
  license: 'MIT',
  repository: 'https://github.com/powerapi-ng/pyJoules',
  officialUrl: 'https://pyjoules.readthedocs.io/en/stable/index.html',
  evidenceUrl: 'https://radar.inria.fr/report/2025/spirals/index.html',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'france',
    'inria',
    'university of lille',
    'energy measurement',
    'python',
  ],
} satisfies Project;
