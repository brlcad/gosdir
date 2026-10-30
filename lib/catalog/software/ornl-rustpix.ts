import type { Project } from '../types';

export default {
  id: 'ornl-rustpix',
  name: 'rustpix',
  summary:
    'A Rust/Python library for processing TPX3 neutron-imaging event data.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), Office of Science, Basic Energy Sciences',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ornlneutronimaging/rustpix',
  officialUrl: 'https://ornlneutronimaging.github.io/rustpix/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/185477',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'neutron imaging', 'tpx3', 'rust', 'python'],
} satisfies Project;
