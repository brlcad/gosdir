import type { Project } from '../types';

export default {
  id: 'audiominer',
  name: 'Audiominer',
  summary:
    'A containerized transcription service for audio and video files, with speaker diarization and web-based workflows.',
  sponsor: 'Federal Press and Information Office of the Federal Government (BPA)',
  agencyIds: ['de-bpa'],
  geography: 'Germany',
  jurisdiction: 'International',
  domain: 'Speech recognition',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://gitlab.opencode.de/bpa/audiominer/audiominer',
  officialUrl: 'https://opencode.de/en/software/audiominer-8221',
  evidenceUrl: 'https://gitlab.opencode.de/bpa/audiominer/audiominer/-/blob/main/docs/installation.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['germany', 'federal', 'transcription', 'speech recognition'],
} satisfies Project;
