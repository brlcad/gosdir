import type { Project } from '../types';

export default {
  id: 'tljh-repo2docker',
  name: 'tljh-repo2docker Plasma plugin',
  summary:
    'A The Littlest JupyterHub plugin for creating and selecting Docker-based learning environments in the Plasma platform.',
  sponsor:
    'PlasmaBio, with Université Paris Cité and Région Île-de-France project sponsorship; deployed by CNAM',
  agencyIds: [
    'fr-university-paris-cite',
    'fr-region-ile-de-france',
    'fr-conservatoire-national-arts-metiers',
  ],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Education and developer tools',
  openSourceYear: 2020,
  license: 'BSD-3-Clause (plugin source only)',
  repository: 'https://github.com/plasmabio/tljh-repo2docker',
  officialUrl: 'https://plasmabio.org/',
  evidenceUrl: 'https://plasmabio.org/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'education', 'JupyterHub', 'plugin', 'BSD-3-Clause'],
} satisfies Project;
