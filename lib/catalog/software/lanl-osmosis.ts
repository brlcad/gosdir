import type { Project } from '../types';

export default {
  id: 'lanl-osmosis',
  name: 'OSMOSIS (Pressure-from-PIV Solver)',
  summary:
    'One-Shot Matrix-based Omnidirectional Simultaneous pressure-Integration Solver: a CUDA-C++/MATLAB tool for reconstructing pressure fields from particle-image-velocimetry data using I-MODI and OS-MODI.',
  sponsor:
    'U.S. Department of Energy/National Nuclear Security Administration contract 89233218CNA000001; Los Alamos National Laboratory (code O4661), operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2024,
  license:
    'GPL-3.0-or-later for bulk project source; vtkread.m is separately MIT-licensed',
  repository: 'https://github.com/lanl/pressure-osmosis',
  officialUrl: 'https://github.com/lanl/pressure-osmosis',
  evidenceUrl: 'https://doi.org/10.1088/1361-6501/ad7486',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'fluid mechanics',
    'particle image velocimetry',
    'pressure solver',
    'cuda',
  ],
} satisfies Project;
