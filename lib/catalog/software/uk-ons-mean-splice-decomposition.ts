import type { Project } from '../types';

export default {
  id: 'uk-ons-mean-splice-decomposition',
  name: 'Mean Splice Decomposition',
  summary:
    'Python function and examples for mean-splice decomposition of published indices.',
  sponsor:
    'Office for National Statistics (ONS), consumer price statistics methodology',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Statistical methodology and developer tools',
  openSourceYear: 2025,
  license: 'MIT (code); Open Government Licence v3.0 (documentation)',
  repository: 'https://github.com/onsdigital/mean-splice-decomposition',
  officialUrl: 'https://github.com/ONSdigital/mean-splice-decomposition',
  evidenceUrl:
    'https://unece.org/sites/default/files/2025-04/geneva%20paper.pdf',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'python',
    'statistics',
    'price indices',
    'methodology',
  ],
} satisfies Project;
