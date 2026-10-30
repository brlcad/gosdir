import type { Project } from '../types';

export default {
  id: 'epa-useeio-widgets',
  name: 'USEEIO widgets',
  summary:
    'React and JavaScript components for embedding USEEIO economic and environmental model visualizations in web pages.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Sustainable Materials Management program',
  agencyIds: ['us-epa', 'us-epa-ord'],
  geography:
    'United States; reusable visualization components for USEEIO models',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental and economic modeling',
  openSourceYear: 2020,
  license:
    'CC0 1.0 Universal for repository-authored source; dependencies retain separate terms',
  repository: 'https://github.com/USEPA/useeio-widgets',
  officialUrl:
    'https://www.epa.gov/land-research/tools-industrial-ecology-modeling-tiem',
  evidenceUrl:
    'https://www.epa.gov/land-research/tools-industrial-ecology-modeling-tiem',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'useeio', 'visualization', 'react', 'javascript'],
} satisfies Project;
