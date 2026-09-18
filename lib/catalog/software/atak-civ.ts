import type { Project } from '../types';

export default {
  id: 'atak-civ',
  name: 'Android Tactical Assault Kit for Civilian Use (ATAK-CIV)',
  summary:
    'The open source civilian edition of a government-owned geospatial situational-awareness platform; the record does not imply that every TAK product line is open source.',
  sponsor:
    'TAK Product Center / Army DEVCOM C5ISR; Air Force Research Laboratory (origin)',
  agencyIds: [
    'us-tak-product-center',
    'us-army-devcom-c5isr-center',
    'us-air-force-research-laboratory',
  ],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Situational awareness',
  license: 'GPL-3.0; qualifying U.S. federal portions Public domain',
  repository: 'https://github.com/TAK-Product-Center/atak-civ',
  officialUrl: 'https://tak.gov/pages/our-process',
  evidenceUrl: 'https://afresearchlab.com/tactical-assault-kit-tak/',
  status: 'Active',
  featured: true,
  verified: '2026-09-12',
  tags: ['air force', 'geospatial', 'public safety', 'mobile'],
} satisfies Project;
