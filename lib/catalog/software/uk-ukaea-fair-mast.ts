import type { Project } from '../types';

export default {
  id: 'uk-ukaea-fair-mast',
  name: 'FAIR-MAST',
  summary:
    'FAIR-MAST, the data-management/API/catalog service for historical Mega Ampere Spherical Tokamak (MAST) diagnostic data.',
  sponsor:
    'United Kingdom Atomic Energy Authority (UKAEA), with Science and Technology Facilities Council (STFC) collaboration',
  agencyIds: ['uk-uk-atomic-energy-authority', 'uk-stfc'],
  geography:
    'United Kingdom (MAST); research data service with broader fusion-science reuse',
  jurisdiction: 'International',
  domain: 'Fusion research data and scientific computing',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/ukaea/fair-mast',
  officialUrl: 'https://mastapp.site/',
  evidenceUrl: 'https://www.ukaea.org/service/fair-mast/',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'STFC', 'FAIR-MAST'],
} satisfies Project;
