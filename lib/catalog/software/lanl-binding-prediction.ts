import type { Project } from '../types';

export default {
  id: 'lanl-binding-prediction',
  name: 'Binding_prediction',
  summary:
    'A LANL machine-learning model and Python tool for predicting small-molecule binding enthalpies.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory LDRD',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry and machine learning',
  openSourceYear: 2025,
  license: 'MIT for repository source; data and dependencies are separate',
  repository: 'https://github.com/lanl/binding_prediction',
  officialUrl: 'https://www.osti.gov/doecode/biblio/161722',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12780130/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'machine learning', 'chemistry', 'binding enthalpy'],
} satisfies Project;
