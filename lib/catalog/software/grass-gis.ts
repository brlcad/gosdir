import type { Project } from '../types';

export default {
  id: 'grass-gis',
  name: 'GRASS GIS',
  summary:
    'A four-decade geospatial analysis platform created by the U.S. Army Corps of Engineers and now sustained as an OSGeo community project.',
  sponsor: 'OSGeo / NumFOCUS; U.S. Army CERL (origin)',
  agencyIds: ['us-army-cerl'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial',
  license: 'GPL-2.0-or-later',
  repository: 'https://github.com/OSGeo/grass',
  officialUrl: 'https://grass.osgeo.org/about/history/',
  evidenceUrl: 'https://code.mil/oss-faq.html',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['army corps', 'osgeo', 'gis', 'maps'],
} satisfies Project;
