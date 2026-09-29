import type { Project } from '../types';

export default {
  id: 'decoupage-administratif',
  name: 'Découpage administratif',
  summary:
    'A versioned Etalab JavaScript package providing French administrative-unit reference data; package code is MIT, while distributed data carry Licence Ouverte terms.',
  sponsor: 'French Interministerial Digital Directorate (DINUM/Etalab)',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Geospatial',
  openSourceYear: 2018,
  license: 'MIT (code); Licence Ouverte (data)',
  repository: 'https://github.com/datagouv/decoupage-administratif',
  officialUrl: 'https://github.com/datagouv/decoupage-administratif',
  evidenceUrl: 'https://github.com/datagouv/decoupage-administratif/blob/master/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'administrative boundaries', 'reference data', 'javascript'],
} satisfies Project;
