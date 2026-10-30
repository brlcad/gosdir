import type { Project } from '../types';

export default {
  id: 'ai-taxonomist',
  name: 'AI-Taxonomist model engine',
  summary:
    'A toolchain for generating machine-learning models that identify plant species from GBIF occurrence data.',
  sponsor:
    'EU H2020 Cos4Cloud consortium, coordinated by the Spanish National Research Council (CSIC), with Pl@ntNet/Inria research partners',
  agencyIds: [
    'es-csic',
    'eu-european-commission',
    'fr-cirad',
    'fr-inrae',
    'fr-inria',
    'fr-ird',
  ],
  geography: 'European Union; France and Spain',
  jurisdiction: 'International',
  domain: 'Biodiversity and machine learning',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/plantnet/ai-taxonomist',
  officialUrl: 'https://ai-taxonomist.plantnet.org/',
  evidenceUrl: 'https://ai-taxonomist.plantnet.org/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'European Union',
    'France',
    'Spain',
    'biodiversity',
    'machine learning',
    'MIT',
  ],
} satisfies Project;
