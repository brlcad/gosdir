import type { Project } from '../types';

export default {
  id: 'mes-adresses',
  name: 'Mes Adresses',
  summary:
    'The national online editor municipalities use to create, update, and publish Local Address Bases to France’s Base Adresse Nationale.',
  sponsor: 'Agence nationale de la cohésion des territoires (ANCT); developed by Etalab/DINUM',
  agencyIds: ['fr-anct', 'fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2026,
  license: 'MIT (explicit repository grant added in 2026)',
  repository: 'https://github.com/BaseAdresseNationale/mes-adresses',
  officialUrl: 'https://mes-adresses.data.gouv.fr/',
  evidenceUrl: 'https://doc.adresse.data.gouv.fr/docs/mes-adresses/a-propos-du-guide-de-mes-adresses',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'addresses', 'municipalities', 'ban', 'bal'],
} satisfies Project;
