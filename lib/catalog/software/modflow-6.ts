import type { Project } from '../types';

export default {
  id: 'modflow-6',
  name: 'MODFLOW 6',
  summary:
    'The U.S. Geological Survey’s modular hydrologic simulator for groundwater-flow and related environmental modeling.',
  sponsor: 'U.S. Geological Survey',
  agencyIds: ['us-usgs'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2017,
  license: 'CC0-1.0 / Public domain',
  repository: 'https://github.com/MODFLOW-ORG/modflow6',
  officialUrl:
    'https://www.usgs.gov/software/modflow-6-usgs-modular-hydrologic-model',
  evidenceUrl:
    'https://www.usgs.gov/news/technical-announcement/groundwater-modeling-software-modflow-6-now-available',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['usgs', 'groundwater', 'hydrology'],
} satisfies Project;
