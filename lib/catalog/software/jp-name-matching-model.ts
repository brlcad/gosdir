import type { Project } from '../types';

export default {
  id: 'jp-name-matching-model',
  name: 'Name Matching Support Model',
  summary:
    'Self-hostable source for Japan’s Digital Agency service that matches and infers Japanese kanji, alphabetic, and kana name forms.',
  sponsor: 'Digital Agency of Japan',
  agencyIds: ['jp-digital-agency'],
  geography: 'Japan',
  jurisdiction: 'International',
  domain: 'Data interoperability',
  openSourceYear: 2025,
  license: 'MIT (repository source; separately distributed weights and dictionaries excluded)',
  repository: 'https://github.com/digital-go-jp/kanjikana-model',
  officialUrl: 'https://developers.digital.go.jp/documents/name-matching-support/about/',
  evidenceUrl: 'https://developers.digital.go.jp/documents/name-matching-support/about/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['japan', 'name matching', 'kana', 'self-hosting'],
} satisfies Project;
