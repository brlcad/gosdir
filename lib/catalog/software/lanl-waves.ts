import type { Project } from '../types';

export default {
  id: 'lanl-waves',
  name: 'WAVES',
  summary:
    'An engineering workflow tool for coordinating parametric studies, simulation builds, and computational tasks using SCons.',
  sponsor:
    'Los Alamos National Laboratory Advanced Engineering Analysis, U.S. Department of Energy and National Nuclear Security Administration',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe-nnsa', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; engineering simulation workflows',
  jurisdiction: 'U.S. federal',
  domain: 'Engineering simulation and workflow tools',
  openSourceYear: 2023,
  license:
    'BSD-3-Clause for WAVES repository source; external solvers, data, and dependencies are separate',
  repository: 'https://github.com/lanl-aea/waves',
  officialUrl: 'https://github.com/lanl-aea/waves',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/2999887',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'engineering', 'simulation', 'workflow', 'python'],
} satisfies Project;
