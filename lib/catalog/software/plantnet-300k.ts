import type { Project } from '../types';

export default {
  id: 'plantnet-300k',
  name: 'Pl@ntNet-300K benchmark and training code',
  summary:
    'Training and model-loading code for the Pl@ntNet-300K plant-image benchmark.',
  sponsor: 'CIRAD, Inria, INRAE, and IRD through the Pl@ntNet consortium',
  agencyIds: ['fr-cirad', 'fr-inria', 'fr-inrae', 'fr-ird'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Biodiversity and machine learning',
  openSourceYear: 2021,
  license:
    'BSD-2-Clause (repository source only; dataset assets have separate terms)',
  repository: 'https://github.com/plantnet/PlantNet-300K',
  officialUrl: 'https://github.com/plantnet/PlantNet-300K',
  evidenceUrl:
    'https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/file/7e7757b1e12abcb736ab9a754ffb617a-Paper-round2.pdf',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'France',
    'biodiversity',
    'machine learning',
    'benchmark',
    'BSD-2-Clause',
  ],
} satisfies Project;
