import type { Project } from '../types';

export default {
  id: 'nga-geopackage',
  name: 'NGA GeoPackage',
  summary:
    'A suite of NGA software development kits for standards-based geospatial storage; the project remains available but is in maintenance mode.',
  sponsor: 'National Geospatial-Intelligence Agency',
  agencyIds: ['us-nga'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial',
  license: 'MIT',
  repository: 'https://github.com/ngageoint/GeoPackage',
  officialUrl: 'https://github.com/ngageoint/GeoPackage',
  status: 'Maintained',
  verified: '2026-09-12',
  tags: ['nga', 'geopackage', 'sdk', 'maintenance mode'],
} satisfies Project;
