import type { Project } from '../types';

export default {
  id: 'uk-desnz-mets',
  name: 'Manage Your UK ETS Reporting (METS)',
  summary:
    'The Manage Your UK ETS Reporting application suite for the UK Emissions Trading Scheme.',
  sponsor:
    'UK ETS Authority (UK Government and devolved administrations; DESNZ leads), with Environment Agency and devolved regulators administering the scheme',
  agencyIds: [
    'uk-department-for-energy-security-and-net-zero',
    'uk-environment-agency',
  ],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Energy policy and carbon-market administration',
  openSourceYear: 2023,
  license: 'Apache-2.0',
  repository: 'https://github.com/ukgovernmentbeis/mets',
  officialUrl: 'https://manage-emissions-reporting.service.gov.uk/',
  evidenceUrl:
    'https://www.gov.uk/guidance/uk-emissions-trading-scheme-for-aviation-how-to-comply',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'DESNZ',
    'Environment Agency',
    'Manage',
    'Your',
    'ETS',
    'Reporting',
    'METS',
  ],
} satisfies Project;
