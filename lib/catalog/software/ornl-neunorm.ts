import type { Project } from '../types';

export default {
  id: 'ornl-neunorm',
  name: 'NeuNorm',
  summary:
    'A Python library for normalizing neutron images and processing time-of-flight events at the MARS and VENUS instruments.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), Office of Science, Basic Energy Sciences',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2017,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ornlneutronimaging/NeuNorm',
  officialUrl: 'https://neutronimaging.ornl.gov/software/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/185854',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'neutron imaging', 'data normalization', 'python'],
} satisfies Project;
