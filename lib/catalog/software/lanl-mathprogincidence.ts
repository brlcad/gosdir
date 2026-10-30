import type { Project } from '../types';

export default {
  id: 'lanl-mathprogincidence',
  name: 'MathProgIncidence.jl',
  summary:
    'A Julia package for analyzing optimization-model variable-incidence structure, formerly named JuMPIn.jl.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory LDRD',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mathematical optimization',
  openSourceYear: 2023,
  license: 'BSD-3-Clause for this package repository',
  repository: 'https://github.com/lanl-ansi/MathProgIncidence.jl',
  officialUrl: 'https://www.osti.gov/doecode/biblio/105530',
  evidenceUrl:
    'https://github.com/lanl-ansi/MathProgIncidence.jl/releases/tag/v0.3.0',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'julia', 'optimization', 'mathematics'],
} satisfies Project;
