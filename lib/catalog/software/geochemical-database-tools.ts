import type { Project } from '../types';

export default {
  id: 'geochemical-database-tools',
  name: 'USGS Geochemical Database Python Tools',
  summary:
    'ArcGIS Pro and QGIS tools for filtering and reformatting records from the USGS national geochemical sample database.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States and territories',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial data',
  openSourceYear: 2025,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/geochemical-database-python-tools',
  officialUrl:
    'https://www.usgs.gov/software/python-tools-support-geochemical-data-rock-sediment-soil-and-mineral-samples-united-states',
  evidenceUrl:
    'https://code.usgs.gov/asc/geochemical-database-python-tools/-/raw/main/LICENSE.md',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'geochemistry', 'qgis', 'arcgis', 'python'],
} satisfies Project;
