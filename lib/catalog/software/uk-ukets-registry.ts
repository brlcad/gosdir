import type { Project } from '../types';

export default {
  id: 'uk-ukets-registry',
  name: 'UK Emissions Trading Scheme Registry',
  summary:
    'The registry application suite for the UK Emissions Trading Scheme.',
  sponsor:
    'UK Emissions Trading Scheme Authority; Registry administered by the Environment Agency',
  agencyIds: ['uk-uk-ets-authority', 'uk-environment-agency'],
  geography:
    'United Kingdom, including devolved administrations and Northern Ireland',
  jurisdiction: 'International',
  domain: 'Energy and carbon markets',
  openSourceYear: 2023,
  license: 'Apache-2.0',
  repository: 'https://github.com/UKGovernmentBEIS/ukets-registry',
  officialUrl: 'https://view-emissions-trading-registry.service.gov.uk/',
  evidenceUrl:
    'https://www.gov.uk/government/publications/uk-emissions-trading-scheme-for-installations-how-to-comply/uk-emissions-trading-scheme-for-installations-how-to-comply',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UK ETS', 'Carbon market', 'Registry'],
} satisfies Project;
