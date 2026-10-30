import { randomUUID } from 'node:crypto';
import { mkdir, rename, unlink } from 'node:fs/promises';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

export function ledgerStateDirectory(root) {
  return process.env.GOSDIR_LEDGER_STATE_DIR
    ? path.resolve(process.env.GOSDIR_LEDGER_STATE_DIR)
    : path.join(root, '.ledger-state');
}

export function ledgerDatabasePath(root) {
  return path.join(ledgerStateDirectory(root), 'government-oss.sqlite3');
}

export function openLedgerDatabase(root) {
  const databasePath = ledgerDatabasePath(root);
  try {
    return new DatabaseSync(databasePath, {
      readOnly: true,
      enableForeignKeyConstraints: true,
    });
  } catch (error) {
    if (error?.code === 'ERR_SQLITE_ERROR') {
      throw new Error(
        `Missing or invalid local ledger database at ${databasePath}; run node scripts/build-government-oss-ledger.mjs first`,
        { cause: error },
      );
    }
    throw error;
  }
}

const schema = `
  PRAGMA foreign_keys = ON;
  PRAGMA journal_mode = OFF;
  PRAGMA synchronous = OFF;

  CREATE TABLE metadata (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  ) STRICT;

  CREATE TABLE candidates (
    normalized_repository_url TEXT PRIMARY KEY,
    metadata_candidate INTEGER NOT NULL CHECK (metadata_candidate IN (0, 1)),
    catalog_project_id TEXT,
    catalog_match_basis TEXT CHECK (
      catalog_match_basis IS NULL OR
      catalog_match_basis IN ('observed_url', 'reviewed_canonical_url')
    ),
    reviewed_canonical_repository_url TEXT,
    review_status TEXT NOT NULL CHECK (
      review_status IN ('unreviewed', 'publishable', 'hold', 'reject')
    ),
    review_file TEXT,
    first_observed_at_utc TEXT,
    latest_observed_at_utc TEXT
  ) STRICT;

  CREATE INDEX candidates_review_queue
    ON candidates (review_status, metadata_candidate, normalized_repository_url);

  CREATE TABLE candidate_titles (
    candidate_url TEXT NOT NULL REFERENCES candidates(normalized_repository_url)
      ON DELETE CASCADE,
    title TEXT NOT NULL,
    PRIMARY KEY (candidate_url, title)
  ) STRICT, WITHOUT ROWID;

  CREATE TABLE candidate_observed_urls (
    candidate_url TEXT NOT NULL REFERENCES candidates(normalized_repository_url)
      ON DELETE CASCADE,
    observed_url TEXT NOT NULL,
    PRIMARY KEY (candidate_url, observed_url)
  ) STRICT, WITHOUT ROWID;

  CREATE TABLE source_rows (
    source_id TEXT NOT NULL,
    source_row_id TEXT NOT NULL,
    candidate_url TEXT NOT NULL REFERENCES candidates(normalized_repository_url)
      ON DELETE CASCADE,
    source_record_url TEXT,
    metadata_screen TEXT NOT NULL CHECK (metadata_screen IN ('candidate', 'excluded')),
    metadata_screen_reason TEXT,
    metadata_license_json TEXT,
    metadata_owner_json TEXT,
    retrieved_at_utc TEXT,
    PRIMARY KEY (source_id, source_row_id)
  ) STRICT, WITHOUT ROWID;

  CREATE INDEX source_rows_candidate
    ON source_rows (candidate_url, source_id, source_row_id);
  CREATE INDEX source_rows_source_candidate
    ON source_rows (source_id, candidate_url);

  CREATE TABLE reviews (
    candidate_url TEXT PRIMARY KEY REFERENCES candidates(normalized_repository_url)
      ON DELETE CASCADE,
    review_file TEXT NOT NULL,
    decision TEXT NOT NULL CHECK (decision IN ('publishable', 'hold', 'reject')),
    reviewed_at_utc TEXT NOT NULL,
    reviewer TEXT NOT NULL,
    canonical_repository_url TEXT
  ) STRICT, WITHOUT ROWID;

  CREATE INDEX reviews_decision ON reviews (decision, candidate_url);

  CREATE TABLE batch_assignments (
    batch_id TEXT NOT NULL,
    candidate_url TEXT NOT NULL UNIQUE REFERENCES candidates(normalized_repository_url)
      ON DELETE CASCADE,
    PRIMARY KEY (batch_id, candidate_url)
  ) STRICT, WITHOUT ROWID;

  PRAGMA user_version = 1;
`;

