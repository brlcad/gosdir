import type { Project } from '../types';

export default {
  id: 'autenticacao-gov',
  name: 'Autenticação.gov Citizen Card Middleware',
  summary:
    'Portuguese desktop middleware and SDK for using Citizen Card and Mobile Digital Key features, including electronic identification and digital signatures.',
  sponsor: 'Portuguese State: Agency for the Technological Reform of the State (ARTE; formerly AMA) and Institute of Registries and Notaries (IRN)',
  agencyIds: ['pt-arte', 'pt-government'],
  geography: 'Portugal',
  jurisdiction: 'International',
  domain: 'Digital identity and electronic signatures',
  openSourceYear: 2012,
  license: 'EUPL-1.2 for first-party middleware and SDK; bundled components may carry separate licenses',
  repository: 'https://github.com/amagovpt/autenticacao.gov',
  officialUrl: 'https://www.autenticacao.gov.pt/cc-aplicacao',
  evidenceUrl: 'https://www.autenticacao.gov.pt/cc-aplicacao',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['portugal', 'digital identity', 'citizen card', 'digital signatures', 'eupl'],
} satisfies Project;
