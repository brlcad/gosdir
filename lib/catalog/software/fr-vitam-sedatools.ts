import type { Project } from '../types';

export default {
  id: 'fr-vitam-sedatools',
  name: 'Sedatools',
  summary:
    'SEDA archival-package libraries and tools for email extraction, ReSIP workflows, and test-package generation.',
  sponsor:
    'Interministerial VITAM Programme, piloted by DINUM and the Interministerial Archives of France; carried by the Ministries of Culture, Armed Forces, and Europe and Foreign Affairs',
  agencyIds: ['fr-programme-vitam', 'fr-dinum'],
  geography: 'France (interministerial archival programme)',
  jurisdiction: 'International',
  domain: 'Digital archives & records management',
  openSourceYear: 2019,
  license: 'CeCILL-2.1',
  repository: 'https://github.com/ProgrammeVitam/sedatools',
  officialUrl: 'https://www.programmevitam.fr/pages/ressources/sedalib/',
  evidenceUrl:
    'https://github.com/ProgrammeVitam/sedatools/releases/tag/v2.9.1',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['france', 'vitam', 'digital archives', 'seda', 'cecill-2.1'],
} satisfies Project;
