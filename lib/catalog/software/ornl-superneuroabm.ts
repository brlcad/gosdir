import type { Project } from '../types';

export default {
  id: 'ornl-superneuroabm',
  name: 'SuperNeuroABM',
  summary:
    'A framework for simulating spiking neural networks as GPU-accelerated agents, with CUDA, ROCm, and MPI support.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science, Advanced Scientific Computing Research (ASCR), via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neuroscience and scientific computing',
  openSourceYear: 2023,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/superneuroabm',
  officialUrl: 'https://github.com/ORNL/superneuroabm',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/103323',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'neuroscience',
    'agent-based modeling',
    'gpu computing',
  ],
} satisfies Project;
