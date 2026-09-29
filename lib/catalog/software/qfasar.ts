import type { Project } from '../types';

export default {
  id: 'qfasar',
  name: 'qfasar',
  summary:
    'A USGS R package for quantitative fatty-acid signature analysis, diet estimation, diagnostics, and simulation.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2016,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/qfasar',
  officialUrl:
    'https://www.usgs.gov/software/qfasar-quantitative-fatty-acid-signature-analysis-r',
  evidenceUrl: 'https://cran.r-project.org/package=qfasar',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'ecology', 'diet analysis', 'r'],
} satisfies Project;
