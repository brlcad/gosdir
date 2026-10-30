import type { Project } from '../types';

export default {
  id: 'fr-inria-patient-manager',
  name: 'Patient Manager (Gazelle)',
  summary:
    'A separately deployable patient-administration and identity-actor simulator, formerly PAMSimulator.',
  sponsor:
    'Inria (historical project authorship); current upstream stewardship is with the IHE Gazelle team and Interop’Santé',
  agencyIds: ['fr-inria'],
  geography:
    'Rennes, France; used in international IHE interoperability testing',
  jurisdiction: 'International',
  domain: 'Healthcare interoperability testing',
  openSourceYear: 2023,
  license:
    'Apache-2.0 (project source; dependencies retain their own licenses)',
  repository:
    'https://gitlab.inria.fr/gazelle/public/simulation/patient-manager',
  officialUrl: 'https://interop.referencement.esante.gouv.fr/',
  evidenceUrl:
    'https://interop.referencement.esante.gouv.fr/gazelle-documentation/Patient-Manager/installation.html',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'healthcare', 'interoperability', 'testing'],
} satisfies Project;
