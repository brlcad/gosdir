import type { Project } from '../types';

export default {
  id: 'fr-inria-infrared',
  name: 'Infrared',
  summary:
    'A Python/C++ framework for declaratively modeling bioinformatics problems and solving them with tree-decomposition algorithms.',
  sponsor: 'Inria AMIBIO team (Algorithms and Models for Integrative Biology)',
  agencyIds: ['fr-inria'],
  geography: 'Saclay, Île-de-France, France (Inria Saclay research center)',
  jurisdiction: 'International',
  domain: 'Bioinformatics & algorithmics',
  openSourceYear: 2018,
  license: 'GPL-3.0',
  repository: 'https://gitlab.inria.fr/amibio/infrared',
  officialUrl: 'https://amibio.gitlabpages.inria.fr/Infrared/index.html',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10943887/',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: [
    'france',
    'inria',
    'bioinformatics',
    'algorithmics',
    'research software',
  ],
} satisfies Project;
