import type { Project } from '../types';

export default {
  id: 'lanl-singularity-opac',
  name: 'Singularity-Opac',
  summary:
    'A performance-portable library/API for frequency-dependent and frequency-averaged opacity, emissivity, and scattering.',
  sponsor:
    'U.S. Department of Energy Office of Science, Advanced Scientific Computing Research; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'United States — Los Alamos, New Mexico',
  jurisdiction: 'U.S. federal',
  domain: 'Radiation physics & scientific computing',
  openSourceYear: 2021,
  license:
    'BSD-3-Clause for repository code; external data and dependencies retain separate licenses',
  repository: 'https://github.com/lanl/singularity-opac',
  officialUrl: 'https://github.com/lanl/singularity-opac',
  evidenceUrl:
    'https://github.com/parthenon-hpc-lab/phoebus/blob/main/.gitmodules',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'opacity',
    'radiation physics',
    'scientific computing',
    'c++',
    'fortran',
  ],
} satisfies Project;
