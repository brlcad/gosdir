import type { Project } from '../types';

export default {
  id: 'nl-wallet',
  name: 'NL Wallet',
  summary:
    'A Dutch-government mobile identity wallet for securely storing and presenting verifiable credentials under the European Digital Identity framework.',
  sponsor: 'Dutch Ministry of the Interior and Kingdom Relations',
  agencyIds: ['nl-ministry-interior-kingdom-relations'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2022,
  license: 'EUPL-1.2',
  repository: 'https://github.com/MinBZK/nl-wallet',
  officialUrl: 'https://minbzk.github.io/nl-wallet/',
  evidenceUrl:
    'https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/identiteit/edi-wallet/',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['netherlands', 'identity', 'credentials', 'wallet'],
} satisfies Project;
