import type { Project } from '../types';

export default {
  id: 'lanl-pleiades',
  name: 'PLEIADES',
  summary:
    'A Python toolkit for configuring SAMMY isotopic-analysis calculations, running them, and analyzing the resulting nuclear-data evaluations.',
  sponsor:
    'U.S. Department of Energy/National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear science & engineering',
  openSourceYear: 2024,
  license:
    'MIT (PLEIADES source; the federal contract-rights preamble is additive and SAMMY is separately licensed)',
  repository: 'https://github.com/lanl/pleiades',
  officialUrl: 'https://pleiades-sammy.readthedocs.io/en/latest/index.html',
  evidenceUrl: 'https://www.nature.com/articles/s41598-025-96789-8',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'nuclear science',
    'neutron resonance',
    'python',
  ],
} satisfies Project;
