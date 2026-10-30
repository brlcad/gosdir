import type { Project } from '../types';

export default {
  id: 'lanl-pydntnk',
  name: 'pyDNTNK',
  summary:
    'A distributed Python package for non-negative tensor-train and hierarchical Tucker decomposition of large datasets.',
  sponsor:
    'U.S. Department of Energy/National Nuclear Security Administration; Los Alamos National Laboratory SmartTensors AI/HPC suite (LANL T-1)',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing & data science',
  openSourceYear: 2021,
  license: 'BSD-3-Clause (pyDNTNK repository source)',
  repository: 'https://github.com/lanl/pyDNTNK',
  officialUrl: 'https://tensors.lanl.gov/software/',
  evidenceUrl: 'https://doi.org/10.5281/zenodo.5004490',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'smarttensors',
    'tensor decomposition',
    'tensor train',
    'python',
  ],
} satisfies Project;
