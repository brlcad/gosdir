import type { Project } from '../types';

export default {
  id: 'it-genova-fascicolo-del-cittadino',
  name: 'Fascicolo del Cittadino',
  summary:
    'The Comune di Genova’s digital citizen portal for municipal documents, applications, notices, payments, and service requests.',
  sponsor: 'Comune di Genova — Ufficio Agenda Digitale e Progetti di Innovazione',
  agencyIds: ['it-comune-di-genova'],
  geography: 'Italy (Genoa, Liguria)',
  jurisdiction: 'International',
  domain: 'Digital government & citizen services',
  openSourceYear: 2024,
  license:
    'EUPL-1.2 for first-party portal source in this repository (the README file-list label conflicts with the root grant and publiccode declaration); separately licensed bundled components retain their own notices',
  repository: 'https://github.com/ComuneDiGenova/FascicoloDelCittadino',
  officialUrl: 'https://fascicolo.comune.genova.it/portale/web/homepage/home',
  evidenceUrl:
    'https://www.comune.genova.it/servizi/ambiente/fascicolo-del-cittadino',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'genoa', 'citizen portal', 'digital government', 'municipal services'],
} satisfies Project;
