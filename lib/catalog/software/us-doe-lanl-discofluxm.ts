import type { Project } from '../types';

export default {
  id: 'us-doe-lanl-discofluxm',
  name: 'DiscoFluxM',
  summary:
    'A MOOSE-based material model for dislocation-transport crystal-plasticity simulations.',
  sponsor: 'Los Alamos National Laboratory / U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Developed at Los Alamos National Laboratory, New Mexico; model applications are not geographically restricted',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science & crystal plasticity',
  openSourceYear: 2024,
  license: 'GNU LGPL-2.1-only for the project source',
  repository: 'https://github.com/lanl/DiscoFluxM',
  officialUrl: 'https://www.osti.gov/doecode/biblio/127424',
  evidenceUrl: 'https://github.com/idaholab/moose/discussions/33299',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['doe', 'lanl', 'materials science', 'moose', 'crystal plasticity'],
} satisfies Project;
