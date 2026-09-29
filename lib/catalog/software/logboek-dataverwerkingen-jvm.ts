import type { Project } from '../types';

export default {
  id: 'logboek-dataverwerkingen-jvm',
  name: 'Logboek Dataverwerkingen JVM',
  summary:
    'A Dutch-government Kotlin/Java library for integrating the Logius data-processing log standard into applications.',
  sponsor:
    'Ministry of the Interior and Kingdom Relations, MijnOverheid Zakelijk program',
  agencyIds: ['nl-ministry-interior-kingdom-relations'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'EUPL-1.2 for the library source',
  repository: 'https://github.com/MinBZK/moza-logboekdataverwerking',
  officialUrl:
    'https://central.sonatype.com/artifact/nl.mijnoverheidzakelijk.ldv/logboekdataverwerking-wrapper',
  evidenceUrl:
    'https://github.com/MinBZK/moza-logboekdataverwerking/commit/c02d9a66baea072f37976d4e65b16822552429f1',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'logius', 'data processing', 'jvm'],
} satisfies Project;
