import type { Project } from '../types';

export default {
  id: 'uk-hmcts-jenkins-packer',
  name: 'HMCTS Jenkins Packer',
  summary:
    'Packer scripts and image definitions for building and publishing hardened HMCTS Jenkins-agent operating-system images.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2018,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/jenkins-packer',
  officialUrl: 'https://github.com/hmcts/jenkins-packer',
  evidenceUrl: 'https://github.com/hmcts/jenkins-packer/releases',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'jenkins', 'packer', 'devops', 'images'],
} satisfies Project;
