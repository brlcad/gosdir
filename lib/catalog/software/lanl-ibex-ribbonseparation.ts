import type { Project } from '../types';

export default {
  id: 'lanl-ibex-ribbonseparation',
  name: 'IBEX Ribbon Separation',
  summary:
    'R scripts and reproducibility materials for separating IBEX energetic-neutral-atom ribbon and globally distributed flux maps.',
  sponsor:
    'U.S. Department of Energy Laboratory Directed Research and Development (LDRD) Program; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Heliophysics & statistical computing',
  openSourceYear: 2023,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/ibex_ribbonseparation',
  officialUrl: 'https://www.osti.gov/doecode/biblio/114853',
  evidenceUrl: 'https://arxiv.org/abs/2302.03089',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'heliophysics', 'space science', 'statistics', 'r'],
} satisfies Project;
