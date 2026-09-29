import type { Project } from '../types';

export default {
  id: 'nasa-cmr',
  name: 'NASA Common Metadata Repository (CMR)',
  summary:
    'NASA EOSDIS’s multi-service metadata platform for ingesting, maintaining, and exposing Earth-science collection and granule records through public search APIs.',
  sponsor: 'NASA Earth Observing System Data and Information System (EOSDIS), Common Metadata Repository team',
  agencyIds: ['us-nasa'],
  geography: 'United States federal Earth science data infrastructure; NASA EOSDIS/CMR',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science data',
  openSourceYear: 2017,
  license: 'Apache-2.0 for NASA-authored CMR source; third-party dependencies have separate notices/licenses',
  repository: 'https://github.com/nasa/Common-Metadata-Repository',
  officialUrl: 'https://cmr.earthdata.nasa.gov/search',
  evidenceUrl: 'https://cmr.earthdata.nasa.gov/search/site/docs/search/api.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'eosdis', 'earth-science', 'metadata', 'search-api'],
} satisfies Project;
