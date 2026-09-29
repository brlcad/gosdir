import type { Project } from '../types';

export default {
  id: 'register-trainee-teachers',
  name: 'Register trainee teachers',
  summary:
    'The English Department for Education service for registering and managing trainee-teacher records.',
  sponsor: 'UK Department for Education',
  agencyIds: ['uk-department-for-education'],
  geography: 'England, United Kingdom',
  jurisdiction: 'International',
  domain: 'Education services',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/DFE-Digital/register-trainee-teachers',
  officialUrl: 'https://www.register-trainee-teachers.service.gov.uk/',
  evidenceUrl: 'https://www.gov.uk/guidance/register-trainee-teachers',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'education', 'teachers', 'public services'],
} satisfies Project;
