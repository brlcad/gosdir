import type { Project } from '../types';

export default {
  id: 'ornl-tx2',
  name: 'TX2',
  summary:
    'A Python/Jupyter widget library for inspecting and explaining transformer-based text-classification models.',
  sponsor:
    'U.S. Department of Energy (DOE), National Nuclear Security Administration (NNSA), via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe', 'us-doe-nnsa'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Artificial intelligence and explainability',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/tx2',
  officialUrl: 'https://ornl.github.io/tx2/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/50372',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'nnsa', 'explainable ai', 'machine learning'],
} satisfies Project;
