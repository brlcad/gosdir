import type { Project } from '../types';

export default {
  id: 'cmr-opensearch',
  name: 'NASA CMR OpenSearch',
  summary:
    'NASA EOSDIS’s deployed OpenSearch 1.1 web application and API for discovering collections and granules in NASA’s Common Metadata Repository.',
  sponsor: 'NASA Earth Observing System Data and Information System (EOSDIS), Common Metadata Repository team',
  agencyIds: ['us-nasa'],
  geography: 'United States federal Earth science data infrastructure; NASA EOSDIS/CMR',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science data',
  openSourceYear: 2017,
  license: 'Apache-2.0 for NASA-authored application source; bundled dependencies have separate notices/licenses',
  repository: 'https://github.com/nasa/cmr-opensearch',
  officialUrl: 'https://cmr.earthdata.nasa.gov/opensearch',
  evidenceUrl: 'https://cmr.earthdata.nasa.gov/opensearch/home/docs',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'eosdis', 'cmr', 'opensearch', 'earth-science'],
} satisfies Project;
