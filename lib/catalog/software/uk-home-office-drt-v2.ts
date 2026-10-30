import type { Project } from '../types';

export default {
  id: 'uk-home-office-drt-v2',
  name: 'Dynamic Response Tool v2',
  summary:
    'An operational tool for estimating Border Force staffing requirements and managing airport and port resources.',
  sponsor: 'Home Office, Border Force',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Border operations and workforce planning',
  openSourceYear: 2016,
  license: 'Apache-2.0',
  repository: 'https://github.com/UKHomeOffice/drt-v2',
  officialUrl: 'https://github.com/UKHomeOffice/drt-v2',
  evidenceUrl: 'https://github.com/UKHomeOffice/drt-v2/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Border Force', 'Operations'],
} satisfies Project;
