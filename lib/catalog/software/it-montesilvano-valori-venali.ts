import type { Project } from '../types';

export default {
  id: 'it-montesilvano-valori-venali',
  name: 'Valori Venali Aree Fabbricabili OMI',
  summary:
    'Comune di Montesilvano’s web calculator for estimating taxable values of buildable land from Agenzia delle Entrate OMI values and municipal planning coefficients.',
  sponsor: 'Comune di Montesilvano — Settore Informatica',
  agencyIds: ['it-comune-di-montesilvano'],
  geography: 'Italy (Montesilvano, Province of Pescara, Abruzzo)',
  jurisdiction: 'International',
  domain: 'Tax administration & land valuation',
  openSourceYear: 2026,
  license: 'EUPL-1.2 for the Valori Venali calculator source in this repository',
  repository: 'https://github.com/comune-di-montesilvano/valori-venali',
  officialUrl: 'https://www.comune.montesilvano.pe.it/Servizi/Stima-Valori-Venali-Aree-Fabbricabili-OMI',
  evidenceUrl: 'https://valorivenali.comune.montesilvano.pe.it/index.php',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'montesilvano', 'tax-administration', 'land-use', 'calculator'],
} satisfies Project;
