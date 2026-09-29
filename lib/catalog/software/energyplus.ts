import type { Project } from '../types';

export default {
  id: 'energyplus',
  name: 'EnergyPlus',
  summary:
    'A whole-building energy simulation engine maintained with support from the U.S. Department of Energy.',
  sponsor: 'Department of Energy',
  agencyIds: ['us-doe'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Climate & energy',
  openSourceYear: 2012,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/NatLabRockies/EnergyPlus',
  officialUrl: 'https://energyplus.net/',
  status: 'Active',
  verified: '2026-09-25',
  tags: ['buildings', 'energy', 'simulation'],
} satisfies Project;
