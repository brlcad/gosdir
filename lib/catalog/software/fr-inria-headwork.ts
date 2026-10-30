import type { Project } from '../types';

export default {
  id: 'fr-inria-headwork',
  name: 'Headwork',
  summary:
    'An open-source crowdsourcing platform for complex tasks and participatory-science campaigns.',
  sponsor:
    'ANR-funded HEADWORK consortium, including Inria and IRISA partners; source maintained in the Inria Druid-public group',
  agencyIds: ['fr-anr', 'fr-inria'],
  geography:
    'Rennes, Brittany, France (Inria/IRISA source team; ANR consortium partners also in Lille and Saclay)',
  jurisdiction: 'International',
  domain: 'Crowdsourcing & citizen science',
  openSourceYear: 2021,
  license: 'GNU AGPL-3.0',
  repository: 'https://gitlab.inria.fr/druid-public/headwork',
  officialUrl: 'https://headwork.irisa.fr/',
  evidenceUrl: 'https://anr.fr/Projet-ANR-16-CE23-0015',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'anr', 'crowdsourcing', 'citizen-science'],
} satisfies Project;
