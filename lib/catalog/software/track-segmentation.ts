import type { Project } from '../types';

export default {
  id: 'track-segmentation',
  name: 'Track Segmentation: Stops and Movements',
  summary:
    'A USGS R utility that segments animal-tracking time series into stops and movements using configurable thresholds.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (federal; reusable animal-tracking workflows)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2025,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/track-segmentation',
  officialUrl:
    'https://www.usgs.gov/software/track-segmentation-stops-and-movements',
  evidenceUrl:
    'https://code.usgs.gov/asc/track-segmentation/-/raw/main/README.md',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'animal tracking', 'ecology', 'r'],
} satisfies Project;
