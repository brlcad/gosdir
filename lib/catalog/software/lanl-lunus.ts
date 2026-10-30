import type { Project } from '../types';

export default {
  id: 'lanl-lunus',
  name: 'LUNUS',
  summary:
    'Processes and analyzes diffuse X-ray scattering from protein crystals.',
  sponsor:
    'U.S. Department of Energy, Office of Science, Basic Energy Sciences (BES); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Structural biology & X-ray crystallography',
  openSourceYear: 2022,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/lunus',
  officialUrl: 'https://www.osti.gov/doecode/biblio/74945',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5562295/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'protein crystallography',
    'x-ray scattering',
    'structural biology',
    'scientific software',
  ],
} satisfies Project;
