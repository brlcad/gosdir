import type { Project } from '../types';

export default {
  id: 'archifiltre-docs',
  name: 'Docs par Archifiltre',
  summary:
    'A government-distributed desktop application for visualizing and improving file trees before document archiving.',
  sponsor: 'Fabrique numérique des ministères sociaux',
  agencyIds: ['fr-fabrique-ministeres-sociaux'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Archives & records',
  openSourceYear: 2018,
  license: 'Apache-2.0',
  repository: 'https://github.com/SocialGouv/archifiltre-docs',
  officialUrl: 'https://www.fabrique.social.gouv.fr/nos-startups/archifiltre',
  evidenceUrl: 'https://www.info.gouv.fr/upload/media/content/0001/12/aadfb70a3accdf1e9f59700f6cbd11532ef3c2f7.pdf',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['france', 'archives', 'desktop', 'document management'],
} satisfies Project;
