import type { Project } from '../types';

export default {
  id: 'lanl-allium',
  name: 'allium',
  summary:
    'A deterministic thermal radiative-transfer framework for computational physics.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational physics',
  openSourceYear: 2026,
  license: 'LGPL-2.0-only for this repository source',
  repository: 'https://github.com/lanl/allium',
  officialUrl: 'https://www.osti.gov/doecode/biblio/180550',
  evidenceUrl: 'https://github.com/lanl/allium/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'radiative transfer', 'computational physics'],
} satisfies Project;
