import type { Project } from '../types';

export default {
  id: 'mtecs3d',
  name: 'MTECS3D',
  summary:
    'A tool for estimating rotational diffusion from X-ray photon correlation spectroscopy using multi-tiered estimation.',
  sponsor:
    'Lawrence Berkeley National Laboratory CAMERA, U.S. Department of Energy Office of Science',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'X-ray science and scientific computing',
  openSourceYear: 2024,
  license: 'GPL-3.0 for repository source',
  repository: 'https://github.com/lbl-camera/MTECS3D',
  officialUrl: 'https://www.osti.gov/doecode/biblio/174682',
  evidenceUrl:
    'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.214305',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'berkeley lab',
    'x-ray science',
    'spectroscopy',
    'scientific computing',
  ],
} satisfies Project;
