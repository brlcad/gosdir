import type { Project } from '../types';

export default {
  id: 'us-doe-sandia-pyomo',
  name: 'Pyomo',
  summary:
    'A Python optimization-modeling language and library for expressing mathematical programs and connecting them to optimization solvers.',
  sponsor:
    'Sandia National Laboratories, U.S. Department of Energy; Pyomo is also a COIN-OR project.',
  agencyIds: ['us-doe-sandia-national-laboratories'],
  geography: 'Albuquerque, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mathematical optimization',
  openSourceYear: 2008,
  license:
    'BSD-3-Clause (Pyomo source; separately licensed modules retain their own terms)',
  repository: 'https://github.com/Pyomo/pyomo',
  officialUrl: 'https://www.pyomo.org/',
  evidenceUrl: 'https://www.sandia.gov/ccr/ccr-software/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united states', 'doe', 'sandia', 'optimization', 'python'],
} satisfies Project;
