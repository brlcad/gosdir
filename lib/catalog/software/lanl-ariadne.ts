import type { Project } from '../types';

export default {
  id: 'lanl-ariadne',
  name: 'ARIADNE',
  summary:
    'Software for quantifying experimental uncertainties and evaluating nuclear data.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear data and uncertainty quantification',
  openSourceYear: 2026,
  license: 'BSD-3-Clause for repository source',
  repository: 'https://github.com/lanl/ARIADNE',
  officialUrl: 'https://www.osti.gov/doecode/biblio/187140',
  evidenceUrl: 'https://www.osti.gov/biblio/1489949',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'nuclear data', 'uncertainty quantification'],
} satisfies Project;
