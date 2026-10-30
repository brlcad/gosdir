import type { Project } from '../types';

export default {
  id: 'fr-inria-astec',
  name: 'ASTEC',
  summary:
    'A suite for quantitative processing, segmentation, and tracking of time-lapse 3D microscopy images.',
  sponsor:
    'Inria MORPHEME team, jointly associated with CNRS and Université Côte d’Azur',
  agencyIds: ['fr-inria', 'fr-cnrs', 'fr-university-cote-dazur'],
  geography: 'Sophia Antipolis, Provence-Alpes-Côte d’Azur, France',
  jurisdiction: 'International',
  domain: 'Microscopy & bioimage analysis',
  openSourceYear: 2023,
  license: 'GPL-3.0',
  repository: 'https://gitlab.inria.fr/astec/astec',
  officialUrl: 'https://astec.gitlabpages.inria.fr/astec/',
  evidenceUrl: 'https://rex-radar.inria.fr/report/2025/morpheme/index.html',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'cnrs', 'microscopy', 'bioimage analysis'],
} satisfies Project;
