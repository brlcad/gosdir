import type { Project } from '../types';

export default {
  id: 'lanl-metconsin',
  name: 'MetConSIN',
  summary:
    'A tool for inferring metabolically contextualized microbial interaction networks from genome-scale models.',
  sponsor:
    'U.S. Department of Energy, Office of Science; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational biology & microbiome systems',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/metconsin',
  officialUrl:
    'https://regionalbiomassresourcehub.inl.gov/capability/metconsin/',
  evidenceUrl:
    'https://regionalbiomassresourcehub.inl.gov/capability/metconsin/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'microbiome',
    'systems biology',
    'metabolic modeling',
    'computational biology',
  ],
} satisfies Project;
