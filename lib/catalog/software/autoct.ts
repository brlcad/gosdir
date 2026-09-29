import type { Project } from '../types';

export default {
  id: 'autoct',
  name: 'AutoCT',
  summary:
    'A Berkeley Lab software package for automated CT image preprocessing, registration, segmentation, and quantification.',
  sponsor: 'Lawrence Berkeley National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2023,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://github.com/zhbai/AutoCT',
  officialUrl: 'https://doi.org/10.1016/j.softx.2024.101673',
  evidenceUrl:
    'https://github.com/zhbai/AutoCT/commit/eab8567a4b196eb11746d33d15bf3dc845a12cd5',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['department of energy', 'berkeley lab', 'computed tomography', 'imaging'],
} satisfies Project;
