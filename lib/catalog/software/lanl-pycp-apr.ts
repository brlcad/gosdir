import type { Project } from '../types';

export default {
  id: 'lanl-pycp-apr',
  name: 'pyCP_APR',
  summary:
    'A Python library for non-negative CP tensor decomposition and tensor anomaly detection, including GPU acceleration.',
  sponsor:
    'U.S. Department of Energy/National Nuclear Security Administration; Los Alamos National Laboratory SmartTensors AI program',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing & data science',
  openSourceYear: 2021,
  license: 'BSD-3-Clause (pyCP_APR source)',
  repository: 'https://github.com/lanl/pyCP_APR',
  officialUrl: 'https://lanl.github.io/pyCP_APR/',
  evidenceUrl: 'https://tensors.lanl.gov/software/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'smarttensors',
    'tensor decomposition',
    'anomaly detection',
    'gpu',
    'python',
  ],
} satisfies Project;
