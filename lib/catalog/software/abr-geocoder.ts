import type { Project } from '../types';

export default {
  id: 'abr-geocoder',
  name: 'ABR Geocoder',
  summary:
    'Japan’s Digital Agency address-normalization and geocoding software for matching records to the national Address Base Registry.',
  sponsor: 'Digital Agency of Japan',
  agencyIds: ['jp-digital-agency'],
  geography: 'Japan',
  jurisdiction: 'International',
  domain: 'Geospatial',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/digital-go-jp/abr-geocoder',
  officialUrl: 'https://lp.geocoder.address-br.digital.go.jp/',
  evidenceUrl: 'https://www.digital.go.jp/policies/base_registry_address',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['japan', 'address', 'geocoding', 'base registry'],
} satisfies Project;
