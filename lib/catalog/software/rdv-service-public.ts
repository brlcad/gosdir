import type { Project } from '../types';

export default {
  id: 'rdv-service-public',
  name: 'RDV Service Public',
  summary:
    'An interministerial appointment-management service for French state and local administrations, with public APIs and agent guidance.',
  sponsor:
    'Agence nationale de la cohésion des territoires and Direction interministérielle du numérique',
  agencyIds: ['fr-anct', 'fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Forms & workflows',
  openSourceYear: 2019,
  license: 'AGPL-3.0-only',
  repository: 'https://github.com/betagouv/rdv-service-public',
  officialUrl: 'https://rdv.anct.gouv.fr/',
  evidenceUrl: 'https://aide.rdv-service-public.fr/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'appointments', 'public services'],
} satisfies Project;
