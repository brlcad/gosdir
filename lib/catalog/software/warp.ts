import type { Project } from '../types';

export default {
  id: 'warp',
  name: 'Warp',
  summary:
    'A Python particle-in-cell simulation framework for plasmas and high-current accelerator beams.',
  sponsor: 'Lawrence Livermore and Lawrence Berkeley National Laboratories',
  agencyIds: [
    'us-doe-lawrence-livermore-national-laboratory',
    'us-doe-lawrence-berkeley-national-laboratory',
  ],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2013,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://bitbucket.org/berkeleylab/warp',
  officialUrl: 'https://warp.lbl.gov/',
  evidenceUrl: 'https://warp.lbl.gov/example-simulation-scripts',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'particle simulation', 'accelerators', 'plasma'],
} satisfies Project;
