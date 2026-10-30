import type { Project } from '../types';

export default {
  id: 'uk-home-office-keycloak-theme-govuk',
  name: 'GOV.UK Keycloak Theme',
  summary:
    'A reusable GOV.UK-styled Keycloak login theme deployed in Home Office identity services.',
  sponsor: 'UK Home Office',
  agencyIds: ['uk-home-office'],
  geography:
    'United Kingdom; reusable for Home Office and other GOV.UK-facing identity services',
  jurisdiction: 'International',
  domain: 'Identity and access management',
  openSourceYear: 2017,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/keycloak-theme-govuk',
  officialUrl: 'https://github.com/UKHomeOffice/keycloak-theme-govuk',
  evidenceUrl: 'https://github.com/UKHomeOffice/keycloak-theme-govuk',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Keycloak', 'Identity'],
} satisfies Project;
