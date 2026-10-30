import type { Project } from '../types';

export default {
  id: 'us-doe-pyleem',
  name: 'pyLEEM',
  summary:
    'A Python toolkit for loading, inspecting, and analyzing low-energy electron microscopy data.',
  sponsor: 'U.S. Department of Energy, Brookhaven National Laboratory (BNL).',
  agencyIds: ['us-doe-brookhaven-national-laboratory', 'us-doe'],
  geography: 'Upton, New York, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Electron microscopy and scientific computing',
  openSourceYear: 2026,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/peterhys/pyLEEM',
  officialUrl: 'https://github.com/peterhys/pyLEEM',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/182405',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'brookhaven',
    'python',
    'electron microscopy',
    'scientific computing',
  ],
} satisfies Project;
