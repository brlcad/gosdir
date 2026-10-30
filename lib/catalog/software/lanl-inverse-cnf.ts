import type { Project } from '../types';

export default {
  id: 'lanl-inverse-cnf',
  name: 'inverse-cnf',
  summary:
    'A conditional normalizing-flow model and end-to-end experimental workflow for generating simulation initial conditions from target outputs.',
  sponsor:
    'U.S. Department of Energy, Office of Science, Advanced Scientific Computing Research (ASCR); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Machine learning & scientific computing',
  openSourceYear: 2026,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/inverse-cnf',
  officialUrl: 'https://www.osti.gov/doecode/biblio/174088',
  evidenceUrl: 'https://doi.org/10.1145/3731599.3767343',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'machine learning',
    'inverse problems',
    'scientific computing',
    'simulation',
  ],
} satisfies Project;
