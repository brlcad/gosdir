import type { Project } from '../types';

export default {
  id: 'chlorine-breakpoint-curve-simulator',
  name: 'Chlorine Breakpoint Curve Simulator',
  summary:
    'EPA web application for exploring drinking-water breakpoint chlorination under user-defined conditions.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Environmental Solutions and Emergency Response',
  agencyIds: ['us-epa-ord'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Drinking water',
  openSourceYear: 2019,
  license: 'MIT (published simulator source)',
  repository: 'https://github.com/USEPA/Chlorine_Breakpoint_Curve_Simulator',
  officialUrl: 'https://usepaord.shinyapps.io/Breakpoint-Curve/',
  evidenceUrl:
    'https://www.epa.gov/water-research/drinking-water-models-tools-and-methods',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united states', 'epa', 'drinking water', 'simulation'],
} satisfies Project;
