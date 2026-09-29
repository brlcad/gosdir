import type { Project } from '../types';

export default {
  id: 'space-time-point-process-models',
  name: 'Marginalized Space-time Point Process Models',
  summary:
    'USGS R/INLA model code for inferring animal habitat selection and species distribution from telemetry data.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Denali, Alaska; model case study)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2025,
  license: 'CC0-1.0; U.S. public domain',
  repository:
    'https://code.usgs.gov/asc/space-time-point-process-model-for-animal-resource-selection',
  officialUrl:
    'https://www.usgs.gov/software/marginalized-space-time-point-process-models-inferring-animal-resource-selection-and',
  evidenceUrl:
    'https://www.usgs.gov/publications/marginalizing-time-habitat-selection-and-species-distribution-models-improves',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'animal telemetry', 'species distribution', 'r'],
} satisfies Project;
