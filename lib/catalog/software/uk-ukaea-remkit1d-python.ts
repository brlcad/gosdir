import type { Project } from '../types';

export default {
  id: 'uk-ukaea-remkit1d-python',
  name: 'ReMKiT1D-Python',
  summary:
    'The RMK_support Python toolkit for configuring and analyzing ReMKiT1D simulations.',
  sponsor:
    'United Kingdom Atomic Energy Authority (UKAEA), with academic collaborators',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography: 'United Kingdom; internationally relevant fusion-plasma modeling',
  jurisdiction: 'International',
  domain: 'Fusion plasma modeling',
  openSourceYear: 2023,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/ukaea/ReMKiT1D-Python',
  officialUrl: 'https://remkit1d-python.readthedocs.io/en/latest/',
  evidenceUrl:
    'https://www.sciencedirect.com/science/article/pii/S0010465524001188',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'ReMKiT1D-Python'],
} satisfies Project;
