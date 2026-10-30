import type { Project } from '../types';

export default {
  id: 'ornl-wave-dp',
  name: 'WaveDP',
  summary:
    'A deep-learning seismic model that denoises three-component seismograms and estimates P-wave, S-wave, and noise probabilities for arrival-time picking.',
  sponsor:
    'U.S. Department of Energy (DOE), National Nuclear Security Administration (NNSA), Office of Defense Nuclear Nonproliferation; Oak Ridge National Laboratory (ORNL), with Sandia National Laboratories (SNL).',
  agencyIds: [
    'us-doe-oak-ridge-national-laboratory',
    'us-doe-sandia-national-laboratories',
    'us-doe',
    'us-doe-nnsa',
  ],
  geography: 'Oak Ridge, Tennessee; New Mexico and California, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Seismology and machine learning',
  openSourceYear: 2026,
  license: 'GPL-3.0',
  repository: 'https://github.com/ORNL/wave-dp',
  officialUrl: 'https://github.com/ORNL/wave-dp',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/176312',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'sandia', 'nnsa', 'seismology', 'machine learning'],
} satisfies Project;
