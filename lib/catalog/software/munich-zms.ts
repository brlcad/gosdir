import type { Project } from '../types';

export default {
  id: 'munich-zms',
  name: 'Munich E-Appointment (ZMS)',
  summary:
    'City of Munich adaptation of Berlin’s appointment-booking and queue-management platform for municipal services.',
  sponsor: 'City of Munich, IT@M, with ITDZ Berlin and BerlinOnline',
  agencyIds: ['de-munich-itam'],
  geography: 'Germany',
  jurisdiction: 'International',
  domain: 'Government appointments',
  openSourceYear: 2024,
  license: 'EUPL-1.2 (Munich monorepo source)',
  repository: 'https://github.com/it-at-m/eappointment',
  officialUrl:
    'https://opensource.muenchen.de/software/zeitmanagementsystem.html',
  evidenceUrl:
    'https://github.com/it-at-m/eappointment/commit/3cd37529ea52db748a2cfe0f68e072a52fdf54c9',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['germany', 'munich', 'appointments', 'public service'],
} satisfies Project;
