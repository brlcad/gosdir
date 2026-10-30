import type { Project } from '../types';

export default {
  id: 'fr-inria-pyrapl',
  name: 'pyRAPL',
  summary:
    'A Python library for measuring host energy consumption while code executes using Intel RAPL.',
  sponsor: 'Inria SPIRALS project-team and Université de Lille',
  agencyIds: ['fr-inria', 'fr-university-lille'],
  geography:
    'Lille, Hauts-de-France, France (Inria Centre at University of Lille; SPIRALS)',
  jurisdiction: 'International',
  domain: 'Energy measurement & scientific computing',
  openSourceYear: 2019,
  license: 'MIT',
  repository: 'https://github.com/powerapi-ng/pyRAPL',
  officialUrl: 'https://pyrapl.readthedocs.io/en/stable/',
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
