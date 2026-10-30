import type { Project } from '../types';

export default {
  id: 'uk-nhs-perioperative-pathway-explorer',
  name: 'Perioperative Pathway Explorer',
  summary:
    'A system-dynamics model for exploring elective hip and knee care pathways.',
  sponsor:
    'NHS Midlands and Lancashire Commissioning Support Unit’s Strategy Unit, in collaboration with NHS clinicians, public-health specialists, commissioners, and national organizations',
  agencyIds: ['uk-nhs-midlands-lancashire-csu'],
  geography: 'England; public simulator available internationally',
  jurisdiction: 'International',
  domain: 'Healthcare planning and analytics',
  openSourceYear: 2026,
  license: 'MIT',
  repository:
    'https://github.com/The-Strategy-Unit/perioperative-pathway-explorer',
  officialUrl:
    'https://exchange.iseesystems.com/public/strategy-unit/perioperative-care-pathways/index.html',
  evidenceUrl:
    'https://github.com/The-Strategy-Unit/perioperative-pathway-explorer/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'NHS', 'Perioperative', 'Pathway', 'Explorer'],
} satisfies Project;
