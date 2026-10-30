import type { Project } from '../types';

export default {
  id: 'lanl-pfdd-v2',
  name: 'Phase Field Dislocation Dynamics (PFDD) v2.x',
  summary:
    'MPI-capable C/C++ mesoscale dislocation-dynamics simulation software.',
  sponsor:
    'U.S. Department of Energy Office of Science, Advanced Scientific Computing Research (ASCR); Los Alamos National Laboratory, operated by Triad National Security, LLC for DOE/NNSA',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science & computational physics',
  openSourceYear: 2022,
  license: 'GPL-3.0 (PFDD v2.x source; contract-rights notice is additive)',
  repository:
    'https://github.com/lanl/phase-field-dislocation-dynamics-pfdd-2.x',
  officialUrl: 'https://doi.org/10.11578/dc.20231117.5',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/116110',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'ascr',
    'lanl',
    'materials science',
    'dislocation dynamics',
    'simulation',
    'mpi',
  ],
} satisfies Project;
