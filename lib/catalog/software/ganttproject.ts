import type { Project } from '../types';

export default {
  id: 'ganttproject',
  name: 'GanttProject',
  summary:
    'A cross-platform desktop project-management application for Gantt and PERT charts, task dependencies, resource planning, and project export.',
  sponsor:
    'Actimage developers sponsored by France’s ADAE contributed substantial code to GanttProject 2.0 in 2005; the project began independently in 2003.',
  agencyIds: ['fr-adae'],
  geography: 'France (government-sponsored contribution); global desktop product',
  jurisdiction: 'International',
  domain: 'Project management',
  openSourceYear: 2003,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/bardsoftware/ganttproject',
  officialUrl: 'https://www.ganttproject.biz/',
  evidenceUrl: 'https://www.ganttproject.biz/about',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'government-sponsored', 'project management', 'planning'],
} satisfies Project;
