import type { Project } from '../types';

export default {
  id: 'lanl-pyseqm',
  name: 'PYSEQM',
  summary:
    'A PyTorch-based semiempirical quantum-chemistry package for accelerated ground- and excited-state calculations, including GPU support.',
  sponsor:
    'Los Alamos National Laboratory; DOE/NNSA contract 89233218CNA000001; LANL Center for Nonlinear Studies / T-1 contributors',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry',
  openSourceYear: 2022,
  license:
    'BSD-3-Clause for source code; bundled model weights and any scientific datasets are outside this scope claim',
  repository: 'https://github.com/lanl/PYSEQM',
  officialUrl: 'https://lanl.github.io/PYSEQM/',
  evidenceUrl: 'https://doi.org/10.1021/acs.jctc.5c00980',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'computational chemistry',
    'quantum chemistry',
    'pytorch',
  ],
} satisfies Project;
