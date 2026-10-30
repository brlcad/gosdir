import type { Project } from '../types';

export default {
  id: 'acdc',
  name: 'ACDC',
  summary:
    'A desktop utility for Campbell-diagram analysis of OpenFAST models.',
  sponsor:
    'National Laboratory of the Rockies (formerly National Renewable Energy Laboratory), U.S. Department of Energy Office of Energy Efficiency and Renewable Energy / Wind Energy Technologies Office',
  agencyIds: ['us-doe-national-laboratory-of-the-rockies', 'us-doe'],
  geography: 'Golden, Colorado, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Wind energy engineering and simulation analysis',
  openSourceYear: 2024,
  license: 'Apache-2.0',
  repository: 'https://github.com/OpenFAST/acdc',
  officialUrl: 'https://openfast.github.io/acdc/docs/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/178465',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'nlr', 'wind energy', 'campbell diagram', 'openfast'],
} satisfies Project;
