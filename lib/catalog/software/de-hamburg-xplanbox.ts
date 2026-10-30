import type { Project } from '../types';

export default {
  id: 'de-hamburg-xplanbox',
  name: 'xPlanBox',
  summary:
    'A web application and API for XPlanung-based land-use, landscape, and spatial planning within the DiPlanung platform.',
  sponsor:
    'Free and Hanseatic City of Hamburg — DiPlanung / Landesbetrieb Geoinformation und Vermessung; OZG federal co-funding.',
  agencyIds: ['de-hamburg-city', 'de-hamburg-lgv'],
  geography: 'Germany; Free and Hanseatic City of Hamburg.',
  jurisdiction: 'International',
  domain: 'Urban planning and geospatial interoperability',
  openSourceYear: 2022,
  license: 'AGPL-3.0 for project code.',
  repository: 'https://gitlab.opencode.de/diplanung/ozgxplanung',
  officialUrl: 'https://gitlab.opencode.de/diplanung/ozgxplanung',
  evidenceUrl:
    'https://www.buergerschaft-hh.de/parldok/dokument/80538/buergerschaftliches_ersuchen_vom_15_dezember_2021_vorteile_von_open_source_und_quelloffener_software_nutzen_und_den_verstaerkten_einsatz_in_hamburg_si.pdf',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'germany',
    'hamburg',
    'xplanung',
    'urban planning',
    'geospatial',
    'diplanung',
  ],
} satisfies Project;
