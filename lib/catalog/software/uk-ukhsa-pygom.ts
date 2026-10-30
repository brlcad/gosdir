import type { Project } from '../types';

export default {
  id: 'uk-ukhsa-pygom',
  name: 'PyGOM',
  summary:
    'General-purpose Python package for ordinary differential equations and compartmental modeling, originated at Public Health England and now maintained in UKHSA’s collaboration organization.',
  sponsor: 'UK Health Security Agency (originated at Public Health England)',
  agencyIds: ['uk-health-security-agency'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Scientific computing and epidemiological modeling',
  openSourceYear: 2016,
  license: 'GPL-2.0-only (GNU General Public License version 2)',
  repository: 'https://github.com/ukhsa-collaboration/pygom',
  officialUrl: 'https://ukhsa-collaboration.github.io/pygom/md/intro.html',
  evidenceUrl:
    'https://www.gov.uk/government/publications/business-critical-models-for-department-of-health-and-social-care/business-critical-models-for-department-of-health-and-social-care-and-its-arms-length-bodies',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'UKHSA',
    'Public Health England',
    'ODE',
    'epidemiology',
  ],
} satisfies Project;
