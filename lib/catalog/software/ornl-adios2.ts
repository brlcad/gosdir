import type { Project } from '../types';

export default {
  id: 'ornl-adios2',
  name: 'ADIOS2',
  summary:
    'A distributed scientific input/output framework for high-performance applications, supporting BP5 files and streaming data.',
  sponsor:
    'U.S. Department of Energy (DOE) Exascale Computing Program; developed by Oak Ridge National Laboratory (ORNL), Lawrence Berkeley National Laboratory (LBNL), Georgia Tech, and Kitware.',
  agencyIds: [
    'us-doe-oak-ridge-national-laboratory',
    'us-doe-lawrence-berkeley-national-laboratory',
    'us-doe',
  ],
  geography:
    'Oak Ridge, Tennessee; Berkeley, California; Atlanta, Georgia; United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing and data I/O',
  openSourceYear: 2017,
  license: 'Apache-2.0',
  repository: 'https://github.com/ornladios/ADIOS2',
  officialUrl: 'https://github.com/ornladios/ADIOS2',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/75331',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'lbnl',
    'scientific computing',
    'high performance computing',
    'data I/O',
  ],
} satisfies Project;
