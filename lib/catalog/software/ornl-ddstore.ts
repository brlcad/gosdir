import type { Project } from '../types';

export default {
  id: 'ornl-ddstore',
  name: 'DDStore',
  summary:
    'A distributed in-memory data store for loading training data across computing nodes, with remote-memory access and PyTorch integration.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science; Oak Ridge National Laboratory (ORNL), contract AC05-00OR22725.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific data infrastructure',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/ddstore',
  officialUrl: 'https://ornl.github.io/DDStore/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/121881',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'scientific data', 'data transfer', 'machine learning'],
} satisfies Project;
