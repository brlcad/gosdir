import type { Project } from '../types';

export default {
  id: 'startuphafen',
  name: 'Startuphafen',
  summary:
    'A web platform that guides founders through business registration and related public-administration steps.',
  sponsor:
    'Amt Eiderstedt, with the State of Schleswig-Holstein funding development through Landesprogramm Offene Innovationen',
  agencyIds: ['de-amt-eiderstedt', 'de-schleswig-holstein'],
  geography: 'Schleswig-Holstein, Germany',
  jurisdiction: 'International',
  domain: 'Business and public administration',
  openSourceYear: 2025,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/pct-digital/startuphafen-gpl',
  officialUrl: 'https://www.startuphafen.sh/',
  evidenceUrl:
    'https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/I/_startseite/Artikel2026/III/260708_startuphafen',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'Germany',
    'Schleswig-Holstein',
    'business registration',
    'GPL-3.0-or-later',
  ],
} satisfies Project;
