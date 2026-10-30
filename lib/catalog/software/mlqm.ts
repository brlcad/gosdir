import type { Project } from '../types';

export default {
  id: 'mlqm',
  name: 'MLQM',
  summary:
    'A suite of machine-learning methods and reproducibility code for quantum-mechanics and neural quantum-state research.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy LDRD Program',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum computing and computational physics',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/lanl/MLQM',
  officialUrl: 'https://www.osti.gov/doecode/biblio/125417',
  evidenceUrl: 'https://arxiv.org/abs/2609.20799',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'quantum mechanics', 'machine learning', 'research'],
} satisfies Project;
