import type { Project } from '../types';

export default {
  id: 'uk-ons-rdsa-utils',
  name: 'ONS RDSA Utilities',
  summary:
    'Reusable Python and PySpark utilities and pipeline helpers maintained by ONS Reproducible Data Science and Analysis (RDSA).',
  sponsor:
    'Office for National Statistics (ONS), Reproducible Data Science and Analysis (RDSA)',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Data science and analysis tools',
  openSourceYear: 2025,
  license:
    'MIT (code and sample code); Open Government Licence v3.0 (documentation); dependencies and ONS statistical data are outside the grant',
  repository: 'https://github.com/onsdigital/rdsa-utils',
  officialUrl: 'https://pypi.org/project/rdsa-utils/0.16.1/',
  evidenceUrl: 'https://pypi.org/project/rdsa-utils/0.16.1/',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'python',
    'pyspark',
    'data science',
    'reusable utilities',
  ],
} satisfies Project;
