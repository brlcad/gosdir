import type { Project } from '../types';

export default {
  id: 'lanl-openfwi',
  name: 'OpenFWI',
  summary:
    'A seismic full-waveform-inversion benchmark and reference-code product for InversionNet and VelocityGAN.',
  sponsor:
    'Los Alamos National Laboratory LDRD project 20210542MFR; U.S. Department of Energy Office of Fossil Energy SMART-CS',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States; geophysical research',
  jurisdiction: 'U.S. federal',
  domain: 'Geophysics & machine learning',
  openSourceYear: 2022,
  license:
    'BSD-3-Clause for repository software code only; OpenFWI benchmark data are separately CC BY-NC-SA 4.0 and are not included in this code-license claim',
  repository: 'https://github.com/lanl/OpenFWI',
  officialUrl: 'https://openfwi-lanl.github.io/',
  evidenceUrl:
    'https://proceedings.neurips.cc/paper_files/paper/2022/file/27d3ef263c7cb8d542c4f9815a49b69b-Supplemental-Datasets_and_Benchmarks.pdf',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'geophysics',
    'seismic imaging',
    'machine learning',
    'benchmark',
  ],
} satisfies Project;
