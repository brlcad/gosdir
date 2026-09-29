import type { Project } from '../types';

export default {
  id: 'agridata',
  name: 'agridata.ch',
  summary:
    'Switzerland’s agricultural data-exchange platform for sharing sector data securely across participating organizations.',
  sponsor: 'Swiss Federal Office for Agriculture',
  agencyIds: ['ch-federal-office-for-agriculture'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Agricultural data',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/agridata-ch/backend',
  officialUrl: 'https://www.blw.admin.ch/de/anwendung-agridata',
  evidenceUrl: 'https://www.blw.admin.ch/de/gold-fuer-agridata',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'agriculture', 'data exchange', 'interoperability'],
} satisfies Project;
