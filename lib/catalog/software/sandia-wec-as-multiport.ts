import type { Project } from '../types';

export default {
  id: 'sandia-wec-as-multiport',
  name: 'WEC as a multi-port',
  summary:
    'A Python package and reproducible analysis code for representing wave-energy converters with a multi-port network framework.',
  sponsor: 'U.S. Department of Energy / Sandia National Laboratories',
  agencyIds: ['us-doe-sandia-national-laboratories', 'us-doe'],
  geography:
    'Sandia National Laboratories, New Mexico (research-author affiliation; no deployment site asserted)',
  jurisdiction: 'U.S. federal',
  domain: 'Wave energy & engineering',
  openSourceYear: 2024,
  license:
    'GNU GPL-3.0 for the wec_as_multiport Python package; no license is inferred for dependencies',
  repository: 'https://github.com/sandialabs/wec_as_multiport',
  officialUrl: 'https://github.com/sandialabs/wec_as_multiport',
  evidenceUrl:
    'https://www.sandia.gov/research/publications/details/co-design-of-a-wave-energy-converter-through-bi-conjugate-impedance-matchin-2025-08-16/',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['doe', 'sandia', 'wave energy', 'python', 'network modeling'],
} satisfies Project;
