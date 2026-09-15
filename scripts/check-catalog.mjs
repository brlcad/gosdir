import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const errors = [];
const counts = {
  agencies: null,
  projects: null,
  policies: null,
  timeline: null,
  glossary: null,
  officialSources: null,
};

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
const catalogModules = {
  agencies: '/lib/catalog/agencies.ts',
  projects: '/lib/catalog/software.ts',
  policies: '/lib/catalog/policies.ts',
  timeline: '/lib/catalog/timeline.ts',
  glossary: '/lib/catalog/glossary.ts',
  officialSources: '/lib/catalog/sources.ts',
};

const timelineYearPattern = /^\d{4}$/;

function describe(value) {
  if (typeof value === 'string') return JSON.stringify(value);
  if (value === undefined) return 'undefined';

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function requireArray(catalog, exportName) {
  const value = catalog[exportName];

  if (!Array.isArray(value)) {
    errors.push(
      `${catalogModules[exportName]} must export ${exportName} as an array; got ${describe(value)}`,
    );
    return [];
  }

  counts[exportName] = value.length;
  return value;
}

function entryLabel(collectionName, entry, index) {
  const identity =
    entry && typeof entry === 'object'
      ? (entry.id ?? entry.term ?? entry.label ?? entry.title ?? entry.name)
      : undefined;
  return typeof identity === 'string' && identity
    ? `${collectionName}[${index}] (${JSON.stringify(identity)})`
    : `${collectionName}[${index}]`;
}

function isRecord(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function normalizedTextIdentity(value) {
  return value.normalize('NFKC').trim().replace(/\s+/g, ' ').toLowerCase();
}

function normalizedHttpUrlIdentity(value) {
  if (typeof value !== 'string' || value.trim().length === 0) return null;

  try {
    const parsed = new URL(value.trim());
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:')
      return null;
    return parsed.href;
  } catch {
    return null;
  }
}

function normalizedRepositoryIdentity(value) {
  const normalizedUrl = normalizedHttpUrlIdentity(value);
  if (!normalizedUrl) return null;

  const parsed = new URL(normalizedUrl);
  parsed.hash = '';
  parsed.search = '';
  parsed.pathname = parsed.pathname.replace(/\/+$/, '').replace(/\.git$/i, '');
  if (parsed.hostname === 'github.com') {
    parsed.pathname = parsed.pathname.toLowerCase();
  }
  return parsed.href;
}

function validateRequiredStrings(
  entries,
  collectionName,
  fields,
  { reportInvalidEntries = false } = {},
) {
  entries.forEach((entry, index) => {
    if (!isRecord(entry)) {
      if (reportInvalidEntries) {
        errors.push(
          `${collectionName}[${index}] must be an object; got ${describe(entry)}`,
        );
      }
      return;
    }

    for (const field of fields) {
      const value = entry[field];
      if (typeof value !== 'string' || value.trim().length === 0) {
        errors.push(
          `${entryLabel(collectionName, entry, index)}.${field} must be a nonempty string; got ${describe(value)}`,
        );
      }
    }
  });
}

function validateUniqueField(
  entries,
  collectionName,
  field,
  normalize,
  identityName = field,
) {
  const firstByIdentity = new Map();

  entries.forEach((entry, index) => {
    if (!isRecord(entry)) return;

    const value = entry[field];
    if (typeof value !== 'string' || value.trim().length === 0) return;

    const identity = normalize(value);
    if (!identity) return;

    const first = firstByIdentity.get(identity);
    if (first) {
      errors.push(
        `${entryLabel(collectionName, entry, index)}.${field} duplicates ${entryLabel(collectionName, first.entry, first.index)}.${field} by normalized ${identityName} (${describe(value)}); keep one canonical record or make the identity distinct`,
      );
    } else {
      firstByIdentity.set(identity, { entry, index });
    }
  });
}

function validateTimelineNaturalKeys(entries) {
  const firstByIdentity = new Map();

  entries.forEach((entry, index) => {
    if (!isRecord(entry)) return;

    const { year, title } = entry;
    if (
      typeof year !== 'string' ||
      !timelineYearPattern.test(year) ||
      typeof title !== 'string' ||
      title.trim().length === 0
    ) {
      return;
    }

    const identity = `${year.trim()}\u0000${normalizedTextIdentity(title)}`;
    const first = firstByIdentity.get(identity);
    if (first) {
      errors.push(
        `${entryLabel('timeline', entry, index)} duplicates ${entryLabel('timeline', first.entry, first.index)} by normalized year and title (${describe(`${year.trim()} — ${title.trim()}`)}); merge the event or make its title distinct`,
      );
    } else {
      firstByIdentity.set(identity, { entry, index });
    }
  });
}

function validatePolicyYears(entries) {
  entries.forEach((policy, index) => {
    if (!isRecord(policy)) return;

    const { year } = policy;
    if (
      year !== 'Undated' &&
      (!Number.isInteger(year) || year < 1000 || year > 9999)
    ) {
      errors.push(
        `${entryLabel('policies', policy, index)}.year must be "Undated" or an integer from 1000 through 9999; got ${describe(year)}`,
      );
    }
  });
}

function validateTimelineYears(entries) {
  entries.forEach((event, index) => {
    if (!isRecord(event)) return;

    if (
      typeof event.year !== 'string' ||
      !timelineYearPattern.test(event.year)
    ) {
      errors.push(
        `${entryLabel('timeline', event, index)}.year must be a four-digit string; got ${describe(event.year)}`,
      );
    }
  });
}

function validateIds(entries, collectionName) {
  const ids = new Set();
  const firstIndexes = new Map();

  entries.forEach((entry, index) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      errors.push(
        `${collectionName}[${index}] must be an object; got ${describe(entry)}`,
      );
      return;
    }

    const { id } = entry;
    if (typeof id !== 'string' || id.length === 0) {
      errors.push(
        `${collectionName}[${index}].id must be a nonempty lowercase slug; got ${describe(id)}`,
      );
      return;
    }

    if (!slugPattern.test(id)) {
      errors.push(
        `${collectionName}[${index}].id must use lowercase letters, numbers, and single hyphens (for example, "sample-project"); got ${describe(id)}`,
      );
    }

    if (ids.has(id)) {
      errors.push(
        `${collectionName}[${index}].id duplicates ${collectionName}[${firstIndexes.get(id)}].id (${JSON.stringify(id)}); choose a unique ID`,
      );
    } else {
      ids.add(id);
      firstIndexes.set(id, index);
    }
  });

  return ids;
}

