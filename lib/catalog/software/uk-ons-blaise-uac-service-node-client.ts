import type { Project } from '../types';

export default {
  id: 'uk-ons-blaise-uac-service-node-client',
  name: 'Blaise UAC Service Node Client',
  summary:
    'A typed Node client for creating, importing, enabling, disabling and retrieving Blaise user access codes.',
  sponsor: 'Office for National Statistics (ONS), ONS Digital, UK Government',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (ONS headquarters, Newport, Wales)',
  jurisdiction: 'International',
  domain: 'Identity and access management',
  openSourceYear: 2021,
  license:
    'MIT for client source; the UAC service and dependencies are separate',
  repository: 'https://github.com/ONSdigital/blaise-uac-service-node-client',
  officialUrl: 'https://github.com/ONSdigital/blaise-uac-service-node-client',
  evidenceUrl:
    'https://github.com/ONSdigital/blaise-uac-service-node-client/releases/tag/v4.1.0',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united kingdom', 'ons', 'blaise', 'uac', 'node.js'],
} satisfies Project;
