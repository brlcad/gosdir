import type { Project } from '../types';

export default {
  id: 'occtax-mobile',
  name: 'Occtax-mobile',
  summary:
    'The GeoNature Android field app for recording biodiversity observations in the Occtax workflow.',
  sponsor:
    'PnX-SI and French national parks, with Parc national des Écrins project support',
  agencyIds: ['fr-pnx-si', 'fr-parc-national-ecrins'],
  geography: 'France, for national-park and other GeoNature deployments',
  jurisdiction: 'International',
  domain: 'Environmental data collection',
  openSourceYear: 2019,
  license: 'GPL-3.0 (application repository only)',
  repository: 'https://github.com/PnX-SI/gn_mobile_occtax',
  officialUrl: 'https://geonature.fr/',
  evidenceUrl: 'https://github.com/PnX-SI/gn_mobile_occtax',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'Android', 'biodiversity', 'field data', 'GPL-3.0'],
} satisfies Project;
