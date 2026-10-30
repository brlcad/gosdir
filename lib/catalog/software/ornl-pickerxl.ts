import type { Project } from '../types';

export default {
  id: 'ornl-pickerxl',
  name: 'PickerXL',
  summary:
    'A deep-learning package for identifying P-wave and S-wave seismic arrival times in noisy signals.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), National Nuclear Security Administration (NNSA), Office of Defense Nuclear Nonproliferation',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe', 'us-doe-nnsa'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Seismology and machine learning',
  openSourceYear: 2025,
  license: 'GNU General Public License v3.0',
  repository: 'https://github.com/ORNL/picker-xl',
  officialUrl: 'https://github.com/ORNL/picker-xl',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/150453',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'seismology', 'machine learning', 'earthquake science'],
} satisfies Project;
