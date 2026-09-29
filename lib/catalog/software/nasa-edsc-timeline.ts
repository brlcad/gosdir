import type { Project } from '../types';

export default {
  id: 'nasa-edsc-timeline',
  name: '@edsc/timeline',
  summary:
    'NASA Earthdata Search Client’s versioned React timeline component for navigating and selecting temporal ranges in Earth-science data.',
  sponsor: 'NASA EOSDIS Earthdata Search Client (EDSC), Goddard Space Flight Center',
  agencyIds: ['us-nasa-goddard-space-flight-center', 'us-nasa'],
  geography: 'United States federal Earth-science data software; NASA Goddard Space Flight Center, Greenbelt, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science user interface',
  openSourceYear: 2015,
  license: 'Apache-2.0 for NASA’s timeline package source; React and other dependencies retain their separate terms',
  repository: 'https://github.com/nasa/edsc-timeline',
  officialUrl: 'https://github.com/nasa/edsc-timeline',
  evidenceUrl: 'https://www.npmjs.com/package/%40edsc/timeline',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'eosdis', 'goddard', 'react', 'earthdata-search', 'component-library'],
} satisfies Project;
