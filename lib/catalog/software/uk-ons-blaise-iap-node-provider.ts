import type { Project } from '../types';

export default {
  id: 'uk-ons-blaise-iap-node-provider',
  name: 'Blaise IAP Node Provider',
  summary:
    'A reusable Node provider for creating and refreshing Google Identity-Aware Proxy authentication headers in service-to-service calls.',
  sponsor: 'Office for National Statistics (ONS), ONS Digital, UK Government',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (ONS headquarters, Newport, Wales)',
  jurisdiction: 'International',
  domain: 'Identity and access management',
  openSourceYear: 2022,
  license:
    'MIT for provider source; Google Cloud and package dependencies are separate',
  repository: 'https://github.com/ONSdigital/blaise-iap-node-provider',
  officialUrl: 'https://github.com/ONSdigital/blaise-iap-node-provider',
  evidenceUrl:
    'https://github.com/ONSdigital/blaise-iap-node-provider/releases/tag/v3.0.0',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united kingdom', 'ons', 'blaise', 'google iap', 'node.js'],
} satisfies Project;
