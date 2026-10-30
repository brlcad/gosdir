import type { Project } from '../types';

export default {
  id: 'lanl-cov2-genomicgraphtheory-pca',
  name: 'CoV2 Genomic Graph Theory PCA',
  summary:
    'Reproducible analysis scripts using graph theory and principal-component analysis to estimate SARS-CoV-2 lineage spread rates.',
  sponsor: 'Los Alamos National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Genomics and epidemiological analysis',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ruianke/CoV2-GenomicGraphTheory-PCA',
  officialUrl: 'https://github.com/ruianke/CoV2-GenomicGraphTheory-PCA',
  evidenceUrl: 'https://doi.org/10.1101/2025.02.07.25321892',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'lanl', 'covid-19', 'genomics', 'graph theory', 'pca'],
} satisfies Project;
