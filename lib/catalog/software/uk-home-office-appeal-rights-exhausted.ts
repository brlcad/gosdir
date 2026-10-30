import type { Project } from '../types';

export default {
  id: 'uk-home-office-appeal-rights-exhausted',
  name: 'Appeal Rights Exhausted Date Calculator',
  summary:
    'Appeal Rights Exhausted Date Calculator, a Home Office web calculator for determining appeal-rights-exhausted dates across England and Wales, Scotland, and Northern Ireland.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography:
    'United Kingdom (England and Wales, Scotland, and Northern Ireland)',
  jurisdiction: 'International',
  domain: 'Immigration and border services',
  openSourceYear: 2016,
  license: 'GPL-2.0',
  repository: 'https://github.com/UKHomeOffice/AppealRightsExhausted',
  officialUrl:
    'https://www.appeal-rights-exhausted.homeoffice.gov.uk/first-page',
  evidenceUrl:
    'https://www.appeal-rights-exhausted.homeoffice.gov.uk/first-page',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Immigration', 'Calculator'],
} satisfies Project;
