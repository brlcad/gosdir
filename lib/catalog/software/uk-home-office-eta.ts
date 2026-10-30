import type { Project } from '../types';

export default {
  id: 'uk-home-office-eta',
  name: 'Electronic Travel Authorisation Application Form',
  summary:
    'The web application form for applying for a UK Electronic Travel Authorisation.',
  sponsor: 'Home Office, UK Visas and Immigration',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom (permission to travel to the UK)',
  jurisdiction: 'International',
  domain: 'Immigration and travel',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/eta',
  officialUrl: 'https://www.gov.uk/eta/apply',
  evidenceUrl:
    'https://www.gov.uk/service-standard-reports/electronic-travel-authorisation-eta-beta-assessment',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'UKVI', 'Travel'],
} satisfies Project;
