import type { Project } from '../types';

export default {
  id: 'lanl-j3d',
  name: 'J3D',
  summary:
    'A C library for fast, robust polyhedral intersections with higher-order geometry support.',
  sponsor:
    'U.S. Department of Energy Advanced Simulation and Computing (ASC) / Office of Science ASCR; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & computational geometry',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/j3d',
  officialUrl: 'https://www.osti.gov/doecode/biblio/163112',
  evidenceUrl: 'https://internationalmeshingroundtable.com/imr33/program/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'c',
    'computational geometry',
    'mesh',
    'scientific computing',
  ],
} satisfies Project;
