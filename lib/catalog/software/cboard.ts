import type { Project } from '../types';

export default {
  id: 'cboard',
  name: 'Cboard',
  summary:
    'An augmentative and alternative communication web application that combines symbols, text, and speech.',
  sponsor:
    'United Nations Children’s Fund (UNICEF) Innovation Fund; developed by CIREHA, an Argentine AAC organization.',
  agencyIds: ['un-unicef'],
  geography: 'Global (UNICEF-sponsored; developed by CIREHA in Argentina)',
  jurisdiction: 'International',
  domain: 'Accessibility / assistive communication',
  openSourceYear: 2017,
  license:
    'GPL-3.0-only for browser application code; Mulberry and ARASAAC symbol assets retain separately identified CC BY-SA 4.0 and CC BY-NC-SA 4.0 grants, respectively; the cboard-api backend is a separate repository.',
  repository: 'https://github.com/cboard-org/cboard',
  officialUrl: 'https://www.cboard.io/en/',
  evidenceUrl:
    'https://www.unicef.org/innovation/stories/unicef-innovation-fund-graduate-cireha',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['accessibility', 'assistive technology', 'communication', 'UNICEF'],
} satisfies Project;
