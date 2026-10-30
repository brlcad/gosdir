import type { Project } from '../types';

export default {
  id: 'lanl-pselib',
  name: 'PSELib',
  summary:
    'A Python library of nonlinear optimization test problems for process-systems engineering.',
  sponsor: 'Los Alamos National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Process systems engineering and optimization',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/Robbybp/pselib',
  officialUrl: 'https://github.com/Robbybp/pselib',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/127379',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'lanl',
    'python',
    'optimization',
    'process systems engineering',
  ],
} satisfies Project;
