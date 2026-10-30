import type { Project } from '../types';

export default {
  id: 'ornl-superneuromat',
  name: 'SuperNeuroMAT',
  summary:
    'A matrix-based Python simulator for spiking neural networks, with leaky integrate-and-fire models, spike-timing-dependent plasticity, and optional GPU acceleration.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science, Advanced Scientific Computing Research (ASCR), via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neuroscience and scientific computing',
  openSourceYear: 2023,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/superneuromat',
  officialUrl: 'https://ornl.github.io/superneuromat/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/103290',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'neuroscience',
    'matrix computing',
    'scientific computing',
  ],
} satisfies Project;
