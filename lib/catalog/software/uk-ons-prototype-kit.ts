import type { Project } from '../types';

export default {
  id: 'uk-ons-prototype-kit',
  name: 'ONS Prototype Kit',
  summary: 'High-fidelity prototyping tool built on the ONS Design System.',
  sponsor: 'Office for National Statistics (ONS), Design System team',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (ONS service-design tool)',
  jurisdiction: 'International',
  domain: 'Prototyping and design systems',
  openSourceYear: 2022,
  license:
    'MIT (kit source); Open Government Licence v3.0 (Service Manual guidance); third-party packages and ONS brand assets retain separate terms',
  repository: 'https://github.com/onsdigital/prototype-kit',
  officialUrl:
    'https://service-manual.ons.gov.uk/design-system/guidance/ons-prototype-kit',
  evidenceUrl:
    'https://service-manual.ons.gov.uk/design-system/guidance/ons-prototype-kit',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'prototyping',
    'design system',
    'service design',
  ],
} satisfies Project;
