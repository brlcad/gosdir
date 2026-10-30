import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-copper',
  name: 'COPPER',
  summary:
    'A PNNL tool for generating and analyzing performance curves used in building-energy simulation.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Building energy and simulation',
  openSourceYear: 2022,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/copper',
  officialUrl: 'https://pnnl.github.io/copper/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/77938',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'building energy', 'simulation', 'python'],
} satisfies Project;
