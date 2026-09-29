import type { Project } from '../types';

export default {
  id: 'checkfirst',
  name: 'CheckFirst',
  summary:
    'A retired builder for government eligibility checkers and calculators, used for national COVID-19 health and travel guidance.',
  sponsor: 'Open Government Products, Government Technology Agency of Singapore',
  agencyIds: ['sg-open-government-products'],
  geography: 'Singapore',
  jurisdiction: 'International',
  domain: 'Forms & workflows',
  openSourceYear: 2021,
  license: 'MIT (code; government identity assets excluded)',
  repository: 'https://github.com/opengovsg/checkfirst',
  officialUrl: 'https://reports.open.gov.sg/checkfirst',
  evidenceUrl: 'https://www.open.gov.sg/for-developers/open-source/',
  status: 'Archived',
  verified: '2026-09-28',
  tags: ['singapore', 'eligibility', 'public services', 'archived'],
} satisfies Project;
