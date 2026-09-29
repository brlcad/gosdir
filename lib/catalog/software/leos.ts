import type { Project } from '../types';

export default {
  id: 'leos',
  name: 'LEOS',
  summary:
    'A European Commission platform for collaboratively drafting machine-readable legislation in Akoma Ntoso, deployed internally as EdiT and reusable by public administrations.',
  sponsor: 'Secretariat-General of the European Commission',
  agencyIds: ['eu-commission-secretariat-general'],
  geography: 'European Union',
  jurisdiction: 'International',
  domain: 'Forms & workflows',
  openSourceYear: 2015,
  license: 'EUPL-1.2',
  repository: 'https://code.europa.eu/leos/core',
  officialUrl:
    'https://interoperable-europe.ec.europa.eu/collection/justice-law-and-security/solution/leos-open-source-software-editing-legislation',
  evidenceUrl:
    'https://interoperable-europe.ec.europa.eu/collection/portal-support/news/legal-interoperability-highlights',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['european union', 'legislation', 'collaboration'],
} satisfies Project;
