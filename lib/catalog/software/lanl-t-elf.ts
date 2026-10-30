import type { Project } from '../types';

export default {
  id: 'lanl-t-elf',
  name: 'T-ELF (Tensor Extraction of Latent Features)',
  summary:
    'A LANL Python toolbox for tensor/matrix factorization and text/data analytics under the SmartTensors AI project.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory SmartTensors AI project',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing & data science',
  openSourceYear: 2023,
  license: 'BSD-3-Clause for T-ELF repository source',
  repository: 'https://github.com/lanl/T-ELF',
  officialUrl: 'https://www.osti.gov/doecode/biblio/127327',
  evidenceUrl: 'https://lanl.github.io/T-ELF/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'smarttensors',
    'tensor factorization',
    'data science',
    'python',
  ],
} satisfies Project;
