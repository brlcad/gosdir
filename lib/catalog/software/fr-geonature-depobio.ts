import type { Project } from '../types';

export default {
  id: 'fr-geonature-depobio',
  name: 'GeoNature DEPOBIO Synchronization Plugin',
  summary:
    'A GeoNature plugin, historically called mtd_sync, for synchronizing DEPOBIO/MTD metadata into the French biodiversity information system.',
  sponsor:
    'French National Parks / GeoNature maintainers; the upstream MTD metadata service is provided separately by the French INPN/SINP.',
  agencyIds: ['fr-pnx-si'],
  geography: 'France; nationally scoped biodiversity metadata synchronization',
  jurisdiction: 'International',
  domain: 'Environmental management and biodiversity',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/PnX-SI/gn_plugin_depobio',
  officialUrl: 'https://docs.geonature.fr/CHANGELOG.html',
  evidenceUrl:
    'https://github.com/PnX-SI/gn_plugin_depobio/releases/tag/depobio-21-01-2026',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'DEPOBIO', 'biodiversity metadata', 'MIT'],
} satisfies Project;
