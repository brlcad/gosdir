import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-ratlle',
  name: 'RATLLE',
  summary:
    'The Risk Assessment Tool for Large Load Induced Events (RATLLE) is a PNNL workflow for assessing power-grid reliability risks from large dynamic loads.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Electric power systems and reliability assessment',
  openSourceYear: 2025,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/LL-risk-assessment',
  officialUrl: 'https://github.com/pnnl/LL-risk-assessment',
  evidenceUrl: 'https://doi.org/10.1109/TD48022.2026.11562229',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'power systems', 'reliability', 'risk assessment'],
} satisfies Project;
