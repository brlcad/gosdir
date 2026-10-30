import type { Project } from '../types';

export default {
  id: 'epa-waters-geoviewer',
  name: 'WATERS GeoViewer',
  summary:
    'A web-based geospatial viewer for exploring national water-resource information and mapped watersheds.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Water (WATERS program)',
  agencyIds: ['us-epa', 'us-epa-office-water'],
  geography:
    'United States national water-resource datasets and mapped watersheds',
  jurisdiction: 'U.S. federal',
  domain: 'Water resources and geospatial analysis',
  openSourceYear: 2025,
  license:
    'CC0 1.0 for repository-authored viewer source; datasets, services, and dependencies retain separate terms',
  repository: 'https://github.com/USEPA/WATERSGeoViewer',
  officialUrl: 'https://www.epa.gov/waterdata/waters-geoviewer',
  evidenceUrl: 'https://www.epa.gov/waterdata/waters-geoviewer',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'office of water', 'waters', 'water resources', 'geospatial'],
} satisfies Project;
