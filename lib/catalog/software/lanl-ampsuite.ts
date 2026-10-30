import type { Project } from '../types';

export default {
  id: 'lanl-ampsuite',
  name: 'AmpSuite',
  summary:
    'A Python package and tutorial suite for amplitude/coda analysis, seismic discrimination, and yield estimation.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Seismology and nuclear-test monitoring',
  openSourceYear: 2024,
  license: 'BSD-3-Clause for repository source',
  repository: 'https://github.com/lanl/AmpSuite',
  officialUrl: 'https://www.osti.gov/doecode/biblio/152503',
  evidenceUrl:
    'https://conferences.ctbto.org/event/30/contributions/5766/attachments/3034/5879/O3.1-256_Gammans.pdf',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'seismology', 'monitoring', 'python'],
} satisfies Project;
