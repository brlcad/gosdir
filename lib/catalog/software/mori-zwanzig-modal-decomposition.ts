import type { Project } from '../types';

export default {
  id: 'mori-zwanzig-modal-decomposition',
  name: 'Mori-Zwanzig Modal Decomposition',
  summary:
    'A Julia module for learning Mori-Zwanzig operators and extracting large-scale spatio-temporal structures.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy LDRD Program',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational physics',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/lanl/MoriZwanzigModalDecomposition.jl',
  officialUrl: 'https://www.osti.gov/doecode/biblio/134680',
  evidenceUrl: 'https://arxiv.org/abs/2311.09524',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'computational physics', 'modal analysis', 'julia'],
} satisfies Project;
