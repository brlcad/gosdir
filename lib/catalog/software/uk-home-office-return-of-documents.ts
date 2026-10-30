import type { Project } from '../types';

export default {
  id: 'uk-home-office-return-of-documents',
  name: 'Return of Documents Service',
  summary:
    'The Home Office online service for eligible in-UK applicants to cancel a visa, immigration, or citizenship application and request their documents back.',
  sponsor: 'Home Office / UK Visas and Immigration',
  agencyIds: ['uk-home-office'],
  geography:
    'United Kingdom applicants; online route is for eligible in-UK applicants',
  jurisdiction: 'International',
  domain: 'Immigration and border services',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/return-of-documents',
  officialUrl: 'https://www.gov.uk/visa-documents-returned',
  evidenceUrl: 'https://www.gov.uk/visa-documents-returned',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'UKVI', 'Documents'],
} satisfies Project;
