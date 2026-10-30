import type { Project } from '../types';

export default {
  id: 'lanl-quantum-applications',
  name: 'Quantum Applications (QCA)',
  summary:
    'A Python library and examples for generating quantum circuits/tasks and estimating quantum resources.',
  sponsor:
    'Los Alamos National Laboratory; DARPA sponsorship is recorded in DOE CODE',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe', 'us-darpa'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum computing',
  openSourceYear: 2023,
  license: 'BSD-3-Clause for QCA repository source',
  repository: 'https://github.com/lanl-ansi/qc-applications',
  officialUrl: 'https://www.osti.gov/doecode/biblio/113774',
  evidenceUrl: 'https://arxiv.org/html/2506.08182v2#S1',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'darpa', 'quantum computing', 'python'],
} satisfies Project;
