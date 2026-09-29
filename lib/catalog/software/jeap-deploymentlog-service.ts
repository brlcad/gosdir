import type { Project } from '../types';

export default {
  id: 'jeap-deploymentlog-service',
  name: 'jEAP Deployment Log Service',
  summary:
    'FOITT reusable service template for recording deployments and tracking component versions across environments.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'Apache-2.0 (Deployment Log Service source)',
  repository: 'https://github.com/jeap-admin-ch/jeap-deploymentlog-service',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/q3lqud/',
  evidenceUrl:
    'https://jeap-admin-ch.github.io/docs/building-blocks/reusable-microservices/jeap-deploymentlog-service/getting-started',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'deployment', 'java'],
} satisfies Project;
