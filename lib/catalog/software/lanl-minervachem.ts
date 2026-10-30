import type { Project } from '../types';

export default {
  id: 'lanl-minervachem',
  name: 'MinervaChem',
  summary:
    'A Python cheminformatics and machine-learning library implementing graphlet fingerprints and interpretable models.',
  sponsor:
    'U.S. Department of Energy, National Nuclear Security Administration / Office of Science; Los Alamos National Laboratory Laboratory Directed Research and Development (LDRD) Program',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry & machine learning',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/minervachem',
  officialUrl: 'https://www.osti.gov/doecode/biblio/126230',
  evidenceUrl: 'https://pubs.rsc.org/en/content/articlehtml/2024/dd/d4dd00089g',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'cheminformatics',
    'machine learning',
    'graphlets',
    'computational chemistry',
  ],
} satisfies Project;
