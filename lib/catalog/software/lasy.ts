import type { Project } from '../types';

export default {
  id: 'lasy',
  name: 'LASY',
  summary: 'A Python library for representing and manipulating laser pulses.',
  sponsor:
    'Lawrence Berkeley National Laboratory, U.S. Department of Energy, with DESY, LOA, and CEA collaborators',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography:
    'Berkeley, California, United States; Germany and France collaborators',
  jurisdiction: 'U.S. federal',
  domain: 'Laser science and scientific computing',
  openSourceYear: 2023,
  license: 'BSD-3-Clause-LBNL (OSI-approved variant)',
  repository: 'https://github.com/LASY-org/lasy',
  officialUrl: 'https://mpl.desy.de/simulation-tools',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/135030',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'berkeley lab',
    'laser physics',
    'python',
    'scientific computing',
  ],
} satisfies Project;
