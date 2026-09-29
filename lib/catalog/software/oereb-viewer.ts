import type { Project } from '../types';

export default {
  id: 'oereb-viewer',
  name: 'ÖREB-Viewer',
  summary:
    'A web map for searching Swiss public-law land-use restrictions by address or parcel and downloading a PDF extract.',
  sponsor: 'Canton of Bern, Office for Geoinformation',
  agencyIds: ['ch-canton-bern-office-geoinformation'],
  geography: 'Switzerland (Bern)',
  jurisdiction: 'International',
  domain: 'Geospatial & cadastre',
  openSourceYear: 2022,
  license: 'MIT',
  repository: 'https://github.com/kanton-bern/oerebViewer',
  officialUrl:
    'https://www.agi.dij.be.ch/de/start/kataster/oereb-kataster/zugang-zu-oereb-informationen/oereb-viewer.html',
  evidenceUrl: 'https://www.opensource.admin.ch/en/softwares/jna35z/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'bern', 'land records', 'geospatial'],
} satisfies Project;
