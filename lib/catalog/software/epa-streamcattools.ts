import type { Project } from '../types';

export default {
  id: 'epa-streamcattools',
  name: 'StreamCatTools',
  summary:
    'An R client for accessing StreamCat and LakeCat APIs and watershed datasets.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Public Health and Environmental Assessment',
  agencyIds: ['us-epa-cphea'],
  geography:
    'Conterminous United States stream segments and lakes represented in EPA StreamCat and LakeCat',
  jurisdiction: 'U.S. federal',
  domain: 'Water and watershed data',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/USEPA/StreamCatTools',
  officialUrl: 'https://usepa.github.io/StreamCatTools/',
  evidenceUrl: 'https://assessments.epa.gov/risk/document/%26deid%3D365281',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'cphea', 'r', 'streamcat', 'lakecat', 'watersheds'],
} satisfies Project;
