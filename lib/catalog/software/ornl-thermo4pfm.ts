import type { Project } from '../types';

export default {
  id: 'ornl-thermo4pfm',
  name: 'Thermo4PFM',
  summary:
    'A C++ library for calculating equilibrium compositions and solving Kim-Kim-Suzuki equations in binary and ternary CALPHAD alloy phase-field models.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and scientific computing',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/Thermo4PFM',
  officialUrl: 'https://github.com/ORNL/Thermo4PFM',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/67580',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'materials science', 'phase-field modeling', 'alloys'],
} satisfies Project;
