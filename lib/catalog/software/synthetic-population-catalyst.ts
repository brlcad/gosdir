import type { Project } from '../types';

export default {
  id: 'synthetic-population-catalyst',
  name: 'Synthetic Population Catalyst (SPC)',
  summary:
    'Turing Institute tool for assembling synthetic population and activity data for spatial research models in England and Wales.',
  sponsor:
    'Alan Turing Institute, with UKRI/EPSRC support under grant EP/W006022/1',
  agencyIds: ['uk-ukri', 'uk-epsrc'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Data & analytics',
  openSourceYear: 2022,
  license: 'MIT (Synthetic Population Catalyst source)',
  repository: 'https://github.com/alan-turing-institute/uatk-spc',
  officialUrl: 'https://alan-turing-institute.github.io/uatk-spc/',
  evidenceUrl:
    'https://www.turing.ac.uk/about-us/impact/powering-population-models-synthetic-data',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'synthetic population', 'research', 'rust'],
} satisfies Project;
