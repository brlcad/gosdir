import type { Project } from '../types';

export default {
  id: 'cfdverify',
  name: 'CFDverify',
  summary:
    'A Python package for estimating discretization error and supporting solution verification in CFD and other scientific codes.',
  sponsor:
    'U.S. Department of Energy (DOE), Oak Ridge National Laboratory (ORNL); contract AC05-00OR22725',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational fluid dynamics and solution verification',
  openSourceYear: 2025,
  license:
    'MIT (CFDverify repository source; Python dependencies and example data separately licensed)',
  repository: 'https://github.com/ORNL/cfd-verify',
  officialUrl: 'https://github.com/ORNL/cfd-verify',
  evidenceUrl: 'https://impact.ornl.gov/en/publications/cfdverify/',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'cfd',
    'solution verification',
    'scientific computing',
    'python',
  ],
} satisfies Project;
