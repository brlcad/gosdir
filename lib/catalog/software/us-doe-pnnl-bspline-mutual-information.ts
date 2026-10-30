import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-bspline-mutual-information',
  name: 'B-spline Mutual Information',
  summary:
    'A Python package for estimating mutual information with B-spline density models.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Statistics and machine learning',
  openSourceYear: 2024,
  license: 'BSD-2-Clause',
  repository:
    'https://github.com/PNNL-Predictive-Phenomics/bspline_mutual_information',
  officialUrl: 'https://pypi.org/project/bspline-mutual-information/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/148868',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'statistics', 'mutual information', 'python'],
} satisfies Project;