export async function replaceLedgerDatabase({
  root,
  generatedAt,
  candidates,
  reviews,
  reviewOrigins,
  batchAssignments,
}) {
  const target = ledgerDatabasePath(root);
  await mkdir(path.dirname(target), { recursive: true });
  const temporary = `${target}.${randomUUID()}.tmp`;
  let database;
  let transactionOpen = false;
  try {
    database = new DatabaseSync(temporary, {
      enableForeignKeyConstraints: true,
    });
    database.exec(schema);

    const insertMetadata = database.prepare(
      'INSERT INTO metadata (key, value) VALUES (?, ?)',
    );
    const insertCandidate = database.prepare(`
      INSERT INTO candidates (
        normalized_repository_url,
        metadata_candidate,
        catalog_project_id,
        catalog_match_basis,
        reviewed_canonical_repository_url,
        review_status,
        review_file,
        first_observed_at_utc,
        latest_observed_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const insertTitle = database.prepare(
      'INSERT INTO candidate_titles (candidate_url, title) VALUES (?, ?)',
    );
    const insertObservedUrl = database.prepare(
      'INSERT INTO candidate_observed_urls (candidate_url, observed_url) VALUES (?, ?)',
    );
    const insertSourceRow = database.prepare(`
      INSERT INTO source_rows (
        source_id,
        source_row_id,
        candidate_url,
        source_record_url,
        metadata_screen,
        metadata_screen_reason,
        metadata_license_json,
        metadata_owner_json,
        retrieved_at_utc
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const insertReview = database.prepare(`
      INSERT INTO reviews (
        candidate_url,
        review_file,
        decision,
        reviewed_at_utc,
        reviewer,
        canonical_repository_url
      ) VALUES (?, ?, ?, ?, ?, ?)
    `);
    const insertAssignment = database.prepare(
      'INSERT INTO batch_assignments (batch_id, candidate_url) VALUES (?, ?)',
    );

    database.exec('BEGIN IMMEDIATE');
    transactionOpen = true;
    insertMetadata.run('schema_version', '1');
    insertMetadata.run('generated_at_utc', generatedAt);

    for (const candidate of candidates) {
      insertCandidate.run(
        candidate.normalized_repository_url,
        candidate.metadata_candidate ? 1 : 0,
        candidate.catalog_project_id,
        candidate.catalog_match_basis,
        candidate.reviewed_canonical_repository_url,
        candidate.review_status,
        candidate.review_file,
        candidate.first_observed_at_utc,
        candidate.latest_observed_at_utc,
      );
      for (const title of candidate.titles) {
        insertTitle.run(candidate.normalized_repository_url, title);
      }
      for (const observedUrl of candidate.observed_repository_urls) {
        insertObservedUrl.run(candidate.normalized_repository_url, observedUrl);
      }
      for (const sourceRow of candidate.source_rows) {
        insertSourceRow.run(
          sourceRow.source_id,
          sourceRow.source_row_id,
          candidate.normalized_repository_url,
          sourceRow.source_record_url,
          sourceRow.metadata_screen,
          sourceRow.metadata_screen_reason,
          sourceRow.metadata_license == null
            ? null
            : JSON.stringify(sourceRow.metadata_license),
          sourceRow.metadata_owner == null
            ? null
            : JSON.stringify(sourceRow.metadata_owner),
          sourceRow.retrieved_at_utc,
        );
      }
    }

    for (const [candidateUrl, review] of reviews) {
      insertReview.run(
        candidateUrl,
        reviewOrigins.get(candidateUrl),
        review.decision,
        review.reviewed_at_utc,
        review.reviewer,
        review.canonical_repository_url ?? null,
      );
    }
    for (const assignment of batchAssignments) {
      insertAssignment.run(assignment.batch_id, assignment.candidate_url);
    }

    database.exec('COMMIT');
    transactionOpen = false;
    const integrity = database.prepare('PRAGMA integrity_check').get();
    if (Object.values(integrity)[0] !== 'ok') {
      throw new Error(
        `Ledger database integrity check failed: ${JSON.stringify(integrity)}`,
      );
    }
    const foreignKeyFailures = database
      .prepare('PRAGMA foreign_key_check')
      .all();
    if (foreignKeyFailures.length) {
      throw new Error(
        `Ledger database foreign-key check failed: ${JSON.stringify(foreignKeyFailures.slice(0, 10))}`,
      );
    }
    const expectedCounts = {
      candidates: candidates.length,
      source_rows: candidates.reduce(
        (count, candidate) => count + candidate.source_rows.length,
        0,
      ),
      reviews: reviews.size,
      batch_assignments: batchAssignments.length,
    };
    for (const [table, expected] of Object.entries(expectedCounts)) {
      const actual = database
        .prepare(`SELECT COUNT(*) AS count FROM ${table}`)
        .get().count;
      if (actual !== expected) {
        throw new Error(
          `Ledger database ${table} count mismatch: expected ${expected}, got ${actual}`,
        );
      }
    }
    database.close();
    database = null;
    await rename(temporary, target);
    return target;
  } catch (error) {
    if (database) {
      if (transactionOpen) {
        try {
          database.exec('ROLLBACK');
        } catch {
          // Preserve the original build error.
        }
      }
      database.close();
    }
    await unlink(temporary).catch(() => {});
    throw error;
  }
}
