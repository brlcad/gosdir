import type { Project } from '../types';

export default {
  id: 'nasa-earthdata-varinfo',
  name: 'earthdata-varinfo',
  summary:
    'NASA EOSDIS’s installable Python package for extracting Earth-science granule variables and generating CMR-compatible UMM-Var metadata records.',
  sponsor: 'NASA EOSDIS, Goddard Earth Sciences Data and Information Services Center (GES DISC)',
  agencyIds: ['us-nasa-goddard-space-flight-center', 'us-nasa'],
  geography: 'United States federal Earth-science data infrastructure; NASA Goddard Space Flight Center, Greenbelt, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science metadata',
  openSourceYear: 2023,
  license: 'Apache-2.0 for earthdata-varinfo source; Python and third-party dependencies retain their own licenses',
  repository: 'https://github.com/nasa/earthdata-varinfo',
  officialUrl: 'https://ntrs.nasa.gov/citations/20230017964',
  evidenceUrl: 'https://github.com/nasa/earthdata-varinfo',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'eosdis', 'goddard', 'earth-science', 'metadata', 'python'],
} satisfies Project;
