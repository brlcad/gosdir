import type { Project } from '../types';

export default {
  id: 'django-magicauth',
  name: 'Django Magicauth',
  summary:
    'A passwordless Django authentication library used by French government digital services, including Aidants Connect.',
  sponsor: 'Agence nationale de la cohésion des territoires (ANCT)',
  agencyIds: ['fr-anct'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/betagouv/django-magicauth',
  officialUrl: 'https://github.com/betagouv/django-magicauth',
  evidenceUrl: 'https://github.com/betagouv/django-magicauth/blob/master/publiccode.yml',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['france', 'django', 'authentication', 'government reuse'],
} satisfies Project;
