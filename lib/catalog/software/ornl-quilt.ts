import type { Project } from '../types';

export default {
  id: 'ornl-quilt',
  name: 'Quilt',
  summary:
    'A simulation code for multiphase flow in porous materials, including ceramic-matrix-composite manufacturing processes.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), including DOE HPC4Mfg program',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and manufacturing simulation',
  openSourceYear: 2017,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/quilt',
  officialUrl: 'https://github.com/ORNL/Quilt',
  evidenceUrl:
    'https://www.olcf.ornl.gov/2019/03/12/supercomputers-to-help-supercharge-ceramic-matrix-composite-manufacturing/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'manufacturing', 'porous materials', 'simulation'],
} satisfies Project;
