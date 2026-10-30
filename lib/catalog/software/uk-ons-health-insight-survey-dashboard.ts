import type { Project } from '../types';

export default {
  id: 'uk-ons-health-insight-survey-dashboard',
  name: 'Health Insight Survey Dashboard',
  summary:
    'Public dashboard accompanying ONS’s recurring Health Insight Survey statistics, commissioned by NHS England and covering England.',
  sponsor:
    'Office for National Statistics (ONS), delivering the Health Insight Survey commissioned by NHS England',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'England',
  jurisdiction: 'International',
  domain: 'Health statistics and public information',
  openSourceYear: 2026,
  license:
    'MIT (repository software; not survey microdata or ONS statistical outputs)',
  repository: 'https://github.com/onsdigital/health-insight-survey-dashboard',
  officialUrl: 'https://onsdigital.github.io/health-insight-survey-dashboard/',
  evidenceUrl:
    'https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/healthcaresystem/datasets/experiencesofnhshealthcareservicesinengland',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'health statistics',
    'survey',
    'dashboard',
    'england',
  ],
} satisfies Project;
