import type { Project } from '../types';

export default {
  id: 'ornl-nereids',
  name: 'NEREIDS',
  summary:
    'A Rust/Python toolkit and graphical interface for neutron-resonance imaging workflows at the VENUS and MARS instruments.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), Office of Science, Basic Energy Sciences / Scientific User Facilities',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific imaging',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/ornlneutronimaging/NEREIDS',
  officialUrl: 'https://ornlneutronimaging.github.io/NEREIDS/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/185399',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'neutron imaging', 'data processing', 'rust', 'python'],
} satisfies Project;
