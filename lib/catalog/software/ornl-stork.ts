import type { Project } from '../types';

export default {
  id: 'ornl-stork',
  name: 'Stork',
  summary:
    'A Kokkos-based framework for coupling thermal and microstructure simulations in additive manufacturing using RDF and SRDF data.',
  sponsor:
    'U.S. Department of Energy (DOE), Advanced Materials and Manufacturing Technologies Office (AMMTO), via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and additive manufacturing',
  openSourceYear: 2026,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/Stork',
  officialUrl: 'https://ornl.github.io/Stork/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/192615',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'additive manufacturing',
    'simulation',
    'scientific computing',
  ],
} satisfies Project;
