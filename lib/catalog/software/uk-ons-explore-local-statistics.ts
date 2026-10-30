import type { Project } from '../types';

export default {
  id: 'uk-ons-explore-local-statistics',
  name: 'ONS Explore Local Statistics',
  summary:
    'Public ONS application for exploring local-area indicators through maps and data downloads.',
  sponsor:
    'Office for National Statistics (ONS), Data Science Campus / Digital Publishing',
  agencyIds: ['uk-office-for-national-statistics'],
  geography:
    'United Kingdom (coverage varies by indicator across UK and Great Britain)',
  jurisdiction: 'International',
  domain: 'Local statistics and data visualisation',
  openSourceYear: 2025,
  license:
    'MIT for app source; underlying statistics and dependencies are separate',
  repository: 'https://github.com/ONSdigital/explore-local-statistics-app',
  officialUrl: 'https://www.ons.gov.uk/explore-local-statistics/',
  evidenceUrl:
    'https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/healthandwellbeing/methodologies/explorelocalstatisticsserviceqmi',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'local statistics',
    'maps',
    'data visualisation',
    'web application',
  ],
} satisfies Project;
