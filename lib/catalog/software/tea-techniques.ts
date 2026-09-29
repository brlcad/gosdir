import type { Project } from '../types';

export default {
  id: 'tea-techniques',
  name: 'TEA Techniques',
  summary:
    'A public-beta app for finding and comparing responsible-AI assurance methods through a searchable catalogue and guided wizard.',
  sponsor:
    'Alan Turing Institute; project-specific support from UKRI, including the EPSRC-funded CVDNet programme',
  agencyIds: ['uk-ukri', 'uk-epsrc'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'AI assurance',
  openSourceYear: 2025,
  license: 'MIT (TEA Techniques application source)',
  repository: 'https://github.com/alan-turing-institute/tea-techniques',
  officialUrl: 'https://alan-turing-institute.github.io/tea-techniques/',
  evidenceUrl:
    'https://alan-turing-institute.github.io/tea-techniques/about/project-info/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'research', 'ai assurance', 'responsible ai'],
} satisfies Project;
