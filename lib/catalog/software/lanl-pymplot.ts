import type { Project } from '../types';

export default {
  id: 'lanl-pymplot',
  name: 'Pymplot',
  summary:
    'A lightweight Python CLI and library for plotting one-, two- and three-dimensional scalar data.',
  sponsor:
    'Los Alamos National Laboratory; U.S. Department of Energy / National Nuclear Security Administration',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geophysics & scientific visualization',
  openSourceYear: 2020,
  license:
    'BSD-3-Clause for repository source code; user-provided data and third-party dependencies have separate terms',
  repository: 'https://github.com/lanl/pymplot',
  officialUrl: 'https://github.com/lanl/pymplot',
  evidenceUrl: 'https://academic.oup.com/gji/article/241/2/1275/8046728',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'scientific visualization',
    'geophysics',
    'python',
  ],
} satisfies Project;
