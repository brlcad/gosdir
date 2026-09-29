import type { Project } from '../types';

export default {
  id: 'bpc-monitor',
  name: 'BPC Monitor',
  summary:
    'A NIST Python service and desktop monitor/logger for the Vision130 back-pressure controller on the liquid-helium recovery system in Building 218.',
  sponsor:
    'National Institute of Standards and Technology, Physical Measurement Laboratory, Fundamental Electrical Measurements Group',
  agencyIds: ['us-nist'],
  geography: 'United States (Gaithersburg, Maryland)',
  jurisdiction: 'U.S. federal',
  domain: 'Laboratory operations',
  openSourceYear: 2023,
  license:
    'NIST-Software for NIST-authored repository source; Python dependencies and Windows runtime are separately licensed',
  repository: 'https://github.com/usnistgov/bpc-monitor',
  officialUrl: 'https://www.nist.gov/people/alireza-panna',
  evidenceUrl: 'https://github.com/usnistgov/bpc-monitor/blob/main/README.md',
  status: 'Active',
  verified: '2026-09-29',
  tags: ['nist', 'laboratory operations', 'cryogenics', 'helium recovery', 'monitoring'],
} satisfies Project;
