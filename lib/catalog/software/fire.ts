import type { Project } from '../types';

export default {
  id: 'fire',
  name: 'FIRe',
  summary:
    'A Spanish public-administration platform that integrates electronic-signature workflows using local or cloud certificates.',
  sponsor:
    'Spanish State Agency for Digital Administration (AEAD; successor to SGAD)',
  agencyIds: ['es-state-agency-digital-administration'],
  geography: 'Spain',
  jurisdiction: 'International',
  domain: 'Digital signatures',
  openSourceYear: 2017,
  license:
    'GPL-2.0-or-later / EUPL-1.1 (both stated by upstream; optional connectors have separate terms)',
  repository: 'https://github.com/ctt-gob-es/fire',
  officialUrl: 'https://administracionelectronica.gob.es/ctt/fire',
  evidenceUrl: 'https://administracionelectronica.gob.es/ctt/fire/descargas',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['spain', 'electronic signatures', 'public services', 'identity'],
} satisfies Project;
