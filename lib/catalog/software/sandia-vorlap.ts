import type { Project } from '../types';

export default {
  id: 'sandia-vorlap',
  name: 'VorLap',
  summary:
    'Sandia’s Python tool for predicting aerodynamic force spectra, reconstructing loads, and assessing frequency-overlap risk for rotating structures.',
  sponsor: 'U.S. Department of Energy / Sandia National Laboratories',
  agencyIds: ['us-doe-sandia-national-laboratories', 'us-doe'],
  geography:
    'Sandia National Laboratories, Albuquerque, New Mexico (author/institutional affiliation; no deployment site asserted)',
  jurisdiction: 'U.S. federal',
  domain: 'Wind energy & engineering',
  openSourceYear: 2025,
  license:
    'MIT for VorLap project software and associated documentation; bundled airfoil/reference data and dependencies are separate',
  repository: 'https://github.com/sandialabs/VorLap',
  officialUrl: 'https://github.com/sandialabs/VorLap',
  evidenceUrl:
    'https://wes.copernicus.org/preprints/wes-2025-248/wes-2025-248.pdf',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['doe', 'sandia', 'wind energy', 'aerodynamics', 'python'],
} satisfies Project;
