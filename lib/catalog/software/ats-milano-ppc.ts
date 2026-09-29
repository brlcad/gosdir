import type { Project } from '../types';

export default {
  id: 'ats-milano-ppc',
  name: 'ATS Milano Planning and Control Platform (PP&C)',
  summary:
    'ATS Milano’s web platform for organizational planning, objectives, cost and revenue control, investment tracking, reporting, and performance evaluation.',
  sponsor: 'Agenzia di Tutela della Salute della Città Metropolitana di Milano (ATS Milano)',
  agencyIds: ['it-ats-milano'],
  geography: 'Italy (Metropolitan City of Milan, Lombardy)',
  jurisdiction: 'International',
  domain: 'Public administration management',
  openSourceYear: 2020,
  license: 'AGPL-3.0 for first-party application source under the root LICENSE; bundled dependencies have separate notices/licenses',
  repository: 'https://github.com/atsmilano/Controllo-di-gestione',
  officialUrl: 'https://atsmilano.github.io/Controllo-di-gestione/',
  evidenceUrl:
    'https://www.ats-milano.it/ats/bandi-gara/avviso-indagine-preliminare-mercato-avente-ad-oggetto-servizi-supporto-corredo-della-fonitura-cloud',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'ats-milano', 'planning', 'budgeting', 'performance-management'],
} satisfies Project;
