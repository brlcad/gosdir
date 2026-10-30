import type { Project } from '../types';

export default {
  id: 'lanl-owl',
  name: 'OWL (Open Wave Library)',
  summary:
    'A Fortran/MPI/OpenMP library for seismic-wave simulation and full-waveform inversion.',
  sponsor:
    'Los Alamos National Laboratory Laboratory Directed Research and Development Program; U.S. Department of Energy / National Nuclear Security Administration',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geophysics & scientific computing',
  openSourceYear: 2026,
  license:
    'BSD-3-Clause for OWL source code; FLIT, compiler toolchains, and separately linked LANL packages retain their own licenses',
  repository: 'https://github.com/lanl/owl',
  officialUrl: 'https://github.com/lanl/owl',
  evidenceUrl: 'https://github.com/lanl/owl/releases/tag/v1.4.0',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'geophysics',
    'seismic modeling',
    'fortran',
    'hpc',
  ],
} satisfies Project;
