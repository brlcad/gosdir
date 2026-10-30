import type { Project } from '../types';

export default {
  id: 'openfast',
  name: 'OpenFAST',
  summary:
    'A wind-turbine and wind-farm simulation framework combining aerodynamic, hydrodynamic, structural, and control models.',
  sponsor:
    'National Laboratory of the Rockies (formerly National Renewable Energy Laboratory), U.S. Department of Energy Office of Energy Efficiency and Renewable Energy / Wind Energy Technologies Office',
  agencyIds: ['us-doe-national-laboratory-of-the-rockies', 'us-doe'],
  geography: 'Golden, Colorado, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Wind turbine and wind farm simulation',
  openSourceYear: 2016,
  license: 'Apache-2.0',
  repository: 'https://github.com/OpenFAST/openfast',
  officialUrl: 'https://openfast.readthedocs.io/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/57283',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'nlr', 'wind energy', 'simulation', 'openfast'],
} satisfies Project;
