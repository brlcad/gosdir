import type { Project } from '../types';

export default {
  id: 'assemblyline',
  name: 'Assemblyline',
  summary:
    'A scalable file-analysis framework for detecting and classifying malicious software, developed and used by Canada’s Cyber Centre.',
  sponsor: 'Canadian Centre for Cyber Security',
  agencyIds: ['ca-cyber-centre'],
  geography: 'Canada',
  jurisdiction: 'International',
  domain: 'Cybersecurity',
  openSourceYear: 2017,
  license: 'MIT',
  repository: 'https://github.com/CybercentreCanada/assemblyline',
  officialUrl: 'https://www.cyber.gc.ca/en/tools-services/assemblyline',
  evidenceUrl: 'https://www.cyber.gc.ca/en/tools-services/assemblyline',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['canada', 'cybersecurity', 'malware analysis'],
} satisfies Project;
