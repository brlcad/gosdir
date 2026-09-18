import type { Project } from '../types';

export default {
  id: 'sarpy',
  name: 'SarPy',
  summary:
    'An NGA-developed Python library for synthetic-aperture-radar and geospatial data; the repository is consolidating toward SARKit and flags legacy-reader deprecations for SarPy 2.0.',
  sponsor: 'National Geospatial-Intelligence Agency',
  agencyIds: ['us-nga'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial',
  license: 'MIT',
  repository: 'https://github.com/ngageoint/sarpy',
  officialUrl: 'https://github.com/ngageoint/sarpy',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['nga', 'radar', 'imagery', 'python'],
} satisfies Project;
