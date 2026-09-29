import type { Project } from '../types';

export default {
  id: 'swiss-federal-map-viewer',
  name: 'Swiss Federal Map Viewer',
  summary:
    'The public map.geo.admin.ch application for exploring and sharing Swiss federal geospatial information.',
  sponsor: 'Swiss Federal Office of Topography (swisstopo)',
  agencyIds: ['ch-swisstopo'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Geospatial services',
  openSourceYear: 2020,
  license: 'BSD-3-Clause (third-party assets separately licensed)',
  repository: 'https://github.com/geoadmin/web-mapviewer',
  officialUrl: 'https://map.geo.admin.ch/',
  evidenceUrl:
    'https://www.geo.admin.ch/dam/en/sd-web/oKKPndDUdbgI/Leaflet-Geoinformation-for-everyone-geo.admin.ch.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'maps', 'geospatial', 'public data'],
} satisfies Project;