function validateHttpUrl(
  entry,
  collectionName,
  index,
  field,
  { optional = false } = {},
) {
  const value = entry && typeof entry === 'object' ? entry[field] : undefined;
  const label = `${entryLabel(collectionName, entry, index)}.${field}`;

  if (optional && value === undefined) return;

  if (typeof value !== 'string' || value.length === 0) {
    errors.push(
      `${label} must be a nonempty HTTP(S) URL; got ${describe(value)}`,
    );
    return;
  }

  try {
    const parsed = new URL(value);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      errors.push(
        `${label} must use http:// or https://; got ${describe(value)}`,
      );
    }
  } catch {
    errors.push(
      `${label} must be an absolute HTTP(S) URL; got ${describe(value)}`,
    );
  }
}

function validateDate(entry, collectionName, index, field) {
  const value = entry && typeof entry === 'object' ? entry[field] : undefined;
  const label = `${entryLabel(collectionName, entry, index)}.${field}`;

  if (typeof value !== 'string') {
    errors.push(
      `${label} must be a date in YYYY-MM-DD format; got ${describe(value)}`,
    );
    return;
  }

  const match = datePattern.exec(value);
  if (!match) {
    errors.push(
      `${label} must be a date in YYYY-MM-DD format; got ${describe(value)}`,
    );
    return;
  }

  const [, year, month, day] = match;
  const parsed = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day)),
  );
  if (
    parsed.getUTCFullYear() !== Number(year) ||
    parsed.getUTCMonth() + 1 !== Number(month) ||
    parsed.getUTCDate() !== Number(day)
  ) {
    errors.push(
      `${label} must be a real calendar date in YYYY-MM-DD format; got ${describe(value)}`,
    );
  }
}

