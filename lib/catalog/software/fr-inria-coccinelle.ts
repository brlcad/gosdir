import type { Project } from '../types';

export default {
  id: 'fr-inria-coccinelle',
  name: 'Coccinelle',
  summary:
    'A program-matching and source-transformation tool for C and its SmPL semantic-patch language, extensively used for Linux-kernel maintenance.',
  sponsor: 'Inria WHISPER project team at Inria Paris Centre',
  agencyIds: ['fr-inria'],
  geography: 'Paris, Île-de-France, France',
  jurisdiction: 'International',
  domain: 'Software development & static analysis',
  openSourceYear: 2008,
  license: 'GNU General Public License version 2 only (GPL-2.0-only)',
  repository: 'https://gitlab.inria.fr/coccinelle/coccinelle',
  officialUrl: 'https://coccinelle.gitlabpages.inria.fr/website/',
  evidenceUrl: 'https://radar.inria.fr/report/2025/whisper/index.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'static-analysis', 'linux', 'c'],
} satisfies Project;
