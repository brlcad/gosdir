import type { Project } from '../types';

export default {
  id: 'us-nist-pymdss',
  name: 'pyMDSS',
  summary: 'A web application for managing calibration measurement data.',
  sponsor:
    'National Institute of Standards and Technology (NIST), Physical Measurement Laboratory, Quantum Measurement Division, Fundamental Electrical Measurements Group; NIST staff profile identifies developer/maintainer Alireza Panna.',
  agencyIds: ['us-nist', 'us-nist-fundamental-electrical-measurements'],
  geography:
    "Gaithersburg, Maryland, United States (NIST headquarters and the Fundamental Electrical Measurements Group; README's operational hosts are campus.nist.gov).",
  jurisdiction: 'U.S. federal',
  domain: 'Metrology and calibration data management',
  openSourceYear: 2024,
  license:
    'OSI-approved NIST Software License (SPDX NIST-Software), root LICENSE.md; the grant covers the repository software. Third-party runtime dependencies remain under their separate upstream licenses.',
  repository: 'https://github.com/usnistgov/pymdss',
  officialUrl: 'https://github.com/usnistgov/pyMDSS',
  evidenceUrl: 'https://www.nist.gov/people/alireza-panna',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'united states',
    'nist',
    'metrology',
    'calibration',
    'django',
    'measurement data',
  ],
} satisfies Project;
