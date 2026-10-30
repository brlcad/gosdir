import type { Project } from '../types';

export default {
  id: 'geoplant',
  name: 'GeoPlant',
  summary:
    'Scientific software for downloading and loading GeoPlant datasets and reproducing spatial plant-species prediction benchmarks.',
  sponsor: 'CIRAD, Inria, INRAE, and IRD through the Pl@ntNet consortium',
  agencyIds: ['fr-cirad', 'fr-inria', 'fr-inrae', 'fr-ird'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Biodiversity and scientific computing',
  openSourceYear: 2024,
  license:
    'MIT (repository code only; data and imagery are separately licensed)',
  repository: 'https://github.com/plantnet/GeoPlant',
  officialUrl: 'https://plantnet.github.io/GeoPlant/',
  evidenceUrl:
    'https://proceedings.neurips.cc/paper_files/paper/2024/file/e4e7de47202bda8133dd3e8b46205cf2-Paper-Datasets_and_Benchmarks_Track.pdf',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'France',
    'biodiversity',
    'species distribution',
    'scientific software',
    'MIT',
  ],
} satisfies Project;
