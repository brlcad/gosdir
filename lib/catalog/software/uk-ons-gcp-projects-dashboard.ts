import type { Project } from '../types';

export default {
  id: 'uk-ons-gcp-projects-dashboard',
  name: 'ONS GCP Projects Dashboard',
  summary:
    'ONS operational dashboard with collectors and version jobs for viewing ONS Google Cloud Platform project information.',
  sponsor:
    'Office for National Statistics (ONS), Digital Publishing / Cloud Platform',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (national ONS internal operational tooling)',
  jurisdiction: 'International',
  domain: 'Cloud operations and monitoring',
  openSourceYear: 2020,
  license:
    'MIT for repository dashboard and collector code; Google services, credentials, APIs, and dependencies are separate',
  repository: 'https://github.com/ONSdigital/gcp-projects-dashboard',
  officialUrl: 'https://github.com/ONSdigital/gcp-projects-dashboard',
  evidenceUrl:
    'https://github.com/ONSdigital/gcp-projects-dashboard/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'google cloud',
    'dashboard',
    'cloud operations',
    'monitoring',
  ],
} satisfies Project;
