import type { Project } from '../types';

export default {
  id: 'postgresql',
  name: 'PostgreSQL',
  summary:
    'A community-maintained relational database descended from UC Berkeley’s POSTGRES research project, sponsored by DARPA, the U.S. Army Research Office and NSF.',
  sponsor:
    'UC Berkeley POSTGRES project (DARPA, U.S. Army Research Office and NSF sponsored); now maintained by the PostgreSQL Global Development Group',
  agencyIds: ['us-darpa', 'us-army-research-office', 'us-nsf'],
  geography: 'United States (Berkeley origin); used internationally',
  jurisdiction: 'International',
  domain: 'Data management & databases',
  openSourceYear: 1994,
  license: 'PostgreSQL License',
  repository: 'https://git.postgresql.org/gitweb?p=postgresql.git',
  officialUrl: 'https://www.postgresql.org/',
  evidenceUrl: 'https://www.postgresql.org/docs/17/history.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['database', 'berkeley', 'darpa', 'nsf'],
} satisfies Project;
