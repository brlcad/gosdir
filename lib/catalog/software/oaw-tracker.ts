import type { Project } from '../types';

export default {
  id: 'oaw-tracker',
  name: 'Web Accessibility Observatory Tracker (OAW)',
  summary:
    'Spanish-government web crawler and analysis service for public-sector accessibility audits and online diagnostics.',
  sponsor:
    'Secretaría General de Administración Digital and Spain’s digital administration ministry',
  agencyIds: ['es-ministry-digital-transformation-public-service'],
  geography: 'Spain',
  jurisdiction: 'International',
  domain: 'Web accessibility',
  openSourceYear: 2020,
  license:
    'EUPL-1.2 (OAW-authored code; embedded third-party components retain their own terms)',
  repository: 'https://github.com/ctt-gob-es/oaw',
  officialUrl:
    'https://interoperable-europe.ec.europa.eu/collection/spain-center-technology-transfer/solution/web-accessibility-observatory-tracker',
  evidenceUrl: 'https://www.argentina.gob.ar/node/181192',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['spain', 'web accessibility', 'public services', 'software reuse'],
} satisfies Project;
