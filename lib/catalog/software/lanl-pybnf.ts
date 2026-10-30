import type { Project } from '../types';

export default {
  id: 'lanl-pybnf',
  name: 'PyBioNetFit (PyBNF)',
  summary:
    'A scientific application for fitting and parameterizing biological models in BioNetGen (BNGL) or SBML, with Bayesian inference and uncertainty quantification.',
  sponsor:
    'U.S. Department of Energy/National Nuclear Security Administration; Los Alamos National Laboratory (code C18062), operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Biology & biotechnology',
  openSourceYear: 2018,
  license: 'BSD-3-Clause (PyBNF repository source)',
  repository: 'https://github.com/lanl/PyBNF',
  officialUrl: 'https://lanl.github.io/PyBNF/',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10060707/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'systems biology',
    'parameter estimation',
    'uncertainty quantification',
    'python',
  ],
} satisfies Project;
