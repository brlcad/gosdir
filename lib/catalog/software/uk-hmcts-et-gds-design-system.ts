import type { Project } from '../types';

export default {
  id: 'uk-hmcts-et-gds-design-system',
  name: 'Employment Tribunals GDS Design System Gem',
  summary:
    'A Rails and Vite wrapper integrating GOV.UK Frontend components and form helpers into Employment Tribunals applications.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom; the exact component deployment jurisdiction is not separately mapped',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2020,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/et_gds_design_system',
  officialUrl: 'https://github.com/hmcts/et_gds_design_system',
  evidenceUrl: 'https://github.com/hmcts/et-pet-et1/blob/master/Gemfile',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'employment tribunals',
    'govuk design system',
    'ruby',
    'frontend',
  ],
} satisfies Project;
