import type { Project } from '../types';

export default {
  id: 'opengatellm',
  name: 'OpenGateLLM',
  summary:
    'A DINUM-maintained gateway for administering and routing generative-AI model APIs, deployed as Albert API.',
  sponsor: 'Direction interministérielle du numérique (DINUM), Etalab/IA dans l’État',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Artificial intelligence',
  openSourceYear: 2024,
  license: 'MIT (gateway code; model weights and external services separate)',
  repository: 'https://github.com/etalab-ia/OpenGateLLM',
  officialUrl: 'https://ia.numerique.gouv.fr/outils-ia/albert-api/',
  evidenceUrl: 'https://ia.numerique.gouv.fr/outils-ia/albert-api/d%C3%A9ploiement/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'dinum', 'ai', 'api gateway', 'albert api'],
} satisfies Project;
