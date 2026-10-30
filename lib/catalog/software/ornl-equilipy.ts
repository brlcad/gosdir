import type { Project } from '../types';

export default {
  id: 'ornl-equilipy',
  name: 'Equilipy',
  summary:
    'A Python package for calculating and analyzing thermodynamic equilibrium in materials and energy applications.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Energy Efficiency and Renewable Energy (EERE), Vehicle Technologies Office; Oak Ridge National Laboratory (ORNL), contract AC05-00OR22725.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and thermodynamics',
  openSourceYear: 2023,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/equilipy',
  officialUrl: 'https://ornl.github.io/Equilipy/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/124191',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'materials science', 'thermodynamics', 'python'],
} satisfies Project;
