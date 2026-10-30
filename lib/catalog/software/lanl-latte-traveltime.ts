import type { Project } from '../types';

export default {
  id: 'lanl-latte-traveltime',
  name: 'LATTE TravelTime',
  summary: 'Travel-time tomography software based on the Eikonal equation.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Seismology & geophysics',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/latte_traveltime',
  officialUrl: 'https://github.com/lanl/latte_traveltime',
  evidenceUrl: 'https://academic.oup.com/gji/article/241/2/1275/8046728',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'seismology',
    'tomography',
    'geophysics',
    'python',
  ],
} satisfies Project;
