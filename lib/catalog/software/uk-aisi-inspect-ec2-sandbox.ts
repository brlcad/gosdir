import type { Project } from '../types';

export default {
  id: 'uk-aisi-inspect-ec2-sandbox',
  name: 'Inspect EC2 Sandbox',
  summary:
    'Inspect EC2 Sandbox, an Inspect AI virtual-machine sandbox provider for AWS EC2.',
  sponsor:
    'UK AI Security Institute (AISI), Department for Science, Innovation and Technology',
  agencyIds: ['uk-ai-security-institute'],
  geography: 'United Kingdom; uses AWS EC2 infrastructure',
  jurisdiction: 'International',
  domain: 'AI safety evaluation infrastructure',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ukgovernmentbeis/inspect_ec2_sandbox',
  officialUrl: 'https://github.com/ukgovernmentbeis/inspect_ec2_sandbox',
  evidenceUrl: 'https://engineering-playbook.aisi.org.uk/isolate.html',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'AISI', 'Inspect', 'EC2', 'Sandbox'],
} satisfies Project;
