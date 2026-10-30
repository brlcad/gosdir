import type { Project } from '../types';

export default {
  id: 'uk-home-office-egar-public-site-ui',
  name: 'General Aviation Report Public-Site UI',
  summary: 'The public web frontend for submitting General Aviation Reports.',
  sponsor: 'Home Office, Border Force',
  agencyIds: ['uk-home-office'],
  geography:
    'United Kingdom and Common Travel Area; international general-aviation journeys to and from the UK',
  jurisdiction: 'International',
  domain: 'Aviation and border reporting',
  openSourceYear: 2019,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/egar-public-site-ui',
  officialUrl:
    'https://www.submit-general-aviation-report.service.gov.uk/welcome/index',
  evidenceUrl:
    'https://www.gov.uk/government/publications/general-aviation-operators-and-pilots-notification-of-flights/general-aviation-report-guidance-accessible',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Border Force', 'Aviation'],
} satisfies Project;
