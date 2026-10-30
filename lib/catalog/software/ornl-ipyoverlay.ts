import type { Project } from '../types';

export default {
  id: 'ornl-ipyoverlay',
  name: 'IPyOverlay',
  summary:
    'A Python/IPython widget library for combining interactive visualizations with overlay interfaces.',
  sponsor:
    'U.S. Department of Energy (DOE), National Nuclear Security Administration (NNSA); Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe', 'us-doe-nnsa'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific visualization',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/ipyoverlay',
  officialUrl: 'https://ornl.github.io/ipyoverlay/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/127817',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'visualization', 'python', 'jupyter'],
} satisfies Project;
