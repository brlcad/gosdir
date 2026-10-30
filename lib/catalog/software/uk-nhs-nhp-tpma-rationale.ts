import type { Project } from '../types';

export default {
  id: 'uk-nhs-nhp-tpma-rationale',
  name: 'New Hospital Programme TPMA Rationale',
  summary:
    'An interactive Quarto report for reviewing potentially mitigatable activity choices and prediction intervals in hospital planning.',
  sponsor:
    'NHS Midlands and Lancashire Commissioning Support Unit’s Strategy Unit, supporting NHS England’s New Hospital Programme',
  agencyIds: ['uk-nhs-midlands-lancashire-csu', 'uk-nhs-england'],
  geography: 'England',
  jurisdiction: 'International',
  domain: 'Healthcare planning and analytics',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/The-Strategy-Unit/nhp_tpma_rationale',
  officialUrl: 'https://connect.strategyunitwm.nhs.uk/nhp/tpma-rationale/',
  evidenceUrl:
    'https://github.com/The-Strategy-Unit/nhp_tpma_rationale/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'NHS',
    'NHS England',
    'New',
    'Hospital',
    'Programme',
    'TPMA',
    'Rationale',
  ],
} satisfies Project;
