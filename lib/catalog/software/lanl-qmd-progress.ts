import type { Project } from '../types';

export default {
  id: 'lanl-qmd-progress',
  name: 'PROGRESS (QMD-PROGRESS)',
  summary:
    'A parallel electronic-structure library for quantum-chemistry solvers: Parallel Rapid O(N) and Graph-based Recursive Electronic Structure Solver.',
  sponsor:
    'Los Alamos National Laboratory; DOE/NNSA contract noted in the project legal notice; LANL public software project',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry & high-performance computing',
  openSourceYear: 2016,
  license:
    'BSD-3-Clause for PROGRESS source; BML and other build dependencies have separate licenses',
  repository: 'https://github.com/lanl/qmd-progress',
  officialUrl: 'https://qmd-progress.readthedocs.io/',
  evidenceUrl: 'https://github.com/lanl/qmd-progress/releases/tag/v1.3.0',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'quantum chemistry',
    'electronic structure',
    'hpc',
    'fortran',
  ],
} satisfies Project;
