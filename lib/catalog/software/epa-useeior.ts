import type { Project } from '../types';

export default {
  id: 'epa-useeior',
  name: 'useeior',
  summary:
    'An R package for building and using United States environmentally extended input-output models.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Sustainable Materials Management program',
  agencyIds: ['us-epa', 'us-epa-ord'],
  geography: 'United States national and state economic-environmental models',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental and economic modeling',
  openSourceYear: 2019,
  license:
    'MIT currently; initial public licensed source was dedicated under CC0 1.0',
  repository: 'https://github.com/USEPA/useeior',
  officialUrl:
    'https://www.epa.gov/land-research/tools-industrial-ecology-modeling-tiem',
  evidenceUrl:
    'https://www.epa.gov/land-research/us-environmentally-extended-input-output-useeio-models',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'useeio', 'r', 'input-output', 'modeling'],
} satisfies Project;
