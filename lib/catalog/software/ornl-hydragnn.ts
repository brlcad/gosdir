import type { Project } from '../types';

export default {
  id: 'ornl-hydragnn',
  name: 'HydraGNN',
  summary:
    'Distributed PyTorch graph neural networks for predicting multiple properties of materials and other graph-structured scientific data.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science; Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific machine learning',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/hydragnn',
  officialUrl: 'https://github.com/ORNL/HydraGNN',
  evidenceUrl:
    'https://impact.ornl.gov/en/publications/user-manual-hydragnn-v50-distributed-implementation-of-multi-task',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'graph neural networks',
    'scientific machine learning',
    'hpc',
  ],
} satisfies Project;
