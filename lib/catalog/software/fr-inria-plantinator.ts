import type { Project } from '../types';

export default {
  id: 'fr-inria-plantinator',
  name: 'Plantinator',
  summary:
    'The Botascopia application for managing plant morphological data and automatically generating botanical identification keys.',
  sponsor: 'Inria EPICURE team, in partnership with Université de Rennes',
  agencyIds: ['fr-inria', 'fr-university-rennes'],
  geography: 'Rennes, Brittany, France',
  jurisdiction: 'International',
  domain: 'Botany & biodiversity',
  openSourceYear: 2022,
  license: 'GPL-3.0-or-later (Plantinator app repository)',
  repository: 'https://gitlab.inria.fr/botascopia/plantinator',
  officialUrl: 'https://botascopia.inria.fr/',
  evidenceUrl: 'https://radar.inria.fr/report/2025/semis/index.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'botany', 'biodiversity', 'plant science'],
} satisfies Project;
