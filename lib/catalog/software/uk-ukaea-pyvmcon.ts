import type { Project } from '../types';

export default {
  id: 'uk-ukaea-pyvmcon',
  name: 'PyVMCON',
  summary:
    "PyVMCON, UKAEA's Python implementation/package for the VMCON nonlinear constrained optimization algorithm.",
  sponsor:
    'United Kingdom Atomic Energy Authority (UKAEA), an NDPB under the Department for Energy Security and Net Zero',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography: 'United Kingdom; reusable international scientific software',
  jurisdiction: 'International',
  domain: 'Scientific computing and optimization',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/ukaea/PyVMCON',
  officialUrl: 'https://ukaea.github.io/PyVMCON/',
  evidenceUrl: 'https://github.com/ukaea/PyVMCON/releases/tag/v2.4.2',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'PyVMCON'],
} satisfies Project;
