import type { Project } from '../types';

export default {
  id: 'cliente-afirma',
  name: 'Cliente @firma',
  summary:
    'A Spanish-government client suite, including AutoFirma, for authentication, document signing, encryption, and government-compatible browser, desktop, and mobile signature workflows.',
  sponsor: 'State Agency for Digital Administration',
  agencyIds: ['es-state-agency-digital-administration'],
  geography: 'Spain',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2011,
  license: 'GPL-2.0-or-later OR EUPL-1.1-or-later',
  repository: 'https://github.com/ctt-gob-es/clienteafirma',
  officialUrl: 'https://administracionelectronica.gob.es/ctt/clienteafirma',
  evidenceUrl: 'https://administracionelectronica.gob.es/ctt/clienteafirma/mas',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['spain', 'electronic signatures', 'cryptography'],
} satisfies Project;
