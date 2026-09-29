import type { Project } from '../types';

export default {
  id: 'thinned-point-process-models',
  name: 'Thinned Point Process Models',
  summary:
    'USGS R models for estimating spatial wildlife survival and mortality risk from telemetry observations.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska wildlife case studies)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2024,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/thinned-point-process-models',
  officialUrl:
    'https://www.usgs.gov/software/thinned-point-process-models-telemetry-data',
  evidenceUrl:
    'https://www.usgs.gov/publications/estimating-spatially-explicit-survival-and-mortality-risk-telemetry-data-thinned-point',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'wildlife survival', 'animal telemetry', 'r'],
} satisfies Project;
