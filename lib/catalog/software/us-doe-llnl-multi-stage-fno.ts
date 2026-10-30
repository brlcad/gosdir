import type { Project } from '../types';

export default {
  id: 'us-doe-llnl-multi-stage-fno',
  name: 'Multi-Stage FNO',
  summary:
    'Reproducible training code for a multi-stage Fourier Neural Operator applied to 3D seismic simulations.',
  sponsor:
    'Lawrence Livermore National Laboratory, U.S. Department of Energy, with National Nuclear Security Administration sponsorship.',
  agencyIds: [
    'us-doe-lawrence-livermore-national-laboratory',
    'us-doe-nnsa',
    'us-doe',
  ],
  geography: 'Livermore, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Seismology and machine learning',
  openSourceYear: 2025,
  license:
    'MIT (repository source; scientific data and dependencies retain their own terms)',
  repository:
    'https://github.com/qingkaikong/multi-stage_FNO-SeismicSimulations',
  officialUrl: 'https://www.osti.gov/doecode/biblio/157565',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/157565',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'united states',
    'doe',
    'llnl',
    'nnsa',
    'seismology',
    'machine learning',
  ],
} satisfies Project;
