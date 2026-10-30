import type { Project } from '../types';

export default {
  id: 'lanl-artemis-astro',
  name: 'Artemis (astrophysical radiation hydrodynamics)',
  summary:
    'A performance-portable multi-fluid astrophysical and radiation-hydrodynamics code built on Parthenon.',
  sponsor:
    'U.S. Department of Energy/NNSA; Los Alamos National Laboratory LDRD, operated by Triad National Security, LLC',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe-nnsa', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Astrophysics and computational fluid dynamics',
  openSourceYear: 2024,
  license:
    'BSD-3-Clause-LANL variant for Artemis-owned code; upstream components are separately licensed',
  repository: 'https://github.com/lanl/artemis',
  officialUrl: 'https://lanl.github.io/artemis/',
  evidenceUrl: 'https://doi.org/10.1016/j.jcp.2026.115126',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'astrophysics', 'hydrodynamics', 'parthenon'],
} satisfies Project;
