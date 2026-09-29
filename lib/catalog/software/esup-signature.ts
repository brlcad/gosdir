import type { Project } from '../types';

export default {
  id: 'esup-signature',
  name: 'ESUP-Signature',
  summary:
    'An electronic-signature and document-workflow application used by French higher-education institutions.',
  sponsor: 'Université de Rouen Normandie and ESUP-Portail',
  agencyIds: ['fr-university-rouen-normandie'],
  geography: 'France (Normandy; multi-institution deployment)',
  jurisdiction: 'International',
  domain: 'Education',
  openSourceYear: 2019,
  license: 'Apache-2.0',
  repository: 'https://github.com/EsupPortail/esup-signature',
  officialUrl: 'https://www.esup-portail.org/wiki/spaces/SIGN/overview',
  evidenceUrl:
    'https://www.esup-portail.org/sites/default/files/2022-09/ESUPPortail--JRES2021--esup_Signature-article.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'university', 'electronic signature', 'document workflow', 'esup-portail'],
} satisfies Project;
