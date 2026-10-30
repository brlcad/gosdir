import type { Project } from '../types';

export default {
  id: 'uk-aisi-inspect-proxmox-sandbox',
  name: 'Inspect Proxmox Sandbox',
  summary:
    'Inspect Proxmox Sandbox, an Inspect AI virtual-machine sandbox provider for Proxmox.',
  sponsor:
    'UK AI Security Institute (AISI), Department for Science, Innovation and Technology',
  agencyIds: ['uk-ai-security-institute'],
  geography: 'United Kingdom; Proxmox virtual-machine infrastructure',
  jurisdiction: 'International',
  domain: 'AI safety evaluation infrastructure',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ukgovernmentbeis/inspect_proxmox_sandbox',
  officialUrl: 'https://github.com/ukgovernmentbeis/inspect_proxmox_sandbox',
  evidenceUrl: 'https://engineering-playbook.aisi.org.uk/isolate.html',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'AISI', 'Inspect', 'Proxmox', 'Sandbox'],
} satisfies Project;
