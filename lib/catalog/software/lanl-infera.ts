import type { Project } from '../types';

export default {
  id: 'lanl-infera',
  name: 'InferA',
  summary:
    'A multi-agent AI workflow for analysis of terabyte-scale cosmological simulation data.',
  sponsor:
    'U.S. Department of Energy; Los Alamos National Laboratory, operated for DOE/NNSA under contract 89233218CNA000001',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Artificial intelligence & high-performance computing',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/infera',
  officialUrl: 'https://www.osti.gov/doecode/biblio/161447',
  evidenceUrl: 'https://doi.org/10.1145/3731599.3767342',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'artificial intelligence',
    'multi-agent systems',
    'cosmology',
    'hpc',
  ],
} satisfies Project;
