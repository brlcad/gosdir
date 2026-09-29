import type { Project } from '../types';

export default {
  id: 'comparia',
  name: 'compar:IA',
  summary:
    'A public service for blind comparison of conversational AI models and collection of language-preference data.',
  sponsor: 'French Ministry of Culture, Service du numérique; with DINUM funding and support',
  agencyIds: ['fr-ministry-culture', 'fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Public services',
  openSourceYear: 2024,
  license: 'Apache-2.0 (repository code; third-party models and content excluded)',
  repository: 'https://github.com/betagouv/ComparIA',
  officialUrl: 'https://comparia.beta.gouv.fr/',
  evidenceUrl: 'https://arene.comparia.beta.gouv.fr/legal',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'ministry of culture', 'dinum', 'ai', 'model comparison'],
} satisfies Project;
