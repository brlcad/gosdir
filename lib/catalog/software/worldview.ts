import type { Project } from '../types';

export default {
  id: 'worldview',
  name: 'NASA Worldview',
  summary:
    'NASA ESDIS web application for interactively browsing and downloading global, full-resolution satellite imagery.',
  sponsor: 'National Aeronautics and Space Administration (NASA), Goddard Space Flight Center, Earth Science Data and Information System (ESDIS)',
  agencyIds: ['us-nasa-goddard-space-flight-center', 'us-nasa'],
  geography: 'United States federal service providing global satellite-imagery coverage',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science and satellite imagery',
  openSourceYear: 2014,
  license: 'NASA Open Source Agreement 1.3 (NASA-1.3), project agreement GSC-17111-1 for Worldview Satellite Imagery and Downloading Tool',
  repository: 'https://github.com/nasa-gibs/worldview',
  officialUrl: 'https://worldview.earthdata.nasa.gov/',
  evidenceUrl: 'https://github.com/nasa-gibs/worldview/blob/main/README.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'earth science', 'satellite imagery', 'earth observation', 'geospatial'],
} satisfies Project;
