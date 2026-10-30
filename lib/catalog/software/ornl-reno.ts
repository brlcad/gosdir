import type { Project } from '../types';

export default {
  id: 'ornl-reno',
  name: 'Reno',
  summary:
    'Python tools for building, simulating, visualizing, and analyzing system-dynamics models, with PyMC integration for Bayesian inference.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), National Nuclear Security Administration (NNSA)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe', 'us-doe-nnsa'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'System dynamics and visualization',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/reno',
  officialUrl: 'https://ornl.github.io/reno/stable/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/166929',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'system dynamics',
    'bayesian inference',
    'python',
    'visualization',
  ],
} satisfies Project;
