import type { Project } from '../types';

export default {
  id: 'geotrek-admin',
  name: 'Geotrek-admin',
  summary:
    'A web GIS back office for managing trails, tourism information, protected areas, and related geographic data.',
  sponsor: 'Parc national des Écrins and Parc national du Mercantour',
  agencyIds: ['fr-parc-national-ecrins', 'fr-parc-national-mercantour'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2013,
  license: 'BSD-2-Clause (Geotrek-admin code)',
  repository: 'https://github.com/GeotrekCE/Geotrek-admin',
  officialUrl: 'https://geotrek.fr/produit.html',
  evidenceUrl: 'https://geotrek.fr/2021/01/05/geotrek-opensource.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'national parks', 'trails', 'geospatial', 'tourism'],
} satisfies Project;
