import type { Project } from '../types';

export default {
  id: 'lanl-milk',
  name: 'MILK (MAUD Interface Tool Kit)',
  summary:
    'A Python scripting interface that automates and extends MAUD Rietveld analysis.',
  sponsor:
    'U.S. Department of Energy, National Nuclear Security Administration (NNSA); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Diffraction & materials characterization',
  openSourceYear: 2022,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/milk',
  officialUrl: 'https://www.osti.gov/doecode/biblio/121113',
  evidenceUrl:
    'https://journals.iucr.org/j/issues/2023/04/00/nb5355/nb5355.pdf',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'python',
    'diffraction',
    'rietveld analysis',
    'maud',
  ],
} satisfies Project;
