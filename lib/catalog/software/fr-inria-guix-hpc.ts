import type { Project } from '../types';

export default {
  id: 'fr-inria-guix-hpc',
  name: 'Guix-HPC channel',
  summary:
    'An Inria-distributed GNU Guix package channel for high-performance computing software.',
  sponsor:
    'Inria-led Guix-HPC collaboration, co-founded with the Max Delbrück Center and Utrecht Bioinformatics Center',
  agencyIds: ['fr-inria'],
  geography:
    'Inria Bordeaux, France, with founding research partners in Germany and the Netherlands',
  jurisdiction: 'International',
  domain: 'High-performance computing & scientific software distribution',
  openSourceYear: 2017,
  license: 'GPL-3.0 (channel source and package definitions only)',
  repository: 'https://gitlab.inria.fr/guix-hpc/guix-hpc',
  officialUrl: 'https://hpc.guix.info/channel/guix-hpc',
  evidenceUrl: 'https://hpc.guix.info/channel/guix-hpc',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'guix', 'hpc', 'scientific-software'],
} satisfies Project;
