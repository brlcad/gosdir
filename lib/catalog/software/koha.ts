import type { Project } from '../types';

export default {
  id: 'koha',
  name: 'Koha Integrated Library System',
  summary:
    'A community-developed integrated library system originally commissioned and first operated by the Horowhenua Library Trust, a council-controlled library-services organization in New Zealand.',
  sponsor:
    'Horowhenua Library Trust (now Te Horowhenua Trust), established by Horowhenua District Council; now maintained by the Koha community',
  agencyIds: ['nz-horowhenua-district-council', 'nz-te-horowhenua-trust'],
  geography: 'Horowhenua District, New Zealand; used internationally',
  jurisdiction: 'International',
  domain: 'Library services',
  openSourceYear: 2000,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/Koha-Community/Koha',
  officialUrl: 'https://koha-community.org/',
  evidenceUrl: 'https://koha-community.org/about/history/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['new zealand', 'libraries', 'library management'],
} satisfies Project;
