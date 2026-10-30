import type { Project } from '../types';

export default {
  id: 'us-doe-lanl-glopw',
  name: 'GloPW',
  summary:
    'A Python package implementing a probabilistic global electromagnetic ion-cyclotron wave model developed at Los Alamos National Laboratory.',
  sponsor: 'Los Alamos National Laboratory / U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Global magnetosphere model; developed at Los Alamos National Laboratory, New Mexico',
  jurisdiction: 'U.S. federal',
  domain: 'Space physics & magnetospheric science',
  openSourceYear: 2025,
  license: 'BSD-3-Clause for the GloPW package source',
  repository: 'https://github.com/SungjunNoh/GloPW',
  officialUrl:
    'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025EA004633',
  evidenceUrl:
    'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025EA004633',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['doe', 'lanl', 'space physics', 'magnetosphere', 'python'],
} satisfies Project;
