import type { Project } from '../types';

export default {
  id: 'stellgap',
  name: 'STELLGAP',
  summary:
    'An ORNL-Fusion code for calculating Alfvén continua in stellarator and plasma configurations.',
  sponsor:
    'Oak Ridge National Laboratory Fusion Energy Division, U.S. Department of Energy Fusion Energy Sciences',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Fusion energy, stellarator physics, and plasma continua',
  openSourceYear: 2016,
  license: 'MIT',
  repository: 'https://github.com/ORNL-Fusion/Stellgap',
  officialUrl: 'https://github.com/ORNL-Fusion/Stellgap',
  evidenceUrl:
    'https://impact.ornl.gov/en/datasets/data-and-figure-generating-scripts-for-on-shear-alfv%C3%A9n-wave-induc/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'fusion energy', 'stellarator', 'plasma physics'],
} satisfies Project;
