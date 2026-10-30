import type { Project } from '../types';

export default {
  id: 'ornl-gauntlet',
  name: 'Gauntlet',
  summary:
    'A Python toolkit for calculating building morphology features from building-footprint geometries.',
  sponsor:
    'U.S. Department of Homeland Security, FEMA Response Geospatial Office; U.S. Department of Energy Federal Energy Management Program (FEMP); Oak Ridge National Laboratory (ORNL), contract AC05-00OR22725.',
  agencyIds: [
    'us-doe-oak-ridge-national-laboratory',
    'us-doe',
    'us-dhs-fema',
    'us-dhs',
  ],
  geography:
    'Developed at Oak Ridge, Tennessee, United States; the cited feature-set study covers buildings across the United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial analysis',
  openSourceYear: 2025,
  license: 'MIT License',
  repository: 'https://github.com/ORNL/gauntlet',
  officialUrl: 'https://github.com/ORNL/Gauntlet',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/157761',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'geospatial analysis',
    'building footprints',
    'morphology',
  ],
} satisfies Project;
