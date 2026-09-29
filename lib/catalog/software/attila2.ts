import type { Project } from '../types';

export default {
  id: 'attila2',
  name: 'ATtILA Toolbox',
  summary:
    'EPA EnviroAtlas toolbox for calculating landscape, human-interaction, and riparian metrics in ArcGIS.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa-ord'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geospatial data',
  openSourceYear: 2025,
  license:
    'MIT (repository toolbox source; proprietary ArcGIS and extensions separately licensed)',
  repository: 'https://github.com/USEPA/ATtILA2',
  officialUrl: 'https://www.epa.gov/enviroatlas/attila-toolbox',
  evidenceUrl:
    'https://github.com/USEPA/ATtILA2/commit/f243342420e8083d8378f4213e2d284f15e248d9',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'landscape', 'geospatial', 'arcgis'],
} satisfies Project;
