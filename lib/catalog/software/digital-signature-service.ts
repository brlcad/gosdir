import type { Project } from '../types';

export default {
  id: 'digital-signature-service',
  name: 'Digital Signature Service (DSS)',
  summary:
    'A European Commission library for creating, extending, and validating eIDAS-aligned electronic signatures, seals, timestamps, and trust data.',
  sponsor: 'European Commission Directorate-General for Digital Services',
  agencyIds: ['eu-commission-dg-digital-services'],
  geography: 'European Union',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2013,
  license: 'LGPL-2.1-or-later',
  repository: 'https://code.europa.eu/dit/dss',
  officialUrl:
    'https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467109107/Digital+Signature+Service+-+DSS',
  evidenceUrl:
    'https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/european-commission-updates-t',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['european union', 'electronic signatures', 'eidas'],
} satisfies Project;
