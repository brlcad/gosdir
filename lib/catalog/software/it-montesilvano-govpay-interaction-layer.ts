import type { Project } from '../types';

export default {
  id: 'it-montesilvano-govpay-interaction-layer',
  name: 'GovPay Interaction Layer (GIL)',
  summary:
    'Comune di Montesilvano’s containerized payment portal integrating its GovPay instance with pagoPA, including citizen payment flows and municipal operator tools.',
  sponsor: 'Comune di Montesilvano — Settore Informatica',
  agencyIds: ['it-comune-di-montesilvano'],
  geography: 'Italy (Montesilvano, Province of Pescara, Abruzzo)',
  jurisdiction: 'International',
  domain: 'Digital government & payments',
  openSourceYear: 2025,
  license: 'EUPL-1.2 for the GovPay Interaction Layer in this repository; upstream GovPay and pagoPA remain separate projects and licenses',
  repository: 'https://github.com/comune-di-montesilvano/govpay-interaction-layer',
  officialUrl: 'https://pagopa.comune.montesilvano.pe.it/',
  evidenceUrl: 'https://pagopa.comune.montesilvano.pe.it/guida',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'montesilvano', 'payments', 'pagopa', 'digital-government'],
} satisfies Project;
