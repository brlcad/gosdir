import type { Project } from '../types';

export default {
  id: 'loom-swiss-armed-forces',
  name: 'Loom',
  summary:
    'Swiss Armed Forces Cyber Command platform for local, offline search and analysis of documents, messages, and images.',
  sponsor: 'Swiss Armed Forces Cyber Command, Cyber Expertise Center (CEA)',
  agencyIds: ['ch-cyber-command'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Document analysis',
  openSourceYear: 2025,
  license: 'MIT (Loom application source; dependencies retain separate terms)',
  repository: 'https://gitlab.com/swiss-armed-forces/cyber-command/cea/loom',
  officialUrl: 'https://gitlab.com/swiss-armed-forces/cyber-command/cea/loom',
  evidenceUrl: 'https://www.vbs.admin.ch/de/newnsb/3Cevz3zsD4R1pMdvrPsAJ',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'defence', 'document search', 'offline'],
} satisfies Project;
