import type { Project } from '../types';

export default {
  id: 'demarches-simplifiees',
  name: 'Démarches Simplifiées',
  summary:
    'A French government platform for creating and processing online administrative procedures.',
  sponsor: 'French Interministerial Digital Directorate (DINUM)',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Digital public services',
  openSourceYear: 2017,
  license: 'AGPL-3.0',
  repository:
    'https://github.com/demarche-numerique/demarche.numerique.gouv.fr',
  officialUrl:
    'https://www.numerique.gouv.fr/offre-accompagnement/offre-demarches-simplifiees/',
  evidenceUrl: 'https://www.demarches-simplifiees.fr/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'forms', 'administrative procedures', 'public services'],
} satisfies Project;
