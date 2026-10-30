import type { Project } from '../types';

export default {
  id: 'alphasaxs-metfish',
  name: 'AlphaSAXS (metfish)',
  summary:
    'A framework for experimentally constrained reconstruction of protein conformations, known as AlphaSAXS and distributed as the metfish Python package.',
  sponsor:
    'Lawrence Berkeley National Laboratory, U.S. Department of Energy Office of Science; LDRD-supported research',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Structural biology and scientific computing',
  openSourceYear: 2025,
  license: 'BSD-3-Clause-LBNL (OSI-approved enhancements variant)',
  repository: 'https://github.com/lbl-cbg/metfish',
  officialUrl: 'https://www.osti.gov/doecode/biblio/168250',
  evidenceUrl:
    'https://www.biorxiv.org/content/10.64898/2026.03.12.708611v1.full',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'berkeley lab',
    'structural biology',
    'saxs',
    'protein modeling',
    'python',
  ],
} satisfies Project;
