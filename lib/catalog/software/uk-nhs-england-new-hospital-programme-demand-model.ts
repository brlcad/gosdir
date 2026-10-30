import type { Project } from '../types';

export default {
  id: 'uk-nhs-england-new-hospital-programme-demand-model',
  name: 'New Hospital Programme Demand Model',
  summary:
    'An NHS demand-and-capacity model for planning hospital schemes across England, developed by The Strategy Unit for the New Hospital Programme.',
  sponsor:
    'New Hospital Programme (Department of Health and Social Care sponsor team; NHS England delivery team), developed by The Strategy Unit',
  agencyIds: ['uk-department-of-health-and-social-care', 'uk-nhs-england'],
  geography: 'England, United Kingdom',
  jurisdiction: 'International',
  domain: 'Healthcare infrastructure planning and analytics',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/The-Strategy-Unit/nhp_model',
  officialUrl:
    'https://www.strategyunitwm.nhs.uk/new-hospital-programme-demand-model',
  evidenceUrl:
    'https://www.gov.uk/government/publications/new-hospital-programme-annual-report-financial-year-2025-to-2026/new-hospital-programme-annual-report-2025-to-2026',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'united kingdom',
    'department of health and social care',
    'nhs england',
    'new hospital programme',
    'hospital planning',
    'demand modelling',
    'healthcare analytics',
  ],
} satisfies Project;
