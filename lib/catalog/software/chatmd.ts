import type { Project } from '../types';

export default {
  id: 'chatmd',
  name: 'ChatMD',
  summary:
    'A Markdown-to-chatbot authoring tool created by a DRANE Lyon project lead, institutionally supported by DRANE Lyon and the French Ministry of Education’s DNE.',
  sponsor: 'DRANE Lyon and the Direction du numérique pour l’éducation (DNE), French Ministry of National Education',
  agencyIds: ['fr-drane-lyon', 'fr-dne'],
  geography: 'France (Académie de Lyon; national education use)',
  jurisdiction: 'International',
  domain: 'Education & conversational interfaces',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://forge.apps.education.fr/chatMD/chatMD.forge.apps.education.fr',
  officialUrl: 'https://chatmd.forge.apps.education.fr/',
  evidenceUrl: 'https://chatmd.forge.apps.education.fr/docs/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'education', 'chatbot', 'markdown', 'public service'],
} satisfies Project;
