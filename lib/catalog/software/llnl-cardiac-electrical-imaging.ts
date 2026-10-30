import type { Project } from '../types';

export default {
  id: 'llnl-cardiac-electrical-imaging',
  name: 'Cardiac Electrical Imaging (cardiac_ml)',
  summary:
    'A PyTorch research implementation for reconstructing cardiac activation maps and transmembrane potentials from 12-lead ECG signals.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Lawrence Livermore National Laboratory',
  agencyIds: [
    'us-doe-lawrence-livermore-national-laboratory',
    'us-doe-nnsa',
    'us-doe',
  ],
  geography: 'Livermore, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Biomedical machine learning',
  openSourceYear: 2023,
  license:
    'MIT for this repository source; datasets and dependencies are separate',
  repository: 'https://github.com/landajuela/cardiac_ml',
  officialUrl: 'https://www.osti.gov/doecode/biblio/108795',
  evidenceUrl: 'https://doi.org/10.22489/CinC.2022.026',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'llnl', 'cardiac imaging', 'machine learning'],
} satisfies Project;
