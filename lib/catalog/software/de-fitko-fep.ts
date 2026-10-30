import type { Project } from '../types';

export default {
  id: 'de-fitko-fep',
  name: 'Föderales Entwicklungsportal (FEP)',
  summary:
    'A portal for German federal IT documentation, APIs, standards, development resources, and implementation examples.',
  sponsor:
    'German IT-Planungsrat; product management and operation by FITKO (Föderale IT-Kooperation AöR).',
  agencyIds: ['de-it-planungsrat', 'de-fitko'],
  geography:
    'Germany; federal and state administration, with FITKO based in Frankfurt am Main.',
  jurisdiction: 'International',
  domain: 'Federal digital infrastructure and developer documentation',
  openSourceYear: 2022,
  license:
    'EUPL-1.2 for project-owned portal code; authored portal content/data and specified assets are separately licensed CC-BY-4.0 under REUSE.',
  repository: 'https://gitlab.opencode.de/fitko/docs/portal',
  officialUrl: 'https://docs.fitko.de/en/',
  evidenceUrl: 'https://www.fitko.de/produktmanagement',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'germany',
    'fitko',
    'it-planungsrat',
    'developer portal',
    'federal digital government',
  ],
} satisfies Project;
