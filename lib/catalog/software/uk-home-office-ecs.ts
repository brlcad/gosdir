import type { Project } from '../types';

export default {
  id: 'uk-home-office-ecs',
  name: 'Employer Checking Service',
  summary:
    'An online form that lets employers request an immigration-status check when ordinary evidence or online status is unavailable.',
  sponsor: 'Home Office, UK Visas and Immigration',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Immigration and employment verification',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/ecs',
  officialUrl: 'https://www.gov.uk/check-job-applicant-right-to-work',
  evidenceUrl: 'https://www.gov.uk/check-job-applicant-right-to-work',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'UKVI', 'Right to work'],
} satisfies Project;
