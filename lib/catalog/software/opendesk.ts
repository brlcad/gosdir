import type { Project } from '../types';

export default {
  id: 'opendesk',
  name: 'openDesk',
  summary:
    'A customisable office and collaboration suite for public administration that combines documents, email, storage, chat, video meetings, projects, tasks, and knowledge tools in one browser workspace.',
  sponsor:
    'Centre for Digital Sovereignty of Public Administration (ZenDiS), commissioned by the German Federal Ministry for Digital Transformation and Government Modernisation',
  agencyIds: ['de-zendis', 'de-bmds'],
  geography: 'Germany',
  jurisdiction: 'International',
  domain: 'Communications',
  openSourceYear: 2023,
  license: 'Apache-2.0',
  repository: 'https://gitlab.opencode.de/bmi/opendesk/deployment/opendesk',
  officialUrl: 'https://www.opendesk.eu/en',
  evidenceUrl: 'https://www.opendesk.eu/en/about',
  status: 'Active',
  verified: '2026-09-29',
  tags: ['germany', 'collaboration', 'office suite', 'digital sovereignty'],
} satisfies Project;
