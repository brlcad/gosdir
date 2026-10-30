import type { Project } from '../types';

export default {
  id: 'uk-ukef-export-insurance-policies',
  name: 'Export Insurance Policies (EXIP)',
  summary:
    'The Get a Quote web application for UK Export Finance export insurance.',
  sponsor:
    'UK Export Finance (UKEF), UK government department and export credit agency',
  agencyIds: ['uk-export-finance'],
  geography:
    'United Kingdom; UKEF insurance service for UK exporters, with international buyers/counterparties',
  jurisdiction: 'International',
  domain: 'Finance and international trade',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/UK-Export-Finance/exip',
  officialUrl: 'https://www.gov.uk/guidance/apply-for-ukef-export-insurance',
  evidenceUrl: 'https://www.gov.uk/guidance/apply-for-ukef-export-insurance',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKEF', 'Export', 'Insurance', 'Policies', 'EXIP'],
} satisfies Project;
