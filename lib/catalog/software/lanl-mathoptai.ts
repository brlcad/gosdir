import type { Project } from '../types';

export default {
  id: 'lanl-mathoptai',
  name: 'MathOptAI.jl',
  summary:
    'A Julia package that embeds trained machine-learning predictors in JuMP and ExaModels optimization workflows.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory LDRD',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mathematical optimization and machine learning',
  openSourceYear: 2024,
  license: 'BSD-3-Clause for this package repository',
  repository: 'https://github.com/lanl-ansi/MathOptAI.jl',
  officialUrl: 'https://www.osti.gov/doecode/biblio/148816',
  evidenceUrl: 'https://github.com/lanl-ansi/MathOptAI.jl',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'julia', 'optimization', 'machine learning'],
} satisfies Project;
