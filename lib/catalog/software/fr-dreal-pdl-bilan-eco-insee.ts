import type { Project } from '../types';

export default {
  id: 'fr-dreal-pdl-bilan-eco-insee',
  name: 'bilan.eco.insee',
  summary:
    'An R package and report template for producing the climate, air, and energy section of regional economic and social reports.',
  sponsor:
    'DREAL Pays de la Loire, Centre de services de la donnée (CSD) / DREAL Datalab.',
  agencyIds: ['fr-dreal-pays-de-la-loire'],
  geography: 'Pays de la Loire, France.',
  jurisdiction: 'International',
  domain: 'Regional economic, climate and energy reporting',
  openSourceYear: 2021,
  license: 'MIT License',
  repository:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/bilan.eco.insee',
  officialUrl:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/bilan.eco.insee',
  evidenceUrl:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/bilan.eco.insee',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: [
    'france',
    'dreal pays de la loire',
    'r',
    'climate',
    'energy',
    'regional reporting',
  ],
} satisfies Project;