function validateAgencyHierarchy(entries, agencyIds) {
  const parentById = new Map();

  entries.forEach((agency, index) => {
    if (!agency || typeof agency !== 'object' || Array.isArray(agency)) return;

    if (typeof agency.name !== 'string' || agency.name.trim().length === 0) {
      errors.push(
        `${entryLabel('agencies', agency, index)}.name must be a nonempty string; got ${describe(agency.name)}`,
      );
    }

    validateHttpUrl(agency, 'agencies', index, 'officialUrl');

    if (!('parentAgencyId' in agency)) return;

    const parentAgencyId = agency.parentAgencyId;
    if (typeof parentAgencyId !== 'string' || parentAgencyId.length === 0) {
      errors.push(
        `${entryLabel('agencies', agency, index)}.parentAgencyId must be a nonempty ID when provided; got ${describe(parentAgencyId)}`,
      );
      return;
    }

    if (!agencyIds.has(parentAgencyId)) {
      errors.push(
        `${entryLabel('agencies', agency, index)}.parentAgencyId references missing agencies ID ${describe(parentAgencyId)}; add that agency or correct the reference`,
      );
      return;
    }

    if (typeof agency.id === 'string' && agencyIds.has(agency.id)) {
      parentById.set(agency.id, parentAgencyId);
    }
  });

  const completed = new Set();

  for (const startId of parentById.keys()) {
    if (completed.has(startId)) continue;

    const path = [];
    const pathIndexes = new Map();
    let currentId = startId;

    while (currentId !== undefined && !completed.has(currentId)) {
      if (pathIndexes.has(currentId)) {
        const cycle = path.slice(pathIndexes.get(currentId));
        errors.push(
          `agencies parentAgencyId cycle detected: ${[...cycle, currentId].join(' -> ')}`,
        );
        break;
      }

      pathIndexes.set(currentId, path.length);
      path.push(currentId);
      currentId = parentById.get(currentId);
    }

    path.forEach((id) => completed.add(id));
  }
}

function validateProjectAgencyReferences(entries, agencyIds) {
  entries.forEach((project, index) => {
    if (!project || typeof project !== 'object' || Array.isArray(project)) {
      return;
    }

    const label = `${entryLabel('projects', project, index)}.agencyIds`;
    const references = project.agencyIds;

    if (!Array.isArray(references) || references.length === 0) {
      errors.push(
        `${label} must be a nonempty array of unique agency IDs; got ${describe(references)}`,
      );
      return;
    }

    const seen = new Set();

    references.forEach((reference, referenceIndex) => {
      if (typeof reference !== 'string' || reference.length === 0) {
        errors.push(
          `${label}[${referenceIndex}] must be a nonempty string; got ${describe(reference)}`,
        );
        return;
      }

      if (seen.has(reference)) {
        errors.push(
          `${label}[${referenceIndex}] duplicates agency ID ${describe(reference)}; list each agency once`,
        );
      } else {
        seen.add(reference);
      }

      if (!agencyIds.has(reference)) {
        errors.push(
          `${label}[${referenceIndex}] references missing agencies ID ${describe(reference)}; add that agency or correct the reference`,
        );
      }
    });
  });
}

function validateTimelineReferences(entries, projectIds, policyIds) {
  entries.forEach((entry, index) => {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      errors.push(
        `timeline[${index}] must be an object; got ${describe(entry)}`,
      );
      return;
    }

    for (const [field, ids, targetName] of [
      ['projectId', projectIds, 'projects'],
      ['policyId', policyIds, 'policies'],
    ]) {
      if (!(field in entry)) continue;

      const reference = entry[field];
      if (typeof reference !== 'string' || reference.length === 0) {
        errors.push(
          `timeline[${index}].${field} must be a nonempty ID when provided; got ${describe(reference)}`,
        );
      } else if (!ids.has(reference)) {
        errors.push(
          `timeline[${index}].${field} references missing ${targetName} ID ${describe(reference)}; add that entry or correct the reference`,
        );
      }
    }
  });
}

function reportCounts() {
  const count = (name) =>
    counts[name] === null ? 'missing' : counts[name].toLocaleString('en-US');
  console.log(
    `Catalog entries: ${count('agencies')} agencies, ${count('projects')} projects, ${count('policies')} policies, ${count('timeline')} timeline events, ${count('glossary')} glossary terms, ${count('officialSources')} official sources.`,
  );
}

let vite;

