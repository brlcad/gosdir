import type { Project } from '../types';

export default {
  id: 'fr-inria-guix-modules',
  name: 'Guix-Modules',
  summary:
    'A GNU Guix extension that generates Environment Modules files from Guix package definitions for HPC clusters.',
  sponsor:
    'Inria-led Guix-HPC project; current source is maintained under the Guix-Science community',
  agencyIds: ['fr-inria'],
  geography: 'Inria Bordeaux, France',
  jurisdiction: 'International',
  domain: 'High-performance computing & environment management',
  openSourceYear: 2022,
  license: 'GPL-3.0',
  repository: 'https://codeberg.org/guix-science/guix-modules',
  officialUrl:
    'https://hpc.guix.info/blog/2022/05/back-to-the-future-modules-for-guix-packages/',
  evidenceUrl:
    'https://hpc.guix.info/blog/2022/05/back-to-the-future-modules-for-guix-packages/',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'guix', 'hpc', 'environment-modules'],
} satisfies Project;
