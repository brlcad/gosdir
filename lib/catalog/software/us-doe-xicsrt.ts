import type { Project } from '../types';

export default {
  id: 'us-doe-xicsrt',
  name: 'xicsrt',
  summary:
    'A photon-based ray-tracing toolkit for X-ray imaging crystal spectrometers and related optical systems.',
  sponsor:
    'U.S. Department of Energy, Office of Science / Fusion Energy Sciences; Princeton Plasma Physics Laboratory',
  agencyIds: ['us-doe-princeton-plasma-physics-laboratory', 'us-doe'],
  geography:
    'Princeton Plasma Physics Laboratory, Princeton, New Jersey, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Fusion diagnostics & scientific ray tracing',
  openSourceYear: 2019,
  license:
    'MIT (canonical source; the project’s earlier 2019 grant was GPL-3.0)',
  repository: 'https://bitbucket.org/amicitas/xicsrt',
  officialUrl: 'https://xicsrt.readthedocs.io/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/55767',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united states', 'new jersey', 'doe', 'pppl', 'fusion', 'ray tracing'],
} satisfies Project;
