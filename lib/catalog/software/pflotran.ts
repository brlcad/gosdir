import type { Project } from '../types';

export default {
  id: 'pflotran',
  name: 'PFLOTRAN',
  summary:
    'DOE-supported, massively parallel software for simulating subsurface flow and reactive transport, developed with Sandia and other national-lab contributors.',
  sponsor: 'U.S. Department of Energy; Sandia National Laboratories and collaborating national labs',
  agencyIds: ['us-doe', 'us-doe-sandia-national-laboratories'],
  geography: 'United States (New Mexico; multi-laboratory collaboration)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2012,
  license: 'LGPL-2.1-or-later (project statement; source includes LGPL-3.0 text)',
  repository: 'https://bitbucket.org/pflotran/pflotran',
  officialUrl: 'https://www.pflotran.org/',
  evidenceUrl:
    'https://www.sandia.gov/research/publications/details/gdsa-pflotran-development-fy2021-2021-07-19/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['department of energy', 'sandia', 'subsurface flow', 'reactive transport'],
} satisfies Project;
