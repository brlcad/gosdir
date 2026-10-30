import type { Project } from '../types';

export default {
  id: 'lanl-kessel',
  name: 'Kessel',
  summary:
    'A continuous-integration and developer-workflow automation tool used across multiple LANL code teams.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Developer tools & continuous integration',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/lanl/kessel',
  officialUrl: 'https://github.com/lanl/kessel',
  evidenceUrl: 'https://appliedcomputerscienceseries.lanl.gov/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'continuous integration',
    'developer tools',
    'software engineering',
  ],
} satisfies Project;
