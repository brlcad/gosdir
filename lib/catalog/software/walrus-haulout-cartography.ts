import type { Project } from '../types';

export default {
  id: 'walrus-haulout-cartography',
  name: 'Automated Walrus Haulout Cartography',
  summary:
    'A USGS PyQGIS script and layout/style templates for mapping walrus-haulout satellite imagery and derived outlines.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2024,
  license: 'CC0-1.0; U.S. public domain',
  repository:
    'https://code.usgs.gov/asc/automated-cartography-satellite-imagery-and-derived-data',
  officialUrl: 'https://www.usgs.gov/software/automated-walrus-haulout-cartography',
  evidenceUrl:
    'https://www.usgs.gov/centers/alaska-science-center/science/asc-walrus-thematic-data-releases',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'walrus', 'qgis', 'cartography'],
} satisfies Project;
