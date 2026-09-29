import type { Project } from '../types';

export default {
  id: 'plausi',
  name: 'Plausi',
  summary:
    'Zurich government R package for detecting anomalies in voting results; forms the analytical basis of its election-quality-control app.',
  sponsor: 'Office for Statistics and Data, Canton of Zurich',
  agencyIds: ['ch-canton-zurich-office-statistics-data'],
  geography: 'Switzerland (Zurich)',
  jurisdiction: 'International',
  domain: 'Elections',
  openSourceYear: 2024,
  license: 'MIT (public R package only; separate PlausiApp source is private)',
  repository: 'https://github.com/machinelearningZH/plausi',
  officialUrl: 'https://machinelearningzh.github.io/plausi/',
  evidenceUrl:
    'https://www.zh.ch/bin/zhweb/publish/regierungsratsbeschluss-unterlagen./2025/1305/RRB-2025-1305.pdf',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['switzerland', 'zurich', 'elections', 'statistics', 'r'],
} satisfies Project;
