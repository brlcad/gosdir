import type { Project } from '../types';

export default {
  id: 'webmapp-venezia',
  name: 'WebMapp Venezia',
  summary:
    'A mobile and web application for geolocated public services, points of interest, cycling routes, mobility, tourism, health, and safety information across the Metropolitan City of Venice.',
  sponsor:
    'Developed in-house by the Metropolitan City of Venice with local municipalities; the city continues to publish the app and maintain its service pages.',
  agencyIds: ['it-cittametropolitana-venezia'],
  geography: 'Italy (Metropolitan City of Venice, Veneto)',
  jurisdiction: 'International',
  domain: 'Geospatial services',
  openSourceYear: 2022,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/CittaMetropolitanaVenezia/WebMappVenezia',
  officialUrl: 'https://cittametropolitana.ve.it/node/1190997',
  evidenceUrl:
    'https://old.cittametropolitana.ve.it/notizie/presentata-webapp-l%E2%80%99applicazione-gratuita-smartphone-che-mette-rete-informazioni-cittadini-e',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'veneto', 'geospatial', 'mobile app', 'local government'],
} satisfies Project;
