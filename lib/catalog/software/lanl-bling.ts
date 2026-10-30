import type { Project } from '../types';

export default {
  id: 'lanl-bling',
  name: 'BLING',
  summary:
    'Bounded Linearized Iteration for Natural Gas is a MATLAB algorithm for steady-state gas-pipeline optimization and scheduling.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory LDRD',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Energy systems and optimization',
  openSourceYear: 2026,
  license: 'BSD-3-Clause for the BLING repository source',
  repository: 'https://github.com/lanl-ansi/BLING',
  officialUrl: 'https://www.osti.gov/doecode/biblio/180559',
  evidenceUrl: 'https://arxiv.org/html/2605.21620',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'natural gas', 'optimization', 'energy'],
} satisfies Project;
