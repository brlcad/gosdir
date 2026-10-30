import type { Project } from '../types';

export default {
  id: 'epa-ssn2',
  name: 'SSN2',
  summary:
    'An R package for spatial statistical modeling and prediction on stream networks, including models based on in-stream distances.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa-ord'],
  geography:
    'U.S. federal stream-network science; statistical methods are reusable for stream data elsewhere',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental statistics',
  openSourceYear: 2023,
  license: 'GPL-3.0',
  repository: 'https://github.com/USEPA/SSN2',
  officialUrl: 'https://usepa.github.io/SSN2/',
  evidenceUrl: 'https://assessments.epa.gov/risk/document/%26deid%3D359460',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'r', 'stream networks', 'spatial statistics', 'water'],
} satisfies Project;
