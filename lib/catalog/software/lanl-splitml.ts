import type { Project } from '../types';

export default {
  id: 'lanl-splitml',
  name: 'SplitML',
  summary:
    'A Python signal-processing library that uses machine learning to separate signals and reject interference.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Signal processing & machine learning',
  openSourceYear: 2022,
  license: 'BSD-3-Clause for repository source (LICENSE.md)',
  repository: 'https://github.com/lanl/SplitML',
  officialUrl: 'https://www.osti.gov/doecode/biblio/76068',
  evidenceUrl: 'https://doi.org/10.5281/zenodo.7195633',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'signal processing',
    'machine learning',
    'python',
  ],
} satisfies Project;
