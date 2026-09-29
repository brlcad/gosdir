import type { Project } from '../types';

export default {
  id: 'taipei-city-dashboard',
  name: 'Taipei City Dashboard',
  summary:
    'Taipei’s open city-operations dashboard for combining real-time municipal data into reusable visualizations and public decision support.',
  sponsor: 'Taipei City Department of Information Technology',
  agencyIds: ['tw-taipei-doit'],
  geography: 'Taipei, Taiwan',
  jurisdiction: 'International',
  domain: 'Data visualization',
  openSourceYear: 2023,
  license: 'AGPL-3.0-only',
  repository: 'https://github.com/taipei-doit/Taipei-City-Dashboard',
  officialUrl: 'https://citydashboard.taipei/',
  evidenceUrl:
    'https://english.rdec.gov.taipei/News_Content.aspx?n=50819E2E63622F17&s=7411D1AC2C16D9FC&sms=DFFA119D1FD5602C',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['taiwan', 'open data', 'dashboard'],
} satisfies Project;
