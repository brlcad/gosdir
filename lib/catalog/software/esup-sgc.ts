import type { Project } from '../types';

export default {
  id: 'esup-sgc',
  name: 'ESUP-SGC',
  summary:
    'A public-university card-management application for issuing and maintaining student and staff NFC cards.',
  sponsor: 'Université de Rouen Normandie and ESUP-Portail, with French higher-education ministry scale-out funding',
  agencyIds: ['fr-university-rouen-normandie'],
  geography: 'France (Normandy; multi-institution deployment)',
  jurisdiction: 'International',
  domain: 'Education',
  openSourceYear: 2017,
  license: 'Apache-2.0 (core application; linked NFC and client services separate)',
  repository: 'https://github.com/EsupPortail/esup-sgc',
  officialUrl: 'https://www.esup-portail.org/wiki/spaces/SGC/overview',
  evidenceUrl:
    'https://www.esup-portail.org/wiki/spaces/SGC/pages/1221722115/ESUP-SGC-Client+et+%C3%A9dition+des+cartes',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'university', 'student cards', 'nfc', 'esup-portail'],
} satisfies Project;
