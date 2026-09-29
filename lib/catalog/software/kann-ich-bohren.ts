import type { Project } from '../types';

export default {
  id: 'kann-ich-bohren',
  name: 'Kann ich bohren? (Drillcheck)',
  summary:
    'A Swiss government map service for checking whether geothermal-probe drilling is permitted at a location, using cantonal geodata.',
  sponsor: 'Swiss Federal Office of Energy',
  agencyIds: ['ch-federal-office-of-energy'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Energy',
  openSourceYear: 2025,
  license: 'AGPL-3.0-only (current frontend; initially GPL-3.0)',
  repository: 'https://github.com/SFOE/drill-frontend',
  officialUrl: 'https://www.bfe.admin.ch/de/kann-ich-bohren',
  evidenceUrl: 'https://github.com/SFOE/drill-frontend/commit/24fd0aec8345bccc2e207176d5a29d0344944f76',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'geothermal energy', 'geospatial', 'public service'],
} satisfies Project;
