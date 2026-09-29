import type { Project } from '../types';

export default {
  id: 'powersheds',
  name: 'Powersheds',
  summary:
    'An ORNL-maintained Rust/Python simulator for river–reservoir cascades and hydropower generation, released with installable source, examples, and a Python API.',
  sponsor: 'Oak Ridge National Laboratory; current rights holders include UT-Battelle and Tennessee Technological University',
  agencyIds: ['us-doe-oak-ridge-national-laboratory'],
  geography: 'United States (Tennessee)',
  jurisdiction: 'U.S. federal',
  domain: 'Water management',
  openSourceYear: 2025,
  license: 'BSD-3-Clause (initial 2025 grant was BSD-2-Clause)',
  repository: 'https://code.ornl.gov/hydrochipps/powersheds',
  officialUrl: 'https://impact.ornl.gov/en/publications/powersheds/',
  evidenceUrl: 'https://www.ornl.gov/staff-profile/sean-turner',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'ornl', 'hydropower', 'simulation', 'rust', 'python'],
} satisfies Project;
