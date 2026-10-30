import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-ruleset-checking-tool',
  name: 'Ruleset Checking Tool',
  summary:
    'Software for checking building-energy model inputs against ASHRAE 90.1 requirements.',
  sponsor:
    'U.S. Department of Energy; developed at Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography:
    'Richland, Washington, United States (PNNL); the building-code rules apply in the United States',
  jurisdiction: 'U.S. federal',
  domain: 'Buildings and energy efficiency',
  openSourceYear: 2021,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/ruleset-checking-tool',
  officialUrl: 'https://www.osti.gov/doecode/biblio/55742',
  evidenceUrl:
    'https://www.energy.gov/sites/default/files/2024-11/bto-peer-2024-pnnl-performance-ruleset-modeling-standard_0.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['DOE', 'PNNL', 'buildings', 'ASHRAE 90.1', 'energy modeling'],
} satisfies Project;
