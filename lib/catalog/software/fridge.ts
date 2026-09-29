import type { Project } from '../types';

export default {
  id: 'fridge',
  name: 'FRIDGE',
  summary:
    'Framework for deploying governed trusted research environments on shared AI and high-performance computing systems.',
  sponsor:
    'Alan Turing Institute-led DARE UK Early Adopter, funded by UK Research and Innovation',
  agencyIds: ['uk-ukri'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Sensitive-data research infrastructure',
  openSourceYear: 2025,
  license: 'BSD-3-Clause (FRIDGE repository source)',
  repository: 'https://github.com/alan-turing-institute/fridge',
  officialUrl:
    'https://dareuk.org.uk/how-we-work/ongoing-activities/dare-uk-early-adopters/fridge/',
  evidenceUrl: 'https://alan-turing-institute.github.io/fridge/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'research', 'secure data', 'infrastructure'],
} satisfies Project;
