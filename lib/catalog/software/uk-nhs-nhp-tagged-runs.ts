import type { Project } from '../types';

export default {
  id: 'uk-nhs-nhp-tagged-runs',
  name: 'NHP Tagged Runs',
  summary:
    'An R Markdown application for looking up hospital-demand model scenarios by run stage and scheme site.',
  sponsor:
    'NHS Midlands and Lancashire Commissioning Support Unit’s Strategy Unit, supporting NHS England’s New Hospital Programme',
  agencyIds: ['uk-nhs-midlands-lancashire-csu', 'uk-nhs-england'],
  geography: 'England',
  jurisdiction: 'International',
  domain: 'Healthcare planning and analytics',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/The-Strategy-Unit/nhp_tagged_runs',
  officialUrl: 'https://connect.strategyunitwm.nhs.uk/nhp/tagged_runs/',
  evidenceUrl:
    'https://github.com/The-Strategy-Unit/nhp_tagged_runs/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'NHS', 'NHS England', 'NHP', 'Tagged', 'Runs'],
} satisfies Project;
