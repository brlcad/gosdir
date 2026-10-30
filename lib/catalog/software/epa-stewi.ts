import type { Project } from '../types';

export default {
  id: 'epa-stewi',
  name: 'StEWI',
  summary:
    'Python modules for retrieving, standardizing, matching, and combining facility-level emissions and waste-inventory data.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Tools for Industrial Ecology Modeling (TIEM)',
  agencyIds: ['us-epa-ord'],
  geography: 'United States facility-level emissions and waste inventories',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental data and industrial ecology',
  openSourceYear: 2018,
  license: 'MIT (current; earlier source history used GPL-3.0)',
  repository: 'https://github.com/USEPA/standardizedinventories',
  officialUrl:
    'https://www.epa.gov/land-research/tools-industrial-ecology-modeling-tiem',
  evidenceUrl:
    'https://www.epa.gov/land-research/tools-industrial-ecology-modeling-tiem',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'python', 'industrial ecology', 'emissions', 'waste'],
} satisfies Project;
