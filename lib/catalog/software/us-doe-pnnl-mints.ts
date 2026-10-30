import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-mints',
  name: 'MINTs',
  summary:
    'The Material Inventory Nuclear Tracking Simulator (MINTs) models item-level nuclear fuel-cycle material flows for safeguards planning.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear safeguards and material-flow simulation',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/pnnl/MINTs',
  officialUrl: 'https://mints.readthedocs.io/en/latest/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/174360',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'nuclear safeguards', 'material flow', 'simulation'],
} satisfies Project;
