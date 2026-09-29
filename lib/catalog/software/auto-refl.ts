import type { Project } from '../types';

export default {
  id: 'auto-refl',
  name: 'AutoRefl',
  summary:
    'A NIST framework and command-line tool for active-learning neutron-reflectometry experiments, with model-fitting, measurement-planning, and simulation examples.',
  sponsor:
    'National Institute of Standards and Technology, Center for Neutron Research / Center for High Resolution Neutron Scattering',
  agencyIds: ['us-nist'],
  geography:
    'United States (Gaithersburg, Maryland); research methods serve the international neutron-reflectometry community',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2024,
  license: 'Unlicense',
  repository: 'https://github.com/usnistgov/autorefl',
  officialUrl:
    'https://www.nist.gov/programs-projects/chrns-non-equilibrium-structure-materials-initiative/chrns-candor-autonomous-and',
  evidenceUrl:
    'https://www.nist.gov/publications/autorefl-active-learning-neutron-reflectometry-fast-data-acquisition',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nist', 'neutron science', 'active learning', 'scientific software'],
} satisfies Project;
