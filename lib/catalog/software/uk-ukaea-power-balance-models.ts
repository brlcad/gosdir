import type { Project } from '../types';

export default {
  id: 'uk-ukaea-power-balance-models',
  name: 'Power Balance Models',
  summary:
    'Power Balance Models (PBM), a Python API/CLI and Modelica model framework for estimating net power consumption and generation of tokamak designs.',
  sponsor:
    'United Kingdom Atomic Energy Authority (UKAEA), including STEP-design contributors',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography:
    'United Kingdom; fusion plant-design research with international applicability',
  jurisdiction: 'International',
  domain: 'Fusion energy systems modeling',
  openSourceYear: 2022,
  license: 'LGPL-2.1-or-later',
  repository: 'https://github.com/ukaea/powerbalance',
  officialUrl: 'https://ukaea.github.io/powerbalance/',
  evidenceUrl:
    'https://www.sciencedirect.com/science/article/pii/S0920379623001473',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'Power', 'Balance', 'Models'],
} satisfies Project;
