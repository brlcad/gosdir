import type { Project } from '../types';

export default {
  id: 'icef-core',
  name: 'ICEF-Core',
  summary:
    'The Provincia autonoma di Trento family-benefit eligibility and case-management platform.',
  sponsor: 'Provincia autonoma di Trento',
  agencyIds: ['it-provincia-autonoma-trento'],
  geography: 'Trentino, Italy',
  jurisdiction: 'International',
  domain: 'Social services and benefits administration',
  openSourceYear: 2025,
  license: 'AGPL-3.0-or-later (root, frontend, and backend source)',
  repository: 'https://github.com/ProvinciaAutonomaTrento/ICEF-Core',
  officialUrl:
    'https://icef.cloud.provincia.tn.it/apps/app-organizzazioni/it/accedi',
  evidenceUrl:
    'https://www.ufficiostampa.provincia.tn.it/Comunicati/Servizi-pubblici-digitali-per-i-cittadini-oltre-10.000-pratiche-online-nel-primo-trimestre-2026',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['Italy', 'Trentino', 'social benefits', 'case management', 'AGPL-3.0'],
} satisfies Project;
