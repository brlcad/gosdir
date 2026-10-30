import type { Project } from '../types';

export default {
  id: 'lanl-pyptkinetics',
  name: 'PyPTkinetics',
  summary:
    'Python research code for time-dependent solid-solid phase-transformation kinetics in metals, with microstructure-aware and phenomenological models.',
  sponsor:
    'Los Alamos National Laboratory; DOE/NNSA contract 89233218CNA000001; LANL public-release identifier O4940',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science & computational physics',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause for PyPTkinetics source code; scientific inputs and dependencies are outside this grant',
  repository: 'https://github.com/lanl/PyPTkinetics',
  officialUrl: 'https://github.com/lanl/PyPTkinetics',
  evidenceUrl:
    'https://www.sciencedirect.com/science/article/abs/pii/S0749641925003377',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'materials science',
    'phase transformations',
    'python',
  ],
} satisfies Project;
