import type { Project } from '../types';

export default {
  id: 'lanl-supernu',
  name: 'SuperNu',
  summary:
    'A Monte Carlo radiative-transfer solver for supernova and kilonova spectra.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Astrophysics & computational physics',
  openSourceYear: 2015,
  license:
    'GNU GPL-3.0 for SuperNu source (current v4.x LICENSE); README also contains a DOE contract-rights notice',
  repository: 'https://github.com/lanl/SuperNu',
  officialUrl: 'https://www.osti.gov/doecode/biblio/121098',
  evidenceUrl: 'https://arxiv.org/abs/2604.04362',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'astrophysics',
    'radiative transfer',
    'monte carlo',
    'fortran',
  ],
} satisfies Project;
