import type { Project } from '../types';

export default {
  id: 'fr-dreal-grand-est-opm2020',
  name: 'OPM2020 — Outil Portrait Mobilité',
  summary:
    'A Shiny application for generating local mobility profiles for authorities in Grand Est. The service is no longer updated and is scheduled to remain available until June 2027.',
  sponsor:
    'DREAL Grand Est, Service Connaissance et Développement Durable (SCDD).',
  agencyIds: ['fr-dreal-grand-est'],
  geography: 'Grand Est, France.',
  jurisdiction: 'International',
  domain: 'Mobility planning and transport',
  openSourceYear: 2020,
  license: 'European Union Public Licence v1.2 (EUPL-1.2)',
  repository:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-grandest/scdd/pub/opm2020',
  officialUrl:
    'https://www.grand-est.developpement-durable.gouv.fr/l-outil-portrait-mobilite-a19915.html?lang=fr',
  evidenceUrl:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-grandest/scdd/pub/opm2020/-/blob/dev/README.md',
  status: 'Archived',
  verified: '2026-10-19',
  tags: ['france', 'dreal grand est', 'mobility', 'transport', 'shiny'],
} satisfies Project;
