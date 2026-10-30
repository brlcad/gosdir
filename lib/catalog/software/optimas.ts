import type { Project } from '../types';

export default {
  id: 'optimas',
  name: 'OptimAS',
  summary:
    'A Python framework for optimization of accelerator and laser-plasma workflows on high-performance computers.',
  sponsor:
    'Lawrence Berkeley National Laboratory / U.S. Department of Energy and Deutsches Elektronen-Synchrotron (DESY)',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States; Hamburg, Germany',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and scientific optimization',
  openSourceYear: 2023,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://github.com/optimas-org/optimas',
  officialUrl: 'https://github.com/optimas-org/optimas',
  evidenceUrl:
    'https://journals.aps.org/prab/abstract/10.1103/PhysRevAccelBeams.26.084601',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'lbnl', 'desy', 'hpc', 'optimization', 'python'],
} satisfies Project;
