import type { Project } from '../types';

export default {
  id: 'ornl-dedfoam',
  name: 'DEDFOAM',
  summary:
    'An OpenFOAM-based computational package for simulating directed-energy deposition in additive manufacturing.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Energy Efficiency and Renewable Energy (EERE), Advanced Materials and Manufacturing Technologies Office (AMMTO); Oak Ridge National Laboratory (ORNL), contract AC05-00OR22725.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography:
    'Oak Ridge, Tennessee, United States; DOE EERE federal sponsorship.',
  jurisdiction: 'U.S. federal',
  domain: 'Additive manufacturing and computational fluid dynamics',
  openSourceYear: 2026,
  license: 'GNU GPL-3.0',
  repository: 'https://github.com/ORNL/dedfoam',
  officialUrl: 'https://github.com/ORNL/DEDFOAM',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/186894',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'additive manufacturing',
    'directed energy deposition',
    'openfoam',
  ],
} satisfies Project;
