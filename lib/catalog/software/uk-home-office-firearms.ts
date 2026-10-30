import type { Project } from '../types';

export default {
  id: 'uk-home-office-firearms',
  name: 'Firearms Licensing Application',
  summary: 'An online application form for firearm and shotgun certificates.',
  sponsor: 'Home Office, Border Force',
  agencyIds: ['uk-home-office'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Public safety and licensing',
  openSourceYear: 2016,
  license: 'GPL-3.0',
  repository: 'https://github.com/UKHomeOffice/firearms',
  officialUrl: 'https://www.firearms-licensing.homeoffice.gov.uk/',
  evidenceUrl: 'https://www.firearms-licensing.homeoffice.gov.uk/',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Licensing', 'Firearms'],
} satisfies Project;
