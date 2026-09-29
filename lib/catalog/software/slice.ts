import type { Project } from '../types';

export default {
  id: 'slice',
  name: 'SLICE',
  summary:
    'An ORNL workflow for estimating equilibrium fuel inventories in pebble-bed reactors with SCALE.',
  sponsor:
    'Oak Ridge National Laboratory; initial U.S. Nuclear Regulatory Commission sponsorship and later U.S. Department of Energy funding',
  agencyIds: ['us-doe-oak-ridge-national-laboratory'],
  geography: 'United States (Tennessee)',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear engineering',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://code.ornl.gov/scale/code/slice',
  officialUrl: 'https://impact.ornl.gov/en/publications/slice/',
  evidenceUrl:
    'https://impact.ornl.gov/en/publications/introducing-the-slice-method-for-estimating-pebble-bed-reactor-in/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['doe', 'ornl', 'nuclear engineering', 'reactors', 'scale'],
} satisfies Project;
