import type { Project } from '../types';

export default {
  id: 'esup-pod',
  name: 'Esup-Pod',
  summary:
    'A reusable video and learning platform initiated at the public University of Lille and deployed across French education institutions.',
  sponsor: 'Université de Lille and Esup-Portail, with French higher-education ministry support',
  agencyIds: ['fr-university-lille'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Education',
  openSourceYear: 2018,
  license: 'LGPL-3.0',
  repository: 'https://github.com/EsupPortail/Esup-Pod',
  officialUrl: 'https://pod.esup-portail.org/',
  evidenceUrl: 'https://pod.esup-portail.org/liste-des-instances',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'education', 'video', 'government reuse'],
} satisfies Project;
