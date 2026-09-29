import type { Project } from '../types';

export default {
  id: 'bis',
  name: 'Buffer Intensity Simulator (BIS)',
  summary:
    'EPA R Shiny application for exploring drinking-water buffer intensity under different chemistry and temperature scenarios.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa-ord'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2024,
  license: 'MIT (application source; dependencies retain separate terms)',
  repository: 'https://github.com/USEPA/BIS',
  officialUrl: 'https://github.com/USEPA/BIS',
  evidenceUrl:
    'https://awwa.onlinelibrary.wiley.com/doi/abs/10.1002/aws2.70006?af=R',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'drinking water', 'chemistry', 'r shiny'],
} satisfies Project;
