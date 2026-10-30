import type { Project } from '../types';

export default {
  id: 'uk-ukho-vm-agent-aib',
  name: 'UKHO VM Agent Image Build',
  summary:
    'Image templates and build pipelines for Azure DevOps virtual-machine agents.',
  sponsor: 'UK Hydrographic Office',
  agencyIds: ['uk-ukho'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tooling and CI/CD',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/UKHO/vm-agent-aib',
  officialUrl: 'https://github.com/UKHO/vm-agent-aib',
  evidenceUrl: 'https://github.com/UKHO/vm-agent-aib/blob/master/README.md',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHO', 'Azure DevOps', 'Virtual machines'],
} satisfies Project;
