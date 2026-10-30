import type { Project } from '../types';

export default {
  id: 'uk-ukaea-tokamap',
  name: 'TokaMap',
  summary:
    'TokaMap, the UKAEA-authored Python framework for defining and validating tokamak data mappings.',
  sponsor: 'UK Atomic Energy Authority (UKAEA)',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography: 'United Kingdom; fusion research at UKAEA/Culham',
  jurisdiction: 'International',
  domain: 'Fusion data engineering and scientific computing',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ukaea/tokamap',
  officialUrl: 'https://ukaea.github.io/tokamap/',
  evidenceUrl:
    'https://indico.iter.org/event/732/timetable/?view=standard_numbered_inline_minutes',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'TokaMap'],
} satisfies Project;
