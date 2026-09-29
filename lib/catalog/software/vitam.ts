import type { Project } from '../types';

export default {
  id: 'vitam',
  name: 'Vitam',
  summary:
    'An interministerial platform for long-term preservation, management, and access to digital public records.',
  sponsor:
    'French interministerial Vitam Programme, backed by the ministries of Culture, Defence, and Foreign Affairs',
  agencyIds: ['fr-programme-vitam'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Digital archives',
  openSourceYear: 2017,
  license: 'CeCILL-2.1',
  repository: 'https://github.com/ProgrammeVitam/vitam',
  officialUrl: 'https://www.programmevitam.fr/pages/english/pres_english/',
  evidenceUrl: 'https://www.programmevitam.fr/pages/english/pres_english/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'archives', 'records management', 'preservation'],
} satisfies Project;
