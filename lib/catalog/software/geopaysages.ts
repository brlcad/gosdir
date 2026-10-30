import type { Project } from '../types';

export default {
  id: 'geopaysages',
  name: 'GeoPaysages',
  summary:
    'A reusable application for publishing photographic landscape observatories.',
  sponsor:
    'Parc national de la Vanoise, with PnX-SI, Parc national des Écrins, and regional-park partners',
  agencyIds: [
    'fr-parc-national-vanoise',
    'fr-parc-national-ecrins',
    'fr-pnx-si',
  ],
  geography:
    'France (national and regional parks, especially Vanoise and Région Sud)',
  jurisdiction: 'International',
  domain: 'Environmental management and landscape monitoring',
  openSourceYear: 2019,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/GeoPaysages',
  officialUrl: 'https://paysages.vanoise-parcnational.fr/',
  evidenceUrl: 'https://github.com/PnX-SI/GeoPaysages',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'landscape', 'environmental monitoring', 'GPL-3.0'],
} satisfies Project;
