import type { Project } from '../types';

export default {
  id: 'fr-inria-parcoursvis',
  name: 'ParcoursVis',
  summary:
    'A temporal visualization system for exploring longitudinal medical events and patient pathways.',
  sponsor: 'Inria AVIZ, with the Health Data Hub, CNAMTS, and AP-HP',
  agencyIds: ['fr-inria', 'fr-health-data-hub', 'fr-cnam', 'fr-aphp'],
  geography:
    'Paris-Saclay, Île-de-France, France (Inria AVIZ; public-health data use is nationwide)',
  jurisdiction: 'International',
  domain: 'Health data visualization',
  openSourceYear: 2019,
  license: 'BSD-2-Clause (repository code; pybind11 submodule is BSD-3-Clause)',
  repository: 'https://gitlab.inria.fr/aviz/parcoursvis',
  officialUrl: 'https://www.aviz.fr/Research/ParcoursVis',
  evidenceUrl: 'https://www.health-data-hub.fr/projets/parcoursvis',
  status: 'Active',
  verified: '2026-10-20',
  tags: ['france', 'inria', 'health data', 'visualization', 'public health'],
} satisfies Project;
