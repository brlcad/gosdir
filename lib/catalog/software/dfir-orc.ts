import type { Project } from '../types';

export default {
  id: 'dfir-orc',
  name: 'DFIR ORC (core)',
  summary:
    'ANSSI’s Windows forensic-collection framework used in cyber-incident response; this record covers the LGPL-licensed core repository, not separately licensed tools or configurations.',
  sponsor: 'French Cybersecurity Agency (ANSSI)',
  agencyIds: ['fr-anssi'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Cybersecurity',
  openSourceYear: 2019,
  license: 'LGPL-2.1-or-later (core repository only)',
  repository: 'https://github.com/DFIR-ORC/dfir-orc',
  officialUrl: 'https://dfir-orc.github.io/',
  evidenceUrl: 'https://anssi-fr.github.io/README.en.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'forensics', 'incident response', 'windows'],
} satisfies Project;
