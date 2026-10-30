import type { Project } from '../types';

export default {
  id: 'olcf-velocity',
  name: 'Velocity',
  summary:
    'A container-image build manager for high-performance computing environments.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), Oak Ridge Leadership Computing Facility (OLCF), U.S. Department of Energy Office of Science / Advanced Scientific Computing Research',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and container image builds',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/olcf/velocity',
  officialUrl: 'https://olcf.github.io/velocity/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/182523',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'olcf', 'hpc', 'containers', 'python'],
} satisfies Project;
