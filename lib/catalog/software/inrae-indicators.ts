import type { Project } from '../types';

export default {
  id: 'inrae-indicators',
  name: 'Indicators (INRAE AgroClim)',
  summary:
    'A Java library of agro- and eco-climatic indicators and phenological models used in GETARI and AgroMetInfo/SEASON.',
  sponsor: 'INRAE AgroClim service unit',
  agencyIds: ['fr-inrae-agroclim'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Scientific computing',
  openSourceYear: 2018,
  license: 'GPL-3.0 (some source headers permit later versions)',
  repository: 'https://forge.inrae.fr/agroclim/Indicators/indicators-java',
  officialUrl: 'https://agroclim.inrae.fr/getari/en/',
  evidenceUrl: 'https://www.agrometinfo.fr/references.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'inrae', 'climate', 'java', 'research'],
} satisfies Project;
