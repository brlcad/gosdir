import type { Project } from '../types';

export default {
  id: 'uk-home-office-rotm',
  name: 'Report Online Terrorist Material (ROTM)',
  summary:
    'The Home Office public web service for reporting terrorist or extremist material online.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Public safety and reporting',
  openSourceYear: 2016,
  license: 'GNU GPL v2.0',
  repository: 'https://github.com/UKHomeOffice/rotm',
  officialUrl: 'https://www.gov.uk/report-terrorism',
  evidenceUrl: 'https://www.gov.uk/report-terrorism',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Counter-terrorism', 'Reporting'],
} satisfies Project;
