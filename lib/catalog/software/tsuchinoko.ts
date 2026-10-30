import type { Project } from '../types';

export default {
  id: 'tsuchinoko',
  name: 'Tsuchinoko',
  summary:
    'An agent framework for adaptive experimental design and optimization.',
  sponsor:
    'Lawrence Berkeley National Laboratory CAMERA, U.S. Department of Energy Office of Science',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing and experimental design',
  openSourceYear: 2021,
  license: 'GPL-3.0 for repository source',
  repository: 'https://github.com/lbl-camera/tsuchinoko',
  officialUrl: 'https://amcr.lbl.gov/software-portal/amcr-software-directory/',
  evidenceUrl: 'https://github.com/lbl-camera/tsuchinoko/releases/tag/1.2.0',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'berkeley lab',
    'adaptive experiments',
    'optimization',
    'python',
  ],
} satisfies Project;
