import type { Project } from '../types';

export default {
  id: 'fr-inria-varna-api',
  name: 'VARNA API',
  summary:
    'A Python wrapper for programmatically drawing RNA secondary structures with VARNA.',
  sponsor: 'Inria AMIBIO research team',
  agencyIds: ['fr-inria'],
  geography: 'Saclay, Île-de-France, France (Inria Saclay research center)',
  jurisdiction: 'International',
  domain: 'RNA bioinformatics & visualization',
  openSourceYear: 2020,
  license: 'GPL-3.0',
  repository: 'https://gitlab.inria.fr/amibio/varna-api',
  officialUrl: 'https://amibio.gitlabpages.inria.fr/varna-api/',
  evidenceUrl: 'https://pypi.org/project/varnaapi/',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'bioinformatics', 'rna', 'python'],
} satisfies Project;
