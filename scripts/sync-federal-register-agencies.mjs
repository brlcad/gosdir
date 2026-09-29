import { createHash } from 'node:crypto';
import { rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceUrl = 'https://www.federalregister.gov/api/v1/agencies.json';
const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const outputPath = path.join(
  repositoryRoot,
  'lib/catalog/federal-register-agencies.json',
);

const reviewedArgument = process.argv.find((argument) =>
  argument.startsWith('--reviewed='),
);
const reviewed = reviewedArgument?.slice('--reviewed='.length);

if (
  !reviewed ||
  !/^\d{4}-\d{2}-\d{2}$/.test(reviewed) ||
  new Date(`${reviewed}T00:00:00Z`).toISOString().slice(0, 10) !== reviewed
) {
  throw new Error('--reviewed=YYYY-MM-DD is required and must be a real date.');
}

const response = await fetch(sourceUrl, {
  headers: { accept: 'application/json' },
});
if (!response.ok) {
  throw new Error(`Federal Register request failed with ${response.status}.`);
}

const responseText = await response.text();
const sourceSha256 = createHash('sha256').update(responseText).digest('hex');
const rawAgencies = JSON.parse(responseText);
if (!Array.isArray(rawAgencies)) {
  throw new Error('Federal Register response must be an array.');
}
if (rawAgencies.length < 400) {
  throw new Error(
    `Federal Register response is implausibly small (${rawAgencies.length} records).`,
  );
}

const agencies = rawAgencies
  .map((agency, index) => {
    if (
      !agency ||
      typeof agency !== 'object' ||
      !Number.isInteger(agency.id) ||
      typeof agency.name !== 'string' ||
      typeof agency.slug !== 'string' ||
      (agency.parent_id !== null && !Number.isInteger(agency.parent_id)) ||
      !Array.isArray(agency.child_ids)
    ) {
      throw new Error(`Invalid Federal Register agency at index ${index}.`);
    }

    const name = agency.name.trim();
    const slug = agency.slug.trim();
    if (!name || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      throw new Error(`Invalid agency name or slug at index ${index}.`);
    }

    return {
      id: agency.id,
      name,
      shortName:
        typeof agency.short_name === 'string' && agency.short_name.trim()
          ? agency.short_name.trim()
          : null,
      slug,
      parentId: agency.parent_id,
      url:
        typeof agency.url === 'string' && agency.url
          ? agency.url
          : `https://www.federalregister.gov/agencies/${agency.slug}`,
      agencyUrl:
        typeof agency.agency_url === 'string' && agency.agency_url.trim()
          ? agency.agency_url.trim()
          : null,
    };
  })
  .sort((left, right) => left.id - right.id);

const ids = new Set();
const slugs = new Set();
for (const agency of agencies) {
  if (ids.has(agency.id)) throw new Error(`Duplicate agency ID ${agency.id}.`);
  if (slugs.has(agency.slug))
    throw new Error(`Duplicate agency slug ${agency.slug}.`);
  ids.add(agency.id);
  slugs.add(agency.slug);
}
for (const agency of agencies) {
  if (agency.parentId !== null && !ids.has(agency.parentId)) {
    throw new Error(
      `Agency ${agency.id} references missing parent ${agency.parentId}.`,
    );
  }
  if (agency.parentId === agency.id) {
    throw new Error(`Agency ${agency.id} references itself as parent.`);
  }
}

const rawById = new Map(rawAgencies.map((agency) => [agency.id, agency]));
for (const agency of rawAgencies) {
  for (const childId of agency.child_ids) {
    if (
      !Number.isInteger(childId) ||
      rawById.get(childId)?.parent_id !== agency.id
    ) {
      throw new Error(
        `Agency ${agency.id} has inconsistent child relationship ${childId}.`,
      );
    }
  }
  if (
    agency.parent_id !== null &&
    !rawById.get(agency.parent_id)?.child_ids.includes(agency.id)
  ) {
    throw new Error(
      `Agency ${agency.id} is missing from parent ${agency.parent_id}'s children.`,
    );
  }
}

const normalizedById = new Map(agencies.map((agency) => [agency.id, agency]));
for (const agency of agencies) {
  const trail = new Set();
  let current = agency;
  while (current.parentId !== null) {
    if (trail.has(current.id)) {
      throw new Error(`Cycle detected from agency ${agency.id}.`);
    }
    trail.add(current.id);
    current = normalizedById.get(current.parentId);
    if (!current) break;
  }
}

const snapshot = {
  schemaVersion: 1,
  source: sourceUrl,
  sourceSha256,
  reviewed,
  count: agencies.length,
  scope:
    'Federal and quasi-federal units with current or past authority to publish in the Federal Register.',
  agencies,
};

const temporaryPath = `${outputPath}.tmp-${process.pid}`;
try {
  await writeFile(
    temporaryPath,
    `${JSON.stringify(snapshot, null, 2)}\n`,
    'utf8',
  );
  await rename(temporaryPath, outputPath);
} catch (error) {
  await rm(temporaryPath, { force: true });
  throw error;
}
console.log(`Wrote ${agencies.length} agencies to ${outputPath}`);
