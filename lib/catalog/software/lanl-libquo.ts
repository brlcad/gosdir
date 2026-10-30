import type { Project } from '../types';

export default {
  id: 'lanl-libquo',
  name: 'QUO (libquo)',
  summary:
    'A runtime library for coordinating HPC application and runtime resources.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing & runtime systems',
  openSourceYear: 2013,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/libquo',
  officialUrl: 'https://lanl.github.io/libquo/',
  evidenceUrl: 'https://lanl.github.io/libquo/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'hpc',
    'runtime systems',
    'resource management',
    'c',
  ],
} satisfies Project;
