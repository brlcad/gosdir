import type { Project } from '../types';

export default {
  id: 'epa-wmost',
  name: 'Watershed Management Optimization Support Tool (WMOST)',
  summary:
    'A decision-support model for evaluating and optimizing local watershed and water-resource management options.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa', 'us-epa-ord'],
  geography:
    'Local and small watersheds; methods are applicable across U.S. jurisdictions',
  jurisdiction: 'U.S. federal',
  domain: 'Watershed and water-resource management',
  openSourceYear: 2026,
  license:
    'MIT for WMOST source in the repository; dependencies and separately distributed materials retain separate terms',
  repository: 'https://github.com/USEPA/WMOST',
  officialUrl: 'https://www.epa.gov/hydrowq/wmost',
  evidenceUrl: 'https://www.epa.gov/hydrowq/wmost',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'watershed', 'water resources', 'decision support'],
} satisfies Project;
