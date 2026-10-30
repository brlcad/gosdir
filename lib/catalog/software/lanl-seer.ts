import type { Project } from '../types';

export default {
  id: 'lanl-seer',
  name: 'Seer',
  summary:
    'A lightweight in-situ framework for interactively steering simulation analysis and visualization and creating personalized workspaces.',
  sponsor:
    'U.S. Department of Energy Office of Science, Advanced Scientific Computing Research; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'United States — Los Alamos, New Mexico',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & visualization',
  openSourceYear: 2019,
  license: 'BSD-3-Clause for repository source',
  repository: 'https://github.com/lanl/Seer',
  officialUrl: 'https://github.com/lanl/Seer',
  evidenceUrl:
    'https://laro.lanl.gov/esploro/outputs/conferenceProceeding/Lightweight-Interface-for-In-Situ-Analysis/9916458605003761',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'scientific computing',
    'in-situ analysis',
    'visualization',
    'simulation',
  ],
} satisfies Project;
