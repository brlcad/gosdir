import type { Project } from '../types';

export default {
  id: 'uk-stfc-janus-core',
  name: 'Janus-core',
  summary:
    'A Python framework and command-line toolkit for machine-learned interatomic-potential calculations, training, and fine-tuning.',
  sponsor:
    'UK Research and Innovation (UKRI), Science and Technology Facilities Council (STFC), Scientific Computing Department; project contributors acknowledge support from PSDI, the Ada Lovelace Centre, and CoSeC.',
  agencyIds: ['uk-stfc', 'uk-ukri'],
  geography:
    'United Kingdom (STFC Scientific Computing); internationally reusable research software',
  jurisdiction: 'International',
  domain:
    'Computational materials science & machine-learned interatomic potentials',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/stfc/janus-core',
  officialUrl: 'https://stfc.github.io/janus-core/',
  evidenceUrl:
    'https://www.sc.stfc.ac.uk/software/type/computational-materials-and-molecular-science/',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'united kingdom',
    'ukri',
    'stfc',
    'materials science',
    'machine learning',
    'atomistic simulation',
    'python',
  ],
} satisfies Project;
