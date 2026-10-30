import type { Project } from '../types';

export default {
  id: 'ornl-ibeatles',
  name: 'iBeatles',
  summary:
    'A graphical application for Bragg-edge fitting and two-dimensional strain mapping in neutron imaging.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neutron imaging and materials science',
  openSourceYear: 2016,
  license: 'MIT',
  repository: 'https://github.com/ornlneutronimaging/ibeatles',
  officialUrl: 'https://github.com/ornlneutronimaging/ibeatles',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/148423',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'neutron imaging', 'bragg-edge', 'strain mapping'],
} satisfies Project;
