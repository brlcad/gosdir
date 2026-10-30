import type { Project } from '../types';

export default {
  id: 'ornl-dasp-stacker',
  name: 'DASP',
  summary:
    'A library of dimensionally aligned algorithms for signal projection, processing, and analysis.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL); DOE CODE identifies ORNL project stewardship, with no separate sponsor recorded.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Signal processing and analysis',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/dasp-stacker',
  officialUrl: 'https://github.com/ORNL/DASP-Stacker',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/117463',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'signal processing', 'data analysis', 'python'],
} satisfies Project;
