import type { Project } from '../types';

export default {
  id: 'raptor',
  name: 'Raptor',
  summary:
    'A Python tool and library for geometric simulation of stochastic lack-of-fusion porosity in laser powder-bed fusion additive manufacturing.',
  sponsor:
    'U.S. Department of Energy (DOE), Oak Ridge National Laboratory (ORNL), and ORNL Manufacturing Demonstration Facility (MDF), with Vanderbilt University collaborators',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Additive manufacturing and materials science',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause (Raptor source; input data and dependencies separately licensed)',
  repository: 'https://github.com/ORNL-MDF/Raptor',
  officialUrl: 'https://github.com/ORNL-MDF/Raptor',
  evidenceUrl: 'https://impact.ornl.gov/en/publications/raptor/',
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
