import type { Project } from '../types';

export default {
  id: 'climextremes',
  name: 'climextRemes',
  summary:
    'An LBNL/UC Berkeley R and Python package for statistical analysis of climate extremes and event-attribution risk ratios.',
  sponsor: 'Lawrence Berkeley National Laboratory and University of California, Berkeley; DOE-supported CASCADE project',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Climate science',
  openSourceYear: 2019,
  license: 'BSD-3-Clause (R package DESCRIPTION plus copyright file)',
  repository: 'https://bitbucket.org/lbl-cascade/climextremes-dev',
  officialUrl: 'https://cascade.lbl.gov/products/the-climextremes-package-for-r-and-python/',
  evidenceUrl: 'https://cran.r-project.org/package=climextRemes',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['doe', 'lbnl', 'climate extremes', 'r', 'python'],
} satisfies Project;
