import type { Project } from '../types';

export default {
  id: 'uk-home-office-lmr',
  name: 'Landlords Make a Report (LMR)',
  summary:
    'The Home Office online form for landlords and agents to report right-to-rent follow-up checks.',
  sponsor: 'Home Office / UK Visas and Immigration',
  agencyIds: ['uk-home-office'],
  geography: 'England (Right to Rent Scheme)',
  jurisdiction: 'International',
  domain: 'Immigration and border services',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/lmr',
  officialUrl: 'https://www.landlords-reporting.homeoffice.gov.uk/',
  evidenceUrl:
    'https://www.gov.uk/government/publications/right-to-rent-landlords-code-of-practice/code-of-practice-for-landlords-and-their-agents-the-right-to-rent-scheme-for-landlords-and-their-agents-1-october-2026',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Right to Rent', 'Landlords'],
} satisfies Project;
