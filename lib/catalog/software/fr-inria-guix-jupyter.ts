import type { Project } from '../types';

export default {
  id: 'fr-inria-guix-jupyter',
  name: 'Guix-Jupyter',
  summary:
    'A Jupyter kernel that creates and runs notebook environments through GNU Guix for reproducible scientific computing.',
  sponsor:
    'Inria-led Guix-HPC project (historical origin); current source stewardship is with the Guix-Science community',
  agencyIds: ['fr-inria'],
  geography:
    'Inria Bordeaux, France; documented scientific-course use at the University of Tennessee, United States',
  jurisdiction: 'International',
  domain: 'Scientific computing & reproducible notebooks',
  openSourceYear: 2018,
  license: 'GPL-3.0',
  repository: 'https://codeberg.org/guix-science/guix-jupyter',
  officialUrl:
    'https://hpc.guix.info/blog/2024/11/guix-jupyter-0.3.0-released/',
  evidenceUrl: 'https://hpc.guix.info/static/doc/activity-report-2019.pdf',
  status: 'Maintained',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'guix', 'jupyter', 'reproducibility', 'research'],
} satisfies Project;
