import type { Project } from '../types';

export default {
  id: 'uk-ukaea-process',
  name: 'PROCESS',
  summary:
    'PROCESS, the UKAEA fusion-reactor systems code for self-consistent plant-parameter calculation and constrained optimization.',
  sponsor:
    'United Kingdom Atomic Energy Authority (UKAEA), an NDPB under the Department for Energy Security and Net Zero',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography:
    'United Kingdom; internationally used fusion research/design software',
  jurisdiction: 'International',
  domain: 'Fusion reactor systems modeling',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/ukaea/PROCESS',
  officialUrl: 'https://www.ukaea.org/service/process/',
  evidenceUrl:
    'https://scientific-publications.ukaea.uk/papers/preparing-systems-codes-for-power-plant-design/',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'PROCESS'],
} satisfies Project;
