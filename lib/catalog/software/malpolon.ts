import type { Project } from '../types';

export default {
  id: 'malpolon',
  name: 'Malpolon species-distribution modeling framework',
  summary:
    'A Python framework for deep species-distribution modeling, with data loaders and training and inference workflows.',
  sponsor:
    'Inria (Pl@ntNet team), with European Commission funding through MAMBO and GUARDEN',
  agencyIds: ['fr-inria', 'eu-european-commission'],
  geography: 'France; European Union-funded research',
  jurisdiction: 'International',
  domain: 'Biodiversity and machine learning',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/plantnet/malpolon',
  officialUrl: 'https://plantnet.github.io/malpolon/',
  evidenceUrl: 'https://arxiv.org/abs/2409.18102',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'European Union', 'biodiversity', 'machine learning', 'MIT'],
} satisfies Project;
