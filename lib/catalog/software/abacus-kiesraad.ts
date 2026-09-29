import type { Project } from '../types';

export default {
  id: 'abacus-kiesraad',
  name: 'Abacus',
  summary:
    'The Dutch Electoral Council’s locally installed application for aggregating election results and allocating seats; 14 municipalities used it in 2026.',
  sponsor: 'Kiesraad (Electoral Council of the Netherlands)',
  agencyIds: ['nl-kiesraad'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Elections',
  openSourceYear: 2024,
  license:
    'EUPL-1.2-or-later for code; OFL-1.1 fonts and MPL-2.0 test-file exceptions',
  repository: 'https://github.com/kiesraad/abacus',
  officialUrl:
    'https://www.kiesraad.nl/verkiezingen/gemeenteraden/ondersteunende-software-verkiezingen/gebruik-abacus',
  evidenceUrl:
    'https://github.com/kiesraad/abacus/commit/13d13d05de37c148bf34a14a4aaecfed18256473',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'elections', 'results', 'seat allocation'],
} satisfies Project;
