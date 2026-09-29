import type { Project } from '../types';

export default {
  id: 'publicodes',
  name: 'Publicodes',
  summary:
    'A declarative calculation language and engine used by French public-service simulators, including Urssaf’s Mon-entreprise.',
  sponsor: 'Urssaf Caisse nationale, ADEME and DINUM',
  agencyIds: ['fr-urssaf-caisse-nationale', 'fr-ademe', 'fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Rules as code',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/publicodes/publicodes',
  officialUrl: 'https://publi.codes/',
  evidenceUrl: 'https://beta.gouv.fr/startups/mon-entreprise.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'rules', 'calculations', 'public services'],
} satisfies Project;
