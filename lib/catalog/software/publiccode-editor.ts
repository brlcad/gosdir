import type { Project } from '../types';

export default {
  id: 'publiccode-editor',
  name: 'publiccode editor',
  summary:
    'A government-operated web app for creating, importing, editing, and validating publiccode.yml metadata.',
  sponsor: 'Developers Italia (DTD and AgID)',
  agencyIds: ['it-dtd', 'it-agid'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2019,
  license: 'AGPL-3.0-or-later',
  repository: 'https://github.com/italia/publiccode-editor',
  officialUrl: 'https://publiccode-editor.developers.italia.it/',
  evidenceUrl:
    'https://developers.italia.it/it/software/github.com/italia/publiccode-editor.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'publiccode.yml', 'software catalogue', 'metadata'],
} satisfies Project;
