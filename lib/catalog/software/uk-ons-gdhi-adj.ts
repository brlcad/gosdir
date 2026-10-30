import type { Project } from '../types';

export default {
  id: 'uk-ons-gdhi-adj',
  name: 'ONS GDHI Adjustment Module',
  summary:
    'A Python module for adjusting small-area gross disposable household income estimates.',
  sponsor:
    'Office for National Statistics (ONS), Reproducible Data Science and Analysis',
  agencyIds: ['uk-office-for-national-statistics'],
  geography:
    'United Kingdom (ONS subnational economic statistics; estimates cover UK lower geographies)',
  jurisdiction: 'International',
  domain: 'Economic statistics and data analysis',
  openSourceYear: 2025,
  license:
    'MIT for published adjustment package only; core pipeline, restricted microdata, external data, and dependencies are separate',
  repository: 'https://github.com/ONSdigital/gdhi-adj',
  officialUrl:
    'https://www.ons.gov.uk/economy/regionalaccounts/grossdisposablehouseholdincome/articles/disaggregatinguksubnationalgrossdisposablehouseholdincometolowerlevelsofgeography/2002to2021',
  evidenceUrl: 'https://github.com/ONSdigital/gdhi-adj/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'gross disposable household income',
    'python',
    'economic statistics',
    'small-area estimates',
  ],
} satisfies Project;
