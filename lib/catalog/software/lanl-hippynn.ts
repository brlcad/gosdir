import type { Project } from '../types';

export default {
  id: 'lanl-hippynn',
  name: 'hippynn',
  summary:
    'A Python package for training and applying neural-network interatomic potentials.',
  sponsor:
    'U.S. Department of Energy Laboratory Directed Research and Development (LDRD) Program; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science & machine learning',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/hippynn',
  officialUrl: 'https://www.osti.gov/doecode/biblio/67698',
  evidenceUrl: 'https://github.com/lanl/hippynn/releases',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'machine learning',
    'materials science',
    'molecular simulation',
    'python',
  ],
} satisfies Project;
