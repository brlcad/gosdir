import type { Project } from '../types';

export default {
  id: 'visualize',
  name: 'Visualize',
  summary:
    'Swiss federal web application for creating, publishing, and embedding visualizations from open government data.',
  sponsor:
    'Federal Office for the Environment (FOEN), with other Swiss federal authorities',
  agencyIds: ['ch-foen'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Data visualization',
  openSourceYear: 2020,
  license: 'BSD-3-Clause (application source)',
  repository: 'https://github.com/visualize-admin/visualization-tool',
  officialUrl: 'https://visualize.admin.ch/',
  evidenceUrl:
    'https://github.com/visualize-admin/visualization-tool/commit/02d8d648b4bff7c20f3ba7f3f9e5be30dfeeb315',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'open data', 'visualization', 'charts'],
} satisfies Project;
