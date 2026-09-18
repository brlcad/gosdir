import type { Project } from '../types';

export default {
  id: 'openfisca',
  name: 'OpenFisca',
  summary:
    'A rules-as-code engine initiated in France for modeling taxes and benefits as testable software.',
  sponsor: 'French Interministerial Digital Directorate',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Rules as code',
  license: 'AGPL-3.0',
  repository: 'https://github.com/openfisca/openfisca-core',
  officialUrl: 'https://openfisca.org/',
  status: 'Active',
  verified: '2026-09-03',
  tags: ['france', 'benefits', 'policy'],
} satisfies Project;
