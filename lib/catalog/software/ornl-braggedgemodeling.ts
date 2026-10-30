import type { Project } from '../types';

export default {
  id: 'ornl-braggedgemodeling',
  name: 'braggedgemodeling (bem)',
  summary:
    'A Python package for modeling neutron Bragg-edge spectra from crystal structure, texture, and instrument parameters.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science, Basic Energy Sciences (BES), via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neutron imaging and materials science',
  openSourceYear: 2018,
  license: 'MIT',
  repository: 'https://github.com/ornlneutronimaging/braggedgemodeling',
  officialUrl: 'https://ornlneutronimaging.github.io/braggedgemodeling/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/185961',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'neutron imaging', 'bragg-edge', 'materials science'],
} satisfies Project;
