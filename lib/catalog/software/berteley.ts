import type { Project } from '../types';

export default {
  id: 'berteley',
  name: 'BERTeley',
  summary:
    'A Python toolkit for topic modeling and analysis of scientific publications.',
  sponsor:
    'Lawrence Berkeley National Laboratory CAMERA, U.S. Department of Energy Office of Science, with University of California, Berkeley collaborators',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific literature analysis and machine learning',
  openSourceYear: 2022,
  license: 'BSD-3-Clause-LBNL (OSI-approved variant)',
  repository: 'https://github.com/lbl-camera/berteley',
  officialUrl: 'https://amcr.lbl.gov/software-portal/amcr-software-directory/',
  evidenceUrl:
    'https://www.sciencedirect.com/science/article/pii/S2949719123000419',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'berkeley lab',
    'topic modeling',
    'scientific literature',
    'python',
  ],
} satisfies Project;
