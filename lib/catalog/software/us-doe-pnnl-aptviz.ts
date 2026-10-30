import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-aptviz',
  name: 'APTVIZ / Compositional Community Detection',
  summary:
    'A PNNL Flask GUI and scripts for unsupervised analysis of chemical segregation in atom-probe tomography.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and atom-probe tomography',
  openSourceYear: 2024,
  license:
    'BSD-2-Clause for APTVIZ source; OPTICS-APT dependency is separately licensed',
  repository: 'https://github.com/pnnl/APTVIZ',
  officialUrl: 'https://github.com/pnnl/APTVIZ',
  evidenceUrl:
    'https://academic.oup.com/mam/article/31/Supplement_1/ozaf048.140/8212609',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'pnnl',
    'materials science',
    'atom probe tomography',
    'clustering',
  ],
} satisfies Project;
