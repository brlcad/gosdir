import type { Project } from '../types';

export default {
  id: 'uk-stfc-psyclone',
  name: 'PSyclone',
  summary:
    'A source-to-source Fortran compiler and transformation framework for optimizing, parallelizing, and instrumenting HPC applications.',
  sponsor:
    'UK Research and Innovation (UKRI), Science and Technology Facilities Council (STFC) as lead steward, with Crown, Met Office, and NERC joint copyright and GungHo Consortium contributions.',
  agencyIds: ['uk-stfc', 'uk-ukri', 'uk-met-office', 'uk-nerc'],
  geography:
    'United Kingdom (STFC, Met Office, and NERC research and weather-model context); internationally reusable HPC software',
  jurisdiction: 'International',
  domain: 'HPC compilers & scientific computing',
  openSourceYear: 2017,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/stfc/PSyclone',
  officialUrl: 'https://github.com/stfc/PSyclone',
  evidenceUrl: 'https://github.com/stfc/PSyclone/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'united kingdom',
    'ukri',
    'stfc',
    'met office',
    'nerc',
    'fortran',
    'hpc',
    'compiler',
  ],
} satisfies Project;
