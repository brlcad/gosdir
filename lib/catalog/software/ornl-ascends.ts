import type { Project } from '../types';

export default {
  id: 'ornl-ascends',
  name: 'ASCENDS',
  summary:
    'A desktop toolkit that provides accessible interfaces for data analysis and machine-learning workflows.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), Office of Energy Efficiency and Renewable Energy (EERE), Vehicle Technologies Office / Propulsion Materials Program',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data science',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/ornlpmcp/ascends',
  officialUrl: 'https://github.com/ornlpmcp/ASCENDS',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/48766',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'data science', 'machine learning', 'desktop'],
} satisfies Project;
