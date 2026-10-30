import type { Project } from '../types';

export default {
  id: 'ornl-pdmatlab2d',
  name: 'PDMATLAB2D',
  summary: 'A MATLAB implementation of two-dimensional peridynamics methods.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), including DOE Office of Science WDTS and ORNL LDRD support',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Peridynamics and materials science',
  openSourceYear: 2022,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/pdmatlab2d',
  officialUrl: 'https://github.com/ORNL/PDMATLAB2D',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/97241',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'peridynamics', 'materials science', 'matlab'],
} satisfies Project;
