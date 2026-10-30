import type { Project } from '../types';

export default {
  id: 'lanl-hsi-nerfstudio',
  name: 'HSI-Nerfstudio',
  summary:
    'A hyperspectral-image NeRF pipeline for 3D scene understanding and gas-plume analysis from LWIR imagery.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration, Office of Defense Nuclear Nonproliferation Research & Development (DNN R&D); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Remote sensing & computer vision',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/lanl/hsi-nerfstudio',
  officialUrl: 'https://www.osti.gov/doecode/biblio/177032',
  evidenceUrl: 'https://arxiv.org/abs/2603.05473',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'hyperspectral imaging',
    'remote sensing',
    'computer vision',
    'neural radiance fields',
  ],
} satisfies Project;
