import type { Project } from '../types';

export default {
  id: 'omgevingsbeleid-frontend',
  name: 'Omgevingsbeleid Frontend',
  summary:
    'The Province of Zuid-Holland’s public environmental-policy viewer and authorized policy-editor interface; its EUPL grant covers this frontend, not the separate platform APIs.',
  sponsor: 'Province of Zuid-Holland',
  agencyIds: ['nl-province-zuid-holland'],
  geography: 'Netherlands (South Holland)',
  jurisdiction: 'International',
  domain: 'Public policy',
  openSourceYear: 2021,
  license: 'EUPL-1.2 (frontend repository only)',
  repository: 'https://github.com/Provincie-Zuid-Holland/Omgevingsbeleid-Frontend',
  officialUrl: 'https://omgevingsbeleid.zuid-holland.nl/',
  evidenceUrl: 'https://github.com/Provincie-Zuid-Holland/Omgevingsbeleid-Frontend/blob/main/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'environmental policy', 'geospatial', 'publications'],
} satisfies Project;
