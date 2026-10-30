import type { Project } from '../types';

export default {
  id: 'uk-home-office-explosives-precursors-poisons',
  name: 'Explosives Precursors and Poisons Application',
  summary:
    'An online application form for explosives precursors and poisons licences.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography:
    'Great Britain (England, Wales and Scotland; not Northern Ireland)',
  jurisdiction: 'International',
  domain: 'Licensing and regulatory services',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/explosives-precursors-poisons',
  officialUrl:
    'https://www.gov.uk/government/publications/explosives-precursors-and-poisons-licences-application-guidance',
  evidenceUrl:
    'https://www.gov.uk/government/publications/explosives-precursors-and-poisons-licences-application-guidance/licensing-for-home-users-of-poisons-and-explosive-precursors',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Licensing', 'EPP'],
} satisfies Project;
