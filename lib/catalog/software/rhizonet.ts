import type { Project } from '../types';

export default {
  id: 'rhizonet',
  name: 'RhizoNET',
  summary:
    'A Python deep-learning pipeline for semantic segmentation of plant roots.',
  sponsor:
    'Lawrence Berkeley National Laboratory, U.S. Department of Energy Office of Science, RESTOR-C research',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Plant science and machine learning',
  openSourceYear: 2023,
  license:
    'MIT for current repository source; an earlier public source version used BSD-2-Clause',
  repository: 'https://github.com/lbl-camera/rhizonet',
  officialUrl: 'https://amcr.lbl.gov/software-portal/amcr-software-directory/',
  evidenceUrl: 'https://www.nature.com/articles/s41598-024-63497-8',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'berkeley lab', 'plant roots', 'segmentation', 'deep learning'],
} satisfies Project;
