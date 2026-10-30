import type { Project } from '../types';

export default {
  id: 'myna',
  name: 'Myna',
  summary:
    'A Python framework for connecting additive-manufacturing simulations with experimental process data and databases.',
  sponsor:
    'U.S. Department of Energy (DOE), Oak Ridge National Laboratory (ORNL), and ORNL Manufacturing Demonstration Facility (MDF)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Additive manufacturing and computational materials science',
  openSourceYear: 2024,
  license:
    'BSD-3-Clause (Myna-authored code; dependencies and datasets separately licensed)',
  repository: 'https://github.com/ORNL-MDF/Myna',
  officialUrl: 'https://ornl-mdf.github.io/Myna/',
  evidenceUrl: 'https://zenodo.org/records/15185029',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'additive manufacturing',
    'materials science',
    'python',
  ],
} satisfies Project;
