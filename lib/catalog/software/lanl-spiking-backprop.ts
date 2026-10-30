import type { Project } from '../types';

export default {
  id: 'lanl-spiking-backprop',
  name: 'spikingBackprop',
  summary:
    'LANL’s neuromorphic backpropagation (nBP) implementation for Intel Loihi.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory; international research coauthors',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States; multi-institutional research',
  jurisdiction: 'U.S. federal',
  domain: 'Neuromorphic computing & machine learning',
  openSourceYear: 2022,
  license:
    'BSD-3-Clause for repository source (LICENSE.txt); external Loihi hardware/NxSDK are not included',
  repository: 'https://github.com/lanl/spikingBackprop',
  officialUrl: 'https://www.osti.gov/doecode/biblio/74250',
  evidenceUrl: 'https://www.nature.com/articles/s41467-024-53827-9',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'neuromorphic computing',
    'machine learning',
    'loihi',
  ],
} satisfies Project;
