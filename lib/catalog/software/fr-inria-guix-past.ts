import type { Project } from '../types';

export default {
  id: 'fr-inria-guix-past',
  name: 'Guix-Past channel',
  summary:
    'A GNU Guix package channel for reconstructing historical scientific software environments.',
  sponsor:
    'Created by Inria-led Guix-HPC research; currently distributed with the Guix-Science community and Inria build substitutes',
  agencyIds: ['fr-inria'],
  geography:
    'Inria Bordeaux, France; documented GeneNetwork use in the United States',
  jurisdiction: 'International',
  domain: 'Scientific software & reproducible research',
  openSourceYear: 2020,
  license: 'GPL-3.0 (channel source and package definitions only)',
  repository: 'https://codeberg.org/guix-science/guix-past',
  officialUrl: 'https://hpc.guix.info/channel/guix-past',
  evidenceUrl: 'https://hpc.guix.info/static/doc/activity-report-2020.pdf',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'guix', 'reproducibility', 'research'],
} satisfies Project;
