import type { Project } from '../types';

export default {
  id: 'uk-nhs-renal-capacity-model',
  name: 'Renal Capacity Model',
  summary:
    'Renal Capacity Model KRT component: a Python discrete-event simulation for estimating kidney replacement therapy demand and regional service capacity.',
  sponsor:
    'Midlands Kidney Network (funding/development partner); NHS Midlands and Lancashire Commissioning Support Unit’s Strategy Unit (software author/steward)',
  agencyIds: ['uk-nhs-midlands-lancashire-csu'],
  geography: 'England; regional kidney-centre planning',
  jurisdiction: 'International',
  domain: 'Healthcare planning and analytics',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/The-Strategy-Unit/renal-capacity-model',
  officialUrl:
    'https://www.strategyunitwm.nhs.uk/news/planning-rising-renal-demand-simulating-capacity-across-care-system',
  evidenceUrl:
    'https://www.strategyunitwm.nhs.uk/news/planning-rising-renal-demand-simulating-capacity-across-care-system',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'NHS', 'Renal', 'Capacity', 'Model'],
} satisfies Project;
