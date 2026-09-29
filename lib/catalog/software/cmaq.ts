import type { Project } from '../types';

export default {
  id: 'cmaq',
  name: 'Community Multiscale Air Quality Modeling System (CMAQ)',
  summary:
    'EPA’s atmospheric modeling system for studying air pollution from regional to hemispheric scales and supporting air-quality decisions.',
  sponsor: 'U.S. Environmental Protection Agency',
  agencyIds: ['us-epa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 1998,
  license: 'MIT',
  repository: 'https://github.com/USEPA/CMAQ',
  officialUrl: 'https://www.epa.gov/cmaq',
  evidenceUrl:
    'https://www.epa.gov/sciencematters/cmaq-celebrating-25-years-air-quality-modeling-excellence',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['epa', 'air quality', 'atmospheric modeling'],
} satisfies Project;
