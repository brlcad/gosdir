import type { Project } from '../types';

export default {
  id: 'lanl-pydnmfk',
  name: 'pyDNMFk',
  summary:
    'A distributed Python implementation of non-negative matrix factorization with automated latent-feature determination for large datasets.',
  sponsor:
    'U.S. Department of Energy/National Nuclear Security Administration; Los Alamos National Laboratory SmartTensors AI/HPC suite (LANL T-1)',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing & data science',
  openSourceYear: 2021,
  license: 'BSD-3-Clause (pyDNMFk repository source)',
  repository: 'https://github.com/lanl/pyDNMFk',
  officialUrl: 'https://tensors.lanl.gov/software/',
  evidenceUrl: 'https://doi.org/10.1007/s11227-023-05587-4',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'smarttensors',
    'matrix factorization',
    'distributed computing',
    'python',
  ],
} satisfies Project;
