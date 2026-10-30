import type { Project } from '../types';

export default {
  id: 'uk-home-office-paf',
  name: 'Public Allegations Form (PAF)',
  summary:
    'The Home Office form for reporting immigration or border crime to Immigration Enforcement.',
  sponsor: 'Home Office / Immigration Enforcement',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Immigration and border services',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/paf',
  officialUrl: 'https://www.gov.uk/report-immigration-crime',
  evidenceUrl: 'https://www.gov.uk/report-immigration-crime',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'Home Office',
    'Immigration Enforcement',
    'Reporting',
  ],
} satisfies Project;
