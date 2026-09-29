import type { Project } from '../types';

export default {
  id: 'nasa-earthdata-search',
  name: 'NASA Earthdata Search',
  summary:
    'NASA EOSDIS’s public web application for discovering, searching, visualizing, comparing, and accessing Earth-science data across NASA data holdings.',
  sponsor: 'NASA Earth Observing System Data and Information System (EOSDIS), Goddard Space Flight Center',
  agencyIds: ['us-nasa-goddard-space-flight-center', 'us-nasa'],
  geography: 'United States federal Earth-science data infrastructure; NASA Goddard Space Flight Center, Greenbelt, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science data discovery',
  openSourceYear: 2015,
  license: 'Apache-2.0 for the Earthdata Search application source; connected NASA services and third-party dependencies retain separate scopes and terms',
  repository: 'https://github.com/nasa/earthdata-search',
  officialUrl: 'https://software.nasa.gov/software/GSC-17399-1',
  evidenceUrl: 'https://github.com/nasa/earthdata-search',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'eosdis', 'goddard', 'earth-science', 'data-discovery'],
} satisfies Project;
