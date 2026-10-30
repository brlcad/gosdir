import type { Project } from '../types';

export default {
  id: 'sandia-veesa',
  name: 'VEESA',
  summary:
    'Sandia’s R package for Variable Importance Explainable Elastic Shape Analysis in supervised machine learning with functional data.',
  sponsor: 'U.S. Department of Energy / Sandia National Laboratories',
  agencyIds: ['us-doe-sandia-national-laboratories', 'us-doe'],
  geography:
    'Sandia National Laboratories, Albuquerque, New Mexico (author affiliation; no deployment site asserted)',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2023,
  license:
    'MIT for the VEESA R package code and associated documentation; no license is inferred for third-party dependencies',
  repository: 'https://github.com/sandialabs/veesa',
  officialUrl: 'https://cran.r-project.org/package=veesa',
  evidenceUrl: 'https://research.tetonedge.net/Papers/jds1212.pdf',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['doe', 'sandia', 'machine learning', 'functional data', 'r'],
} satisfies Project;
