import type { Project } from '../types';

export default {
  id: 'ornl-toucan',
  name: 'Toucan',
  summary:
    'A C++/Kokkos/MPI application and library for discrete-event cellular-automata simulations of grain growth in additive manufacturing.',
  sponsor:
    'U.S. Department of Energy (DOE), Advanced Materials and Manufacturing Technologies Office (AMMTO), via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and additive manufacturing',
  openSourceYear: 2026,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/Toucan',
  officialUrl: 'https://ornl.github.io/Toucan/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/192934',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'additive manufacturing',
    'grain growth',
    'scientific computing',
  ],
} satisfies Project;
