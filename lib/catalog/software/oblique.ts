import type { Project } from '../types';

export default {
  id: 'oblique',
  name: 'Oblique',
  summary:
    'Swiss federal frontend ecosystem providing reusable UI libraries, tooling, and guidance for government applications.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication (FOITT)',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Design systems',
  openSourceYear: 2020,
  license:
    'MIT (FOITT-authored code; Font Awesome icons and fonts retain separate terms)',
  repository: 'https://github.com/oblique-bit/oblique',
  officialUrl: 'https://oblique.bit.admin.ch/',
  evidenceUrl:
    'https://github.com/oblique-bit/oblique/blob/master/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'frontend', 'design system', 'components'],
} satisfies Project;
