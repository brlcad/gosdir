import type { Project } from '../types';

export default {
  id: 'chvote-offline-administration-v1',
  name: 'CHVote v1 Offline Administration Application',
  summary:
    'Historical, publicly released Geneva election-administration application for offline ballot-key generation and ballot decryption; this is a security-critical component, not the full online voting system.',
  sponsor:
    'Republic and Canton of Geneva State Chancellery and Geneva IT Department (now OCSIN)',
  agencyIds: ['ch-geneva-state-chancellery', 'ch-geneva-ocsin'],
  geography: 'Switzerland (Geneva)',
  jurisdiction: 'International',
  domain: 'Elections and civic technology',
  openSourceYear: 2016,
  license: 'GNU Affero General Public License v3.0 (AGPL-3.0)',
  repository: 'https://github.com/republique-et-canton-de-geneve/chvote-1-0',
  officialUrl:
    'https://www.ge.ch/actualite/vote-electronique-transparence-nouvelle-etape-franchie-21-04-2017',
  evidenceUrl:
    'https://www.ge.ch/actualite/six-cantons-ont-utilise-chvote-plateforme-vote-electronique-genevoise-lors-votation-du-24-septembre-2017-24-09-2017',
  status: 'Archived',
  verified: '2026-09-28',
  tags: ['switzerland', 'geneva', 'elections', 'e-voting', 'security'],
} satisfies Project;
