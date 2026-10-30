import type { Project } from '../types';

export default {
  id: 'epa-toxvaldb-dcap-prep',
  name: 'toxvaldb_dcap_prep',
  summary:
    'An R package and workflow for preparing ToxValDB exports for Database-Calibrated Assessment Product analysis.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Computational Toxicology and Exposure',
  agencyIds: ['us-epa-ccte'],
  geography:
    'Chemical toxicity assessments using data compiled from U.S. and international sources',
  jurisdiction: 'U.S. federal',
  domain: 'Computational toxicology',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/USEPA/toxvaldb_dcap_prep',
  officialUrl: 'https://github.com/USEPA/toxvaldb_dcap_prep',
  evidenceUrl: 'https://github.com/USEPA/toxvaldb_dcap_prep/releases',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'ccte', 'toxicology', 'r', 'dcap', 'toxvaldb'],
} satisfies Project;
