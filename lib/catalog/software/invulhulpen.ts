import type { Project } from '../types';

export default {
  id: 'invulhulpen',
  name: 'Invulhulpen (PAR Assessments)',
  summary:
    'The Dutch government’s web application for completing Pre-scan, data-protection, and algorithmic-rights impact assessments online or locally.',
  sponsor:
    'Ministry of the Interior and Kingdom Relations, CIO Rijk privacy team',
  agencyIds: ['nl-ministry-interior-kingdom-relations'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Privacy',
  openSourceYear: 2025,
  license:
    'EUPL-1.2 for code; Rijksoverheid Sans font assets have separate house-style terms',
  repository: 'https://github.com/MinBZK/par-dpia-form',
  officialUrl: 'https://invulhulpen.rijksapp.nl/',
  evidenceUrl:
    'https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/dossier-privacy/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'privacy', 'dpia', 'iama'],
} satisfies Project;
