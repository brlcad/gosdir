import type { Project } from '../types';

export default {
  id: 'ornl-wave-denoiser',
  name: 'WaveDenoiser',
  summary:
    'A deep-learning package for removing noise from three-component seismic waveforms in the time domain.',
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
  openSourceYear: 2025,
  license: 'GPL-3.0',
  repository: 'https://github.com/ORNL/wave-denoiser',
  officialUrl: 'https://github.com/ORNL/wave-denoiser',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/164114',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'sandia', 'nnsa', 'seismology', 'machine learning'],
} satisfies Project;
