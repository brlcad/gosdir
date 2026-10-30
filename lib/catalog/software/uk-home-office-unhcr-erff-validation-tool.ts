import type { Project } from '../types';

export default {
  id: 'uk-home-office-unhcr-erff-validation-tool',
  name: 'UNHCR eRFF Validation Tool',
  summary:
    'A Java library and standalone tools for validating UNHCR electronic Resettlement Referral Form XML, including CLI, GUI, web, and REST modes.',
  sponsor: 'UK Home Office (publishing/stewarding organization)',
  agencyIds: ['uk-home-office'],
  geography:
    'UK Home Office resettlement workflow and international UNHCR partner use',
  jurisdiction: 'International',
  domain: 'Immigration and resettlement',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/unhcr-erff-validation-tool',
  officialUrl: 'https://github.com/UKHomeOffice/unhcr-erff-validation-tool',
  evidenceUrl:
    'https://github.com/UKHomeOffice/unhcr-erff-validation-tool/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'UNHCR', 'Resettlement'],
} satisfies Project;
