import type { Project } from '../types';

export default {
  id: 'epa-tots',
  name: 'Trade-off Tool for Sampling (TOTS)',
  summary:
    'A GIS application for designing incident-specific sampling plans and estimating their time, cost, and resource requirements.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Environmental Solutions and Emergency Response, Homeland Security Research Program',
  agencyIds: ['us-epa-ceser'],
  geography:
    'Incident-specific sampling plans for U.S. emergency response; locations are user-defined',
  jurisdiction: 'U.S. federal',
  domain: 'Emergency response and sampling',
  openSourceYear: 2020,
  license: 'CC0-1.0',
  repository: 'https://github.com/USEPA/Trade-off_Tool_for_Sampling',
  officialUrl: 'https://tots.epa.gov/',
  evidenceUrl:
    'https://www.epa.gov/emergency-response-research/sample-collection',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'ceser', 'emergency response', 'sampling', 'gis'],
} satisfies Project;
