import type { Project } from '../types';

export default {
  id: 'pcircle',
  name: 'pCircle',
  summary:
    'A suite of MPI/work-stealing parallel file-system tools, including FCP for data transfer, checksumming, and profiling.',
  sponsor:
    'U.S. Department of Energy (DOE), Oak Ridge National Laboratory (ORNL)/Oak Ridge Leadership Computing Facility (OLCF); DOE contract AC05-00OR22725. No current ORNL stewardship is claimed after transfer.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and parallel file-system tools',
  openSourceYear: 2015,
  license:
    'Apache-2.0 (pCircle repository source; dependencies and external tools separately licensed)',
  repository: 'https://github.com/fwang2/pcircle',
  officialUrl: 'https://github.com/fwang2/pcircle',
  evidenceUrl: 'https://info.ornl.gov/sites/publications/files/Pub61933.pdf',
  status: 'Archived',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'olcf',
    'hpc',
    'parallel file systems',
    'data transfer',
  ],
} satisfies Project;
