import type { Project } from '../types';

export default {
  id: 'uk-ons-keh-digital-landscape',
  name: 'ONS Digital Landscape',
  summary:
    'Internal ONS platform for technology-radar, project and repository insights, Copilot usage, address-book and GitHub-policy reporting.',
  sponsor: 'Office for National Statistics (ONS), ONS Digital',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (ONS-wide internal platform)',
  jurisdiction: 'International',
  domain: 'Internal platforms and developer tools',
  openSourceYear: 2026,
  license:
    'MIT (repository source; ONS data, cloud accounts, credentials and dependencies are outside the grant)',
  repository: 'https://github.com/onsdigital/keh-digital-landscape',
  officialUrl:
    'https://onsdigital.github.io/keh-digital-landscape/documentation/',
  evidenceUrl:
    'https://github.com/ONSdigital/keh-digital-landscape/releases/tag/v1.26.0',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'developer tools',
    'technology radar',
    'internal platform',
  ],
} satisfies Project;
