import type { Project } from '../types';

export default {
  id: 'uk-aisi-inspect-k8s-sandbox',
  name: 'Inspect Kubernetes Sandbox',
  summary: 'Inspect K8s Sandbox, a Kubernetes sandbox provider for Inspect AI.',
  sponsor:
    'UK AI Security Institute (AISI), Department for Science, Innovation and Technology',
  agencyIds: ['uk-ai-security-institute'],
  geography: 'United Kingdom; Kubernetes infrastructure',
  jurisdiction: 'International',
  domain: 'AI safety evaluation infrastructure',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/ukgovernmentbeis/inspect_k8s_sandbox',
  officialUrl: 'https://k8s-sandbox.aisi.org.uk/',
  evidenceUrl: 'https://engineering-playbook.aisi.org.uk/isolate.html',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'AISI', 'Inspect', 'Kubernetes', 'Sandbox'],
} satisfies Project;
