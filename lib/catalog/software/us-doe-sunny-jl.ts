import type { Project } from '../types';

export default {
  id: 'us-doe-sunny-jl',
  name: 'Sunny.jl',
  summary:
    'A Julia package for quantum spin dynamics and magnetic-material modeling, developed by researchers at Oak Ridge and Los Alamos national laboratories with DOE support.',
  sponsor:
    'U.S. Department of Energy Office of Science; Oak Ridge and Los Alamos National Laboratories',
  agencyIds: [
    'us-doe-office-of-science',
    'us-doe-oak-ridge-national-laboratory',
    'us-doe-los-alamos-national-laboratory',
  ],
  geography:
    'Not geographically restricted; developed by researchers at Oak Ridge, Tennessee and Los Alamos, New Mexico',
  jurisdiction: 'U.S. federal',
  domain: 'Physics & materials science',
  openSourceYear: 2022,
  license: 'MIT for Sunny.jl source code',
  repository: 'https://github.com/SunnySuite/Sunny.jl',
  officialUrl: 'https://joss.theoj.org/papers/10.21105/joss.08138',
  evidenceUrl: 'https://joss.theoj.org/papers/10.21105/joss.08138',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['doe', 'ornl', 'lanl', 'physics', 'materials science', 'julia'],
} satisfies Project;
