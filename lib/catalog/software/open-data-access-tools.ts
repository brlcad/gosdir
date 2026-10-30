import type { Project } from '../types';

export default {
  id: 'open-data-access-tools',
  name: 'Open Data Access Tools',
  summary:
    'Tools for accessing energy datasets in Azure storage, developed for the Open Energy Data Initiative.',
  sponsor:
    'National Laboratory of the Rockies (formerly National Renewable Energy Laboratory), U.S. Department of Energy Office of Energy Efficiency and Renewable Energy / Solar Energy Technologies Office',
  agencyIds: ['us-doe-national-laboratory-of-the-rockies', 'us-doe'],
  geography: 'Golden, Colorado, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Energy data access and software',
  openSourceYear: 2020,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/openEDI/open-data-access-tools',
  officialUrl: 'https://openedi.github.io/open-data-access-tools/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/116773',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'nlr', 'nrel', 'oedi', 'energy data', 'python'],
} satisfies Project;
