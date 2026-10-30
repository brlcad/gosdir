import type { Project } from '../types';

export default {
  id: 'uk-insolvency-rps-calculation-engine',
  name: 'Redundancy Payment Calculation Engine',
  summary:
    'Insolvency Service REST API microservice that calculates statutory redundancy-related claims for the Redundancy Payments Service (RPS) Case Management System.',
  sponsor: 'The Insolvency Service, UK executive agency',
  agencyIds: ['uk-insolvency-service'],
  geography: 'Great Britain (England, Scotland and Wales), United Kingdom',
  jurisdiction: 'International',
  domain: 'Public benefits & financial services',
  openSourceYear: 2019,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/insolvencyservice/rpscalculationengine',
  officialUrl: 'https://www.gov.uk/claim-redundancy',
  evidenceUrl:
    'https://www.gov.uk/algorithmic-transparency-records/insolvency-service-redundancy-payment-calculation-engine',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'insolvency service',
    'redundancy payments',
    'claims processing',
    'rest api',
  ],
} satisfies Project;
