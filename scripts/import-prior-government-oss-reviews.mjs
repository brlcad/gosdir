#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ledgerRoot = path.join(root, 'docs/research/ledger');
const priorIds = [
  'open-mct',
  'f-prime',
  'moose',
  'openvsp',
  'cfs',
  'fire-dynamics-simulator',
  'epa-swmm',
  'cmaq',
  'modflow-6',
  'federal-audit-clearinghouse',
  'go-gov-sg',
  'mockpass',
  'web-experience-toolkit',
  'assemblyline',
  'taipei-city-dashboard',
  'leos',
  'digital-signature-service',
  'govuk-prototype-kit',
  'kadas-albireo',
  'la-suite-docs',
  'cliente-afirma',
  'cyberchef',
  'onyxia',
  'nl-wallet',
  'quality-time',
];
const licenseEvidence = {
  'epa-swmm': 'https://github.com/USEPA/Stormwater-Management-Model#readme',
  leos: 'https://interoperable-europe.ec.europa.eu/collection/justice-law-and-security/solution/leos-open-source-software-editing-legislation',
  'digital-signature-service': 'https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/european-commission-updates-t',
  'kadas-albireo': 'https://www.opensource.admin.ch/en/softwares/q6b0r9/',
  'cliente-afirma': 'https://administracionelectronica.gob.es/ctt/clienteafirma',
};

function normalize(raw) {
  const url = new URL(raw);
  url.protocol = 'https:';
  url.username = '';
  url.password = '';
  url.hostname = url.hostname.toLowerCase();
  url.pathname = url.pathname.replace(/\/+$/, '').replace(/\.git$/i, '').toLowerCase();
  url.search = '';
  url.hash = '';
  return url.href;
}

const vite = await createServer({
  root,
  configFile: false,
  appType: 'custom',
  logLevel: 'silent',
  server: { middlewareMode: true },
});
let projects;
try {
  ({ projects } = await vite.ssrLoadModule('/lib/catalog/software/index.ts'));
} finally {
  await vite.close();
}
const byId = new Map(projects.map((project) => [project.id, project]));
const sourceRows = [];
const reviewRows = [];
for (const [index, id] of priorIds.entries()) {
  const project = byId.get(id);
  if (!project) throw new Error(`Missing published project ${id}`);
  const repository = normalize(project.repository);
  const governmentEvidence = project.officialUrl;
  const yearEvidence = project.evidenceUrl ?? project.officialUrl;
  const repoUrl = new URL(project.repository);
  const directLicense = repoUrl.hostname === 'github.com' && repoUrl.pathname.split('/').filter(Boolean).length === 2
    ? `https://api.github.com/repos${repoUrl.pathname}/license`
    : project.repository;
  sourceRows.push({
    source_id: 'published-2026-09-26',
    source_row_id: String(index + 1),
    source_record_url: `docs/research/2026-09-government-oss-agent-review.md#published-${index < 10 ? 'us' : index < 15 ? 'global' : 'european'}-projects`,
    repository_url: project.repository,
    normalized_repository_url: repository,
    title: project.name,
    metadata_license: project.license,
    metadata_owner: project.sponsor,
    metadata_release_date: String(project.openSourceYear),
    metadata_screen: 'candidate',
    metadata_screen_reason: 'imported_prior_individual_publication_audit',
    retrieved_at_utc: '2026-09-26T00:00:00Z',
    metadata: { catalog_project_id: id, audit_document: 'docs/research/2026-09-government-oss-agent-review.md' },
  });
  reviewRows.push({
    normalized_repository_url: repository,
    reviewed_at_utc: '2026-09-26T00:00:00Z',
    reviewer: 'Prior multi-agent publication audit',
    decision: 'publishable',
    decision_reason: `Published as catalog project ${id} after individual primary-source review; see the linked audit document.`,
    checks: {
      government_provenance: {
        result: 'pass',
        evidence_url: governmentEvidence,
        note: `Official product or government page identifies ${project.sponsor}.`,
      },
      public_source: {
        result: 'pass',
        evidence_url: project.repository,
        note: 'Canonical public repository was accessible during the publication audit.',
      },
      eligible_license: {
        result: 'pass',
        evidence_url: licenseEvidence[id] ?? directLicense,
        note: `The audit identified ${project.license} for reusable code; consult the source and audit for scope.`,
      },
      primary_evidence: {
        result: 'pass',
        evidence_url: yearEvidence,
        note: `Primary project or release history supports a public open-source year of ${project.openSourceYear}.`,
      },
    },
    product_identity: project.name,
    agency: project.sponsor,
    geography: project.geography,
    open_source_year: project.openSourceYear,
    license: project.license,
    official_url: project.officialUrl,
    notability_evidence_url: project.officialUrl,
    audit_document: 'docs/research/2026-09-government-oss-agent-review.md',
  });
}

await mkdir(path.join(ledgerRoot, 'sources'), { recursive: true });
await mkdir(path.join(ledgerRoot, 'reviews'), { recursive: true });
await writeFile(path.join(ledgerRoot, 'sources/published-2026-09-26.jsonl'), sourceRows.map(JSON.stringify).join('\n') + '\n');
await writeFile(path.join(ledgerRoot, 'sources/published-2026-09-26.manifest.json'), JSON.stringify({
  source_id: 'published-2026-09-26',
  source_url: 'docs/research/2026-09-government-oss-agent-review.md',
  retrieved_at_utc: '2026-09-26T00:00:00Z',
  raw_entries: sourceRows.length,
  repository_rows: sourceRows.length,
  distinct_normalized_repositories: new Set(sourceRows.map((entry) => entry.normalized_repository_url)).size,
  metadata_candidates: sourceRows.length,
  metadata_excluded: 0,
  note: 'Imported from the earlier individually checked publication batch; not new work in this ledger run.',
}, null, 2) + '\n');
await writeFile(path.join(ledgerRoot, 'reviews/prior-publication.jsonl'), reviewRows.map(JSON.stringify).join('\n') + '\n');
console.log(`Imported ${sourceRows.length} prior published reviews`);
