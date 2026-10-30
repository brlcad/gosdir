import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-mcor',
  name: 'MCOR',
  summary:
    'Microgrid Component Optimization for Resilience (MCOR) is a PNNL command-line tool for sizing and evaluating microgrid resilience configurations.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Microgrids and energy resilience',
  openSourceYear: 2022,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/pnnl/MCOR',
  officialUrl: 'https://www.pnnl.gov/federal-performance-optimization',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/1765370/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'microgrids', 'energy resilience', 'optimization'],
} satisfies Project;
