import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-datalife',
  name: 'DataLife',
  summary:
    'A PNNL scientific-data lifecycle tool designed to reduce data-management bottlenecks in research workflows.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific data management and research workflows',
  openSourceYear: 2023,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/datalife',
  officialUrl:
    'https://sc23.conference-program.com/presentation/?id=pap567&sess=sess181',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/113474',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'scientific computing', 'data management', 'workflows'],
} satisfies Project;
