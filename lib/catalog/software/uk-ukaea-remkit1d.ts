import type { Project } from '../types';

export default {
  id: 'uk-ukaea-remkit1d',
  name: 'ReMKiT1D',
  summary:
    'ReMKiT1D core Fortran framework for building 1D reactive multi-fluid tokamak scrape-off-layer models with coupled electron kinetics.',
  sponsor:
    'United Kingdom Atomic Energy Authority (UKAEA), with academic collaborators',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography: 'United Kingdom; internationally relevant fusion-plasma modeling',
  jurisdiction: 'International',
  domain: 'Fusion plasma modeling',
  openSourceYear: 2023,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/ukaea/ReMKiT1D',
  officialUrl: 'https://www.ukaea.org/service/remkit1d/',
  evidenceUrl:
    'https://www.sciencedirect.com/science/article/pii/S0010465524001188',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'ReMKiT1D'],
} satisfies Project;
