import type { Project } from '../types';

export default {
  id: 'mojxml2geojson',
  name: 'mojxml2geojson',
  summary:
    'Japan’s Digital Agency converter for turning Ministry of Justice registry-map XML into GeoJSON for geospatial reuse.',
  sponsor: 'Digital Agency of Japan (building on an earlier Ministry of Agriculture converter)',
  agencyIds: ['jp-digital-agency'],
  geography: 'Japan',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/digital-go-jp/mojxml2geojson',
  officialUrl: 'https://www.digital.go.jp/news/4b7250a3-3fcf-4b83-8d52-4bb131e1ba9d',
  evidenceUrl: 'https://www.digital.go.jp/policies/base_registry_address',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['japan', 'geospatial', 'geojson', 'registry maps'],
} satisfies Project;
