import type { Project } from '../types';

export default {
  id: 'ornl-bm3dornl',
  name: 'BM3DORNL',
  summary:
    'A Rust-backed Python library and optional graphical interface for removing streak and ring artifacts from neutron-tomography sinograms using BM3D.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science, Basic Energy Sciences (BES), via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neutron imaging and scientific computing',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/ornlneutronimaging/bm3dornl',
  officialUrl: 'https://bm3dornl.readthedocs.io/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/185410',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'neutron imaging', 'image processing', 'tomography'],
} satisfies Project;
