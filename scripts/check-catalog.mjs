import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const softwareDirectory = path.join(repositoryRoot, 'lib/catalog/software');
const errors = [];
const counts = {
  agencies: null,
  projects: null,
  policies: null,
  timeline: null,
  glossary: null,
  officialSources: null,
  freshnessProjects: null,
  availabilityProjects: null,
};

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
const availabilityFailureThreshold = 2;
const catalogModules = {
  agencies: '/lib/catalog/agencies.ts',
  projects: '/lib/catalog/software/index.ts',
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

function validateProjectOpenSourceYears(entries) {
  const currentYear = new Date().getUTCFullYear();
  entries.forEach((project, index) => {
    if (!isRecord(project)) return;

    const { openSourceYear } = project;
    if (
      !Number.isInteger(openSourceYear) ||
      openSourceYear < 1000 ||
      openSourceYear > currentYear
    ) {
      errors.push(
        `${entryLabel('projects', project, index)}.openSourceYear must be an integer from 1000 through ${currentYear}; got ${describe(openSourceYear)}`,
      );
    }
  });
}

function validateProjectDirectoryHolds(entries) {
  entries.forEach((project, index) => {
    if (!isRecord(project) || project.directory === undefined) return;

    const label = `${entryLabel('projects', project, index)}.directory`;
    const directory = project.directory;
    if (!isRecord(directory)) {
      errors.push(
        `${label} must be an object when provided; got ${describe(directory)}`,
      );
      return;
    }

    const allowedFields = new Set(['status', 'reason', 'reviewed']);
    for (const field of Object.keys(directory)) {
      if (!allowedFields.has(field))
        errors.push(`${label}.${field} is not a supported directory field`);
    }

    if (directory.status !== 'disabled')
      errors.push(
        `${label}.status must be "disabled"; got ${describe(directory.status)}`,
      );
    if (typeof directory.reason !== 'string' || !directory.reason.trim())
      errors.push(
        `${label}.reason must be a nonempty string; got ${describe(directory.reason)}`,
      );
    if (!isCalendarDate(directory.reviewed))
      errors.push(
        `${label}.reviewed must be a real date in YYYY-MM-DD format; got ${describe(directory.reviewed)}`,
      );
    else if (directory.reviewed > new Date().toISOString().slice(0, 10))
      errors.push(
        `${label}.reviewed cannot be in the future; got ${describe(directory.reviewed)}`,
      );
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

function validateSoftwareRecordFiles(records, indexedProjects) {
  const indexedIdCounts = new Map();
  const recordIdCounts = new Map();

  indexedProjects.forEach((project) => {
    if (!isRecord(project) || typeof project.id !== 'string') return;
    indexedIdCounts.set(project.id, (indexedIdCounts.get(project.id) ?? 0) + 1);
  });

  records.forEach(({ filename, project }) => {
    const recordPath = `lib/catalog/software/${filename}`;

    if (!isRecord(project)) {
      errors.push(
        `${recordPath} must default export a software record object; got ${describe(project)}`,
      );
      return;
    }

    const { id } = project;
    if (typeof id !== 'string' || id.length === 0) {
      errors.push(
        `${recordPath} default export must have a nonempty id; got ${describe(id)}`,
      );
      return;
    }

    const expectedFilename = `${id}.ts`;
    if (filename !== expectedFilename) {
      errors.push(
        `${recordPath} filename must match its project id; expected ${describe(expectedFilename)} for id ${describe(id)}`,
      );
    }

    recordIdCounts.set(id, (recordIdCounts.get(id) ?? 0) + 1);
  });

  const allIds = new Set([...indexedIdCounts.keys(), ...recordIdCounts.keys()]);

  for (const id of [...allIds].sort()) {
    const indexedCount = indexedIdCounts.get(id) ?? 0;
    const recordCount = recordIdCounts.get(id) ?? 0;

    if (recordCount > indexedCount) {
      const difference = recordCount - indexedCount;
      errors.push(
        `lib/catalog/software has ${difference} unindexed record file${difference === 1 ? '' : 's'} with project id ${describe(id)}; import each record exactly once in lib/catalog/software/index.ts`,
      );
    }

    if (indexedCount > recordCount) {
      const difference = indexedCount - recordCount;
      errors.push(
        `lib/catalog/software/index.ts has ${difference} project${difference === 1 ? '' : 's'} with id ${describe(id)} but no matching record file; add the record file or remove the index entry`,
      );
    }
  }
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
  } else if (value > new Date().toISOString().slice(0, 10)) {
    errors.push(`${label} cannot be in the future; got ${describe(value)}`);
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

function validateProjectFreshness(snapshot, projects) {
  const label = 'lib/catalog/project-freshness.json';
  if (!isRecord(snapshot)) {
    errors.push(
      `${label} must contain an object snapshot; got ${describe(snapshot)}`,
    );
    return;
  }

  const generatedAt = snapshot.generatedAt;
  if (!isCalendarDate(generatedAt)) {
    errors.push(
      `${label}.generatedAt must be a real date in YYYY-MM-DD format; got ${describe(generatedAt)}`,
    );
  } else {
    const ageDays = Math.floor(
      (Date.now() - Date.parse(`${generatedAt}T00:00:00Z`)) / 86_400_000,
    );
    if (ageDays < -1)
      errors.push(
        `${label}.generatedAt cannot be in the future; got ${describe(generatedAt)}`,
      );
    if (ageDays > 45)
      errors.push(
        `${label} is ${ageDays} days old; run npm run review:freshness before publishing`,
      );
  }

  const expectedYears = isCalendarDate(generatedAt)
    ? Array.from(
        { length: 5 },
        (_, index) => Number(generatedAt.slice(0, 4)) - 4 + index,
      )
    : [];
  if (
    !Array.isArray(snapshot.years) ||
    snapshot.years.length !== 5 ||
    snapshot.years.some((year, index) => year !== expectedYears[index])
  ) {
    errors.push(
      `${label}.years must contain the five consecutive years ending in the snapshot year; got ${describe(snapshot.years)}`,
    );
  }

  if (!isRecord(snapshot.projects)) {
    errors.push(
      `${label}.projects must be an object keyed by project ID; got ${describe(snapshot.projects)}`,
    );
    return;
  }
  counts.freshnessProjects = Object.keys(snapshot.projects).length;

  const projectById = new Map(
    projects.filter(isRecord).map((project) => [project.id, project]),
  );
  for (const id of projectById.keys()) {
    if (!(id in snapshot.projects))
      errors.push(
        `${label}.projects is missing catalog project ${describe(id)}`,
      );
  }
  for (const id of Object.keys(snapshot.projects)) {
    if (!projectById.has(id))
      errors.push(`${label}.projects contains unknown project ${describe(id)}`);
  }

  const statuses = new Set([
    'fresh',
    'current',
    'quiet',
    'historical',
    'unknown',
  ]);
  const collectionStatuses = new Set(['measured', 'unavailable']);
  const linkStatuses = new Set([
    'ok',
    'redirected',
    'auth-required',
    'rate-limited',
    'not-found',
    'transient',
    'unavailable',
    'error',
  ]);

  for (const [id, record] of Object.entries(snapshot.projects)) {
    const project = projectById.get(id);
    const recordLabel = `${label}.projects[${JSON.stringify(id)}]`;
    if (!isRecord(record)) {
      errors.push(`${recordLabel} must be an object; got ${describe(record)}`);
      continue;
    }

    for (const field of [
      'activitySource',
      'activitySourceLabel',
      'activityBasis',
    ]) {
      if (typeof record[field] !== 'string' || !record[field].trim())
        errors.push(
          `${recordLabel}.${field} must be a nonempty string; got ${describe(record[field])}`,
        );
    }
    if (!normalizedHttpUrlIdentity(record.activitySource))
      errors.push(
        `${recordLabel}.activitySource must be an HTTP(S) URL; got ${describe(record.activitySource)}`,
      );
    if (!statuses.has(record.status))
      errors.push(
        `${recordLabel}.status is invalid; got ${describe(record.status)}`,
      );
    if (!collectionStatuses.has(record.collectionStatus))
      errors.push(
        `${recordLabel}.collectionStatus is invalid; got ${describe(record.collectionStatus)}`,
      );
    if (![true, false, null].includes(record.archived))
      errors.push(
        `${recordLabel}.archived must be true, false, or null; got ${describe(record.archived)}`,
      );
    if (
      record.headOid !== null &&
      (typeof record.headOid !== 'string' ||
        !/^[0-9a-f]{40,64}$/i.test(record.headOid))
    ) {
      errors.push(
        `${recordLabel}.headOid must be null or a 40- to 64-character hexadecimal object ID; got ${describe(record.headOid)}`,
      );
    }
    if (record.collectionStatus === 'unavailable' && record.headOid !== null) {
      errors.push(
        `${recordLabel} marks activity unavailable but includes a head OID`,
      );
    }
    if (
      record.lastChangeAt !== null &&
      (!isCalendarDate(record.lastChangeAt) ||
        (isCalendarDate(generatedAt) && record.lastChangeAt > generatedAt))
    ) {
      errors.push(
        `${recordLabel}.lastChangeAt must be null or a real date no later than generatedAt; got ${describe(record.lastChangeAt)}`,
      );
    }
    if (
      isCalendarDate(generatedAt) &&
      record.status !==
        expectedFreshnessStatus(
          record.lastChangeAt,
          record.archived,
          generatedAt,
        )
    ) {
      errors.push(
        `${recordLabel}.status is inconsistent with lastChangeAt, archived, and the freshness thresholds`,
      );
    }

    if (
      !Array.isArray(record.annualCommits) ||
      record.annualCommits.length !== expectedYears.length
    ) {
      errors.push(
        `${recordLabel}.annualCommits must contain one bucket per snapshot year; got ${describe(record.annualCommits)}`,
      );
    } else {
      record.annualCommits.forEach((bucket, index) => {
        const bucketLabel = `${recordLabel}.annualCommits[${index}]`;
        if (
          !isRecord(bucket) ||
          bucket.year !== expectedYears[index] ||
          (bucket.commits !== null &&
            (!Number.isSafeInteger(bucket.commits) || bucket.commits < 0))
        ) {
          errors.push(
            `${bucketLabel} must contain the matching year and a nonnegative integer or null commit count; got ${describe(bucket)}`,
          );
        }
      });
      const missingCounts = record.annualCommits.some(
        (bucket) => bucket?.commits === null,
      );
      if (record.collectionStatus === 'measured' && missingCounts)
        errors.push(
          `${recordLabel} marks activity measured but has missing commit counts`,
        );
      if (
        record.collectionStatus === 'unavailable' &&
        !record.annualCommits.every((bucket) => bucket?.commits === null)
      )
        errors.push(
          `${recordLabel} marks activity unavailable but includes commit counts`,
        );
    }

    if (!isRecord(record.links)) {
      errors.push(
        `${recordLabel}.links must be an object; got ${describe(record.links)}`,
      );
      continue;
    }
    if (project) {
      const expectedLinks = {
        repository: project.repository,
        official: project.officialUrl,
        ...(project.evidenceUrl ? { provenance: project.evidenceUrl } : {}),
      };
      const actualRoles = Object.keys(record.links).sort();
      const expectedRoles = Object.keys(expectedLinks).sort();
      if (JSON.stringify(actualRoles) !== JSON.stringify(expectedRoles))
        errors.push(
          `${recordLabel}.links must exactly cover ${expectedRoles.join(', ')}`,
        );
      for (const [role, expectedUrl] of Object.entries(expectedLinks)) {
        const link = record.links[role];
        const linkLabel = `${recordLabel}.links.${role}`;
        if (!isRecord(link)) {
          errors.push(`${linkLabel} must be an object; got ${describe(link)}`);
          continue;
        }
        if (link.url !== expectedUrl)
          errors.push(
            `${linkLabel}.url must match the catalog URL ${describe(expectedUrl)}; got ${describe(link.url)}`,
          );
        if (!linkStatuses.has(link.status))
          errors.push(
            `${linkLabel}.status is invalid; got ${describe(link.status)}`,
          );
        if (
          link.httpStatus !== undefined &&
          (!Number.isInteger(link.httpStatus) ||
            link.httpStatus < 100 ||
            link.httpStatus > 599)
        )
          errors.push(
            `${linkLabel}.httpStatus must be an HTTP status code when present; got ${describe(link.httpStatus)}`,
          );
        if (
          link.finalUrl !== undefined &&
          !normalizedHttpUrlIdentity(link.finalUrl)
        )
          errors.push(
            `${linkLabel}.finalUrl must be an HTTP(S) URL when present; got ${describe(link.finalUrl)}`,
          );
        if (
          link.errorCode !== undefined &&
          (typeof link.errorCode !== 'string' || !link.errorCode)
        )
          errors.push(
            `${linkLabel}.errorCode must be a nonempty string when present; got ${describe(link.errorCode)}`,
          );
      }
    }
  }
}

function validateProjectAvailability(snapshot, projects) {
  const label = 'lib/catalog/project-availability.json';
  if (!isRecord(snapshot)) {
    errors.push(
      `${label} must contain an object snapshot; got ${describe(snapshot)}`,
    );
    return;
  }

  const generatedAt = snapshot.generatedAt;
  if (!isCalendarDate(generatedAt)) {
    errors.push(
      `${label}.generatedAt must be a real date in YYYY-MM-DD format; got ${describe(generatedAt)}`,
    );
  } else if (generatedAt > new Date().toISOString().slice(0, 10)) {
    errors.push(
      `${label}.generatedAt cannot be in the future; got ${describe(generatedAt)}`,
    );
  }

  if (!isRecord(snapshot.projects)) {
    errors.push(
      `${label}.projects must be an object keyed by project ID; got ${describe(snapshot.projects)}`,
    );
    return;
  }
  counts.availabilityProjects = Object.keys(snapshot.projects).length;

  const projectById = new Map(
    projects.filter(isRecord).map((project) => [project.id, project]),
  );
  for (const id of projectById.keys()) {
    if (!(id in snapshot.projects))
      errors.push(
        `${label}.projects is missing catalog project ${describe(id)}`,
      );
  }
  for (const id of Object.keys(snapshot.projects)) {
    if (!projectById.has(id))
      errors.push(`${label}.projects contains unknown project ${describe(id)}`);
  }

  const statuses = new Set(['enabled', 'disabled']);
  const reasonCodes = new Set([
    'repository-unreachable',
    'public-evidence-unreachable',
  ]);
  const linkStatuses = new Set([
    'ok',
    'redirected',
    'auth-required',
    'rate-limited',
    'not-found',
    'transient',
    'unavailable',
    'error',
  ]);
  const linkFields = new Set([
    'url',
    'status',
    'httpStatus',
    'finalUrl',
    'errorCode',
  ]);

  for (const [id, record] of Object.entries(snapshot.projects)) {
    const project = projectById.get(id);
    const recordLabel = `${label}.projects[${JSON.stringify(id)}]`;
    if (!isRecord(record)) {
      errors.push(`${recordLabel} must be an object; got ${describe(record)}`);
      continue;
    }

    if (!statuses.has(record.status))
      errors.push(
        `${recordLabel}.status must be "enabled" or "disabled"; got ${describe(record.status)}`,
      );
    if (!isCalendarDate(record.statusChangedAt))
      errors.push(
        `${recordLabel}.statusChangedAt must be a real date in YYYY-MM-DD format; got ${describe(record.statusChangedAt)}`,
      );
    else if (
      isCalendarDate(generatedAt) &&
      record.statusChangedAt > generatedAt
    )
      errors.push(
        `${recordLabel}.statusChangedAt cannot be later than generatedAt; got ${describe(record.statusChangedAt)}`,
      );

    if (!Number.isSafeInteger(record.failureStreak) || record.failureStreak < 0)
      errors.push(
        `${recordLabel}.failureStreak must be a nonnegative safe integer; got ${describe(record.failureStreak)}`,
      );

    if (!Array.isArray(record.reasonCodes)) {
      errors.push(
        `${recordLabel}.reasonCodes must be an array; got ${describe(record.reasonCodes)}`,
      );
    } else {
      const seen = new Set();
      record.reasonCodes.forEach((reasonCode, index) => {
        if (!reasonCodes.has(reasonCode))
          errors.push(
            `${recordLabel}.reasonCodes[${index}] is invalid; got ${describe(reasonCode)}`,
          );
        if (seen.has(reasonCode))
          errors.push(
            `${recordLabel}.reasonCodes[${index}] duplicates ${describe(reasonCode)}`,
          );
        seen.add(reasonCode);
      });

      if (record.status === 'disabled' && record.reasonCodes.length === 0)
        errors.push(
          `${recordLabel} is disabled but has no availability reason code`,
        );
      if (
        record.status === 'enabled' &&
        Number.isSafeInteger(record.failureStreak) &&
        record.failureStreak >= availabilityFailureThreshold
      )
        errors.push(
          `${recordLabel} is enabled with failureStreak ${record.failureStreak}; records must disable at the ${availabilityFailureThreshold}-check threshold`,
        );
      if (
        record.status === 'enabled' &&
        record.reasonCodes.length > 0 &&
        record.failureStreak === 0
      )
        errors.push(
          `${recordLabel} is enabled with availability reason codes but no current failure streak`,
        );
    }

    if (!isRecord(record.links)) {
      errors.push(
        `${recordLabel}.links must be an object; got ${describe(record.links)}`,
      );
      continue;
    }
    if (!project) continue;

    const expectedLinks = {
      repository: project.repository,
      official: project.officialUrl,
      ...(project.evidenceUrl ? { provenance: project.evidenceUrl } : {}),
    };
    const actualRoles = Object.keys(record.links).sort();
    const expectedRoles = Object.keys(expectedLinks).sort();
    if (JSON.stringify(actualRoles) !== JSON.stringify(expectedRoles))
      errors.push(
        `${recordLabel}.links must exactly cover ${expectedRoles.join(', ')}`,
      );

    for (const [role, expectedUrl] of Object.entries(expectedLinks)) {
      const link = record.links[role];
      const linkLabel = `${recordLabel}.links.${role}`;
      if (!isRecord(link)) {
        errors.push(`${linkLabel} must be an object; got ${describe(link)}`);
        continue;
      }
      for (const field of Object.keys(link)) {
        if (!linkFields.has(field))
          errors.push(`${linkLabel}.${field} is not a supported link field`);
      }
      if (link.url !== expectedUrl)
        errors.push(
          `${linkLabel}.url must match the catalog URL ${describe(expectedUrl)}; got ${describe(link.url)}`,
        );
      if (!linkStatuses.has(link.status))
        errors.push(
          `${linkLabel}.status is invalid; got ${describe(link.status)}`,
        );
      if (
        link.httpStatus !== undefined &&
        (!Number.isInteger(link.httpStatus) ||
          link.httpStatus < 100 ||
          link.httpStatus > 599)
      )
        errors.push(
          `${linkLabel}.httpStatus must be an HTTP status code when present; got ${describe(link.httpStatus)}`,
        );
      if (
        link.finalUrl !== undefined &&
        !normalizedHttpUrlIdentity(link.finalUrl)
      )
        errors.push(
          `${linkLabel}.finalUrl must be an HTTP(S) URL when present; got ${describe(link.finalUrl)}`,
        );
      if (
        link.errorCode !== undefined &&
        (typeof link.errorCode !== 'string' || !link.errorCode.trim())
      )
        errors.push(
          `${linkLabel}.errorCode must be a nonempty string when present; got ${describe(link.errorCode)}`,
        );
    }
  }
}

function isCalendarDate(value) {
  if (typeof value !== 'string' || !datePattern.test(value)) return false;
  const timestamp = Date.parse(`${value}T00:00:00Z`);
  return (
    Number.isFinite(timestamp) &&
    new Date(timestamp).toISOString().slice(0, 10) === value
  );
}

function expectedFreshnessStatus(lastChangeAt, archived, generatedAt) {
  if (archived) return 'historical';
  if (!isCalendarDate(lastChangeAt) || lastChangeAt > generatedAt)
    return 'unknown';
  if (lastChangeAt >= calendarMonthsBefore(generatedAt, 6)) return 'fresh';
  if (lastChangeAt >= calendarMonthsBefore(generatedAt, 24)) return 'current';
  if (lastChangeAt >= calendarMonthsBefore(generatedAt, 48)) return 'quiet';
  return 'historical';
}

function calendarMonthsBefore(date, months) {
  const value = new Date(`${date}T00:00:00Z`);
  const sourceDay = value.getUTCDate();
  value.setUTCDate(1);
  value.setUTCMonth(value.getUTCMonth() - months);
  const lastTargetDay = new Date(
    Date.UTC(value.getUTCFullYear(), value.getUTCMonth() + 1, 0),
  ).getUTCDate();
  value.setUTCDate(Math.min(sourceDay, lastTargetDay));
  return value.toISOString().slice(0, 10);
}

function reportCounts() {
  const count = (name) =>
    counts[name] === null ? 'missing' : counts[name].toLocaleString('en-US');
  console.log(
    `Catalog entries: ${count('agencies')} agencies, ${count('projects')} projects, ${count('policies')} policies, ${count('timeline')} timeline events, ${count('glossary')} glossary terms, ${count('officialSources')} official sources, ${count('freshnessProjects')} freshness observations, ${count('availabilityProjects')} availability observations.`,
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

  const softwareRecordFilenames = (
    await readdir(softwareDirectory, { withFileTypes: true })
  )
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith('.ts') &&
        entry.name !== 'index.ts',
    )
    .map((entry) => entry.name)
    .sort();

  const [catalogEntries, softwareRecords, freshnessModule, availabilityModule] =
    await Promise.all([
      Promise.all(
        Object.entries(catalogModules).map(async ([exportName, modulePath]) => [
          exportName,
          (await vite.ssrLoadModule(modulePath))[exportName],
        ]),
      ),
      Promise.all(
        softwareRecordFilenames.map(async (filename) => ({
          filename,
          project: (
            await vite.ssrLoadModule(`/lib/catalog/software/${filename}`)
          ).default,
        })),
      ),
      vite.ssrLoadModule('/lib/catalog/freshness.ts'),
      vite.ssrLoadModule('/lib/catalog/availability.ts'),
    ]);
  const catalog = Object.fromEntries(catalogEntries);
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
  validateSoftwareRecordFiles(softwareRecords, projects);
  validateProjectAgencyReferences(projects, agencyIds);
  validateProjectOpenSourceYears(projects);
  validateProjectDirectoryHolds(projects);
  validateProjectFreshness(freshnessModule.freshnessSnapshot, projects);
  validateProjectAvailability(
    availabilityModule.availabilitySnapshot,
    projects,
  );

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
  timeline.forEach((event, index) => {
    validateHttpUrl(event, 'timeline', index, 'sourceUrl', { optional: true });
  });

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
