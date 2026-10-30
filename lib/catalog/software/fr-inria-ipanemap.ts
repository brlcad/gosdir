import type { Project } from '../types';

export default {
  id: 'fr-inria-ipanemap',
  name: 'IPANEMAP',
  summary:
    'Software for probing-informed RNA secondary-structure modeling and inference.',
  sponsor: 'Inria AMIBIO research team',
  agencyIds: ['fr-inria'],
  geography: 'Saclay, Île-de-France, France (Inria Saclay research center)',
  jurisdiction: 'International',
  domain: 'RNA bioinformatics',
  openSourceYear: 2023,
  license: 'GPL-3.0',
  repository: 'https://gitlab.inria.fr/amibio/ipanemap',
  officialUrl: 'https://gitlab.inria.fr/amibio/ipanemap',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11934922/',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'bioinformatics', 'rna', 'research software'],
} satisfies Project;
