import type { Project } from '../types';

export default {
  id: 'masterportal',
  name: 'Masterportal',
  summary:
    'An open-source geoportal platform that lets public bodies build map applications on a shared codebase.',
  sponsor: 'Free and Hanseatic City of Hamburg, State Office for Geoinformation and Surveying (LGV)',
  agencyIds: ['de-hamburg-lgv'],
  geography: 'Hamburg, Germany',
  jurisdiction: 'International',
  domain: 'Geospatial information',
  openSourceYear: 2015,
  license: 'MIT',
  repository: 'https://bitbucket.org/geowerkstatt-hamburg/masterportal',
  officialUrl:
    'https://www.hamburg.de/politik-und-verwaltung/behoerden/behoerde-fuer-stadtentwicklung-und-wohnen/aemter-und-landesbetrieb/landesbetrieb-geoinformation-und-vermessung/projekte-und-kooperationen/geowerkstatt/masterportal-245508',
  evidenceUrl:
    'https://www.connectedurbantwins.de/wissenstransfer/wissenswertes-fuer-kommunen/am-anfang-2/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['germany', 'hamburg', 'geospatial', 'geoportal'],
} satisfies Project;