try {
  vite = await createServer({
    root: repositoryRoot,
    configFile: false,
    appType: 'custom',
    logLevel: 'silent',
    server: { middlewareMode: true },
  });

  const catalog = Object.fromEntries(
    await Promise.all(
      Object.entries(catalogModules).map(async ([exportName, modulePath]) => [
        exportName,
        (await vite.ssrLoadModule(modulePath))[exportName],
      ]),
    ),
  );
  const agencies = requireArray(catalog, 'agencies');
  const projects = requireArray(catalog, 'projects');
  const policies = requireArray(catalog, 'policies');
  const timeline = requireArray(catalog, 'timeline');
  const glossary = requireArray(catalog, 'glossary');
  const officialSources = requireArray(catalog, 'officialSources');

  const agencyIds = validateIds(agencies, 'agencies');
  const projectIds = validateIds(projects, 'projects');
  const policyIds = validateIds(policies, 'policies');

  validateAgencyHierarchy(agencies, agencyIds);
  validateProjectAgencyReferences(projects, agencyIds);

  validateRequiredStrings(agencies, 'agencies', [
    'geography',
    'jurisdiction',
    'type',
  ]);
  validateUniqueField(
    agencies,
    'agencies',
    'name',
    normalizedTextIdentity,
    'case- and whitespace-insensitive name',
  );

  validateRequiredStrings(projects, 'projects', [
    'name',
    'summary',
    'sponsor',
    'geography',
    'jurisdiction',
    'domain',
    'license',
    'status',
  ]);
  validateUniqueField(
    projects,
    'projects',
    'repository',
    normalizedRepositoryIdentity,
    'repository URL',
  );

  projects.forEach((project, index) => {
    validateHttpUrl(project, 'projects', index, 'repository');
    validateHttpUrl(project, 'projects', index, 'officialUrl');
    validateHttpUrl(project, 'projects', index, 'evidenceUrl', {
      optional: true,
    });
    validateDate(project, 'projects', index, 'verified');
  });

  validateRequiredStrings(policies, 'policies', [
    'title',
    'issuer',
    'geography',
    'type',
    'status',
    'summary',
  ]);
  validatePolicyYears(policies);
  validateUniqueField(
    policies,
    'policies',
    'url',
    normalizedHttpUrlIdentity,
    'source URL',
  );

  policies.forEach((policy, index) => {
    validateHttpUrl(policy, 'policies', index, 'url');
    validateDate(policy, 'policies', index, 'reviewed');
  });

  validateRequiredStrings(timeline, 'timeline', ['title', 'body']);
  validateTimelineYears(timeline);
  validateTimelineNaturalKeys(timeline);

  validateRequiredStrings(glossary, 'glossary', ['term', 'definition'], {
    reportInvalidEntries: true,
  });
  validateUniqueField(
    glossary,
    'glossary',
    'term',
    normalizedTextIdentity,
    'case- and whitespace-insensitive term',
  );

  validateRequiredStrings(
    officialSources,
    'officialSources',
    ['label', 'note'],
    { reportInvalidEntries: true },
  );
  validateUniqueField(
    officialSources,
    'officialSources',
    'url',
    normalizedHttpUrlIdentity,
    'source URL',
  );
  validateUniqueField(
    officialSources,
    'officialSources',
    'label',
    normalizedTextIdentity,
    'case- and whitespace-insensitive label',
  );

  officialSources.forEach((source, index) => {
    validateHttpUrl(source, 'officialSources', index, 'url');
  });

  validateTimelineReferences(timeline, projectIds, policyIds);
} catch (error) {
  const detail =
    error instanceof Error ? error.stack || error.message : String(error);
  errors.push(
    `Unable to load and validate lib/catalog modules through Vite:\n${detail}`,
  );
} finally {
  if (vite) {
    try {
      await vite.close();
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      errors.push(`Unable to close the Vite server cleanly: ${detail}`);
    }
  }
}

reportCounts();

if (errors.length > 0) {
  console.error(
    `Catalog check failed with ${errors.length.toLocaleString('en-US')} error${errors.length === 1 ? '' : 's'}:`,
  );
  errors.forEach((error, index) => console.error(`${index + 1}. ${error}`));
  process.exitCode = 1;
} else {
  console.log('Catalog check passed.');
}
