import type { Project } from '../types';

export default {
  id: 'uk-home-office-visa-processing-times-tool',
  name: 'Visa Processing Times Tool (VIPTT)',
  summary:
    'The Home Office service that helps visa applicants estimate when UKVI will decide their application.',
  sponsor: 'Home Office / UK Visas and Immigration',
  agencyIds: ['uk-home-office'],
  geography:
    'United Kingdom service for visa applicants applying inside and outside the UK',
  jurisdiction: 'International',
  domain: 'Immigration and border services',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/visa-processing-times-tool',
  officialUrl: 'https://www.gov.uk/check-visa-processing-time',
  evidenceUrl: 'https://www.gov.uk/check-visa-processing-time',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'UKVI', 'Visa processing'],
} satisfies Project;
