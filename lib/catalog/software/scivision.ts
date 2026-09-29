import type { Project } from '../types';

export default {
  id: 'scivision',
  name: 'Scivision',
  summary:
    'Scientific computer-vision framework and model catalogue tested with Cefas on North Sea plankton classification.',
  sponsor:
    'Alan Turing Institute AI for Science and Government programme, supported by UKRI through EPSRC Grant EP/W006022/1',
  agencyIds: ['uk-ukri', 'uk-epsrc'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Science & engineering',
  openSourceYear: 2021,
  license: 'BSD-3-Clause (Scivision repository source)',
  repository: 'https://github.com/alan-turing-institute/scivision',
  officialUrl: 'https://scivision.readthedocs.io/en/latest/',
  evidenceUrl:
    'https://www.turing.ac.uk/sites/default/files/2023-05/asgbriefing_scivision_final.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'research', 'computer vision', 'python'],
} satisfies Project;
