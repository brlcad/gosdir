import type { Project } from '../types';

export default {
  id: 'uk-office-for-equality-and-opportunity-gender-pay-gap',
  name: 'Gender Pay Gap Service',
  summary:
    'Gender Pay Gap Service, the UK government service for employer reporting and publication of gender pay gap data, including action plans.',
  sponsor: 'Office for Equality and Opportunity, Cabinet Office',
  agencyIds: ['uk-office-for-equality-and-opportunity', 'uk-cabinet-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Government services and equality data',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/ukgov-equality-hub/gender-pay-gap',
  officialUrl: 'https://gender-pay-gap.service.gov.uk/',
  evidenceUrl: 'https://gender-pay-gap.service.gov.uk/accessibility-statement',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'OEO',
    'Cabinet Office',
    'Gender',
    'Pay',
    'Gap',
    'Service',
  ],
} satisfies Project;
