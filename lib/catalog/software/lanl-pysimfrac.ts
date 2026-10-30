import type { Project } from '../types';

export default {
  id: 'lanl-pysimfrac',
  name: 'pySimFrac',
  summary:
    'A Python package for generating and analyzing three-dimensional synthetic rough fracture surfaces, with fracture-generation methods and simulator integration examples.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geophysics & subsurface modeling',
  openSourceYear: 2023,
  license:
    'BSD-3-Clause for package source; external fracture data and linked simulation tools have separate terms',
  repository: 'https://github.com/lanl/pySimFrac',
  officialUrl: 'https://lanl.github.io/pySimFrac/',
  evidenceUrl: 'https://doi.org/10.1016/j.cageo.2024.105665',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'geophysics', 'fracture modeling', 'python'],
} satisfies Project;
