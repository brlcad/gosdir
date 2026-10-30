import type { Project } from '../types';

export default {
  id: 'fr-dreal-pdl-diagnostic-regional-etiages',
  name: 'Diagnostic régional des étiages',
  summary:
    'A Shiny application for exploring regional low-water indicators and hydrological conditions.',
  sponsor:
    "Commissioned/deployed by DREAL Pays de la Loire (with Office français de la biodiversité and Agence de l'eau Loire-Bretagne study partners); application developed by AnteaGroup.",
  agencyIds: ['fr-dreal-pays-de-la-loire'],
  geography: 'Pays de la Loire, France.',
  jurisdiction: 'International',
  domain: 'Water monitoring and hydrology',
  openSourceYear: 2022,
  license: 'GNU General Public License v3.0 (GPL-3.0)',
  repository:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/eau-milieux-aquatiques/diagnostic-regional-etiages',
  officialUrl:
    'https://www.pays-de-la-loire.developpement-durable.gouv.fr/les-realisations-a4801.html?lang=fr',
  evidenceUrl:
    'https://www.pays-de-la-loire.developpement-durable.gouv.fr/les-realisations-a4801.html?lang=fr',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['france', 'dreal pays de la loire', 'water', 'hydrology', 'shiny'],
} satisfies Project;
