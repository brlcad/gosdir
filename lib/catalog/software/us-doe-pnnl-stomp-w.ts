import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-stomp-w',
  name: 'STOMP-W',
  summary:
    'Models subsurface water flow as the open-source Water operational mode of the STOMP simulator.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'United States; developed at PNNL in Richland, Washington',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental and subsurface modeling',
  openSourceYear: 2017,
  license: 'MIT',
  repository: 'https://github.com/pnnl/STOMP-W',
  officialUrl: 'https://www.pnnl.gov/projects/stomp/get-stomp',
  evidenceUrl: 'https://www.pnnl.gov/projects/stomp/user-guide',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['DOE', 'PNNL', 'subsurface', 'groundwater', 'simulation'],
} satisfies Project;
