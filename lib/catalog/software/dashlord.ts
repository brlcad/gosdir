import type { Project } from '../types';

export default {
  id: 'dashlord',
  name: 'DashLord',
  summary:
    'A reusable dashboard that checks public-service websites against technical quality and accessibility practices.',
  sponsor: 'Fabrique des ministères sociaux',
  agencyIds: ['fr-fabrique-ministeres-sociaux'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Web quality',
  openSourceYear: 2021,
  license: 'Apache-2.0',
  repository: 'https://github.com/SocialGouv/dashlord',
  officialUrl: 'https://socialgouv.github.io/dashlord/about/',
  evidenceUrl: 'https://socialgouv.github.io/dashlord/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'website quality', 'accessibility', 'monitoring'],
} satisfies Project;
