import type { Project } from '../types';

export default {
  id: 'uk-ons-python-template',
  name: 'ONS Python Template',
  summary:
    'Reusable starting template and guidance for creating reproducible ONS Python projects.',
  sponsor: 'Office for National Statistics (ONS), ONS Digital',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools and project templates',
  openSourceYear: 2024,
  license: 'MIT (template code); Open Government Licence v3.0 (documentation)',
  repository: 'https://github.com/onsdigital/ons-python-template',
  officialUrl: 'https://github.com/ONSdigital/ons-python-template',
  evidenceUrl:
    'https://github.com/ONSdigital/ons-python-template/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'python',
    'project template',
    'reproducible research',
  ],
} satisfies Project;
