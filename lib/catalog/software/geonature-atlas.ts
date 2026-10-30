import type { Project } from '../types';

export default {
  id: 'geonature-atlas',
  name: 'GeoNature-atlas',
  summary:
    'A reusable web application for publishing biodiversity observations and species information.',
  sponsor: 'Parc national des Écrins, with French national-park partners',
  agencyIds: ['fr-parc-national-ecrins', 'fr-pnx-si'],
  geography:
    'France (Écrins and Mercantour national parks; additional territories)',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2016,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/GeoNature-atlas',
  officialUrl: 'https://biodiversite.ecrins-parcnational.fr/',
  evidenceUrl:
    'https://www.ecrins-parcnational.fr/actualite/distinction-atlas-ligne-biodiv-ecrins',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'Écrins', 'biodiversity', 'species atlas', 'GPL-3.0'],
} satisfies Project;
