import type { Project } from '../types';

export default {
  id: 'pat',
  name: 'PAT — Portale Amministrazione Trasparente',
  summary:
    'An AgID-developed web application that helps Italian public bodies publish the transparency information required by national law, including procurement-cycle disclosures.',
  sponsor: 'Agency for Digital Italy (AgID)',
  agencyIds: ['it-agid'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Public administration transparency',
  openSourceYear: 2021,
  license: 'AGPL-3.0-or-later',
  repository: 'https://github.com/AgID/pat',
  officialUrl: 'https://github.com/AgID/pat',
  evidenceUrl: 'https://github.com/AgID/pat/blob/master/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'transparency', 'public administration', 'AGPL'],
} satisfies Project;
