'use client';

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Filter,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import { FreshnessSparkline } from '@/components/freshness-sparkline';
import { agencySearchTextByProjectId } from '@/lib/catalog/agency-relations';
import {
  availabilitySnapshot,
  isKnownHardDeadLink,
} from '@/lib/catalog/availability';
import {
  getProjectDirectoryState,
  listedProjects as projects,
  projectById,
} from '@/lib/catalog/directory';
import {
  freshnessLabels,
  freshnessSnapshot,
  getProjectFreshness,
} from '@/lib/catalog/freshness';
import type { Project } from '@/lib/catalog/types';

const jurisdictions = [
  'All jurisdictions',
  'U.S. federal',
  'U.S. state',
  'International',
];
const pageSizes = [24, 48, 96];
const sortOptions = [
  ['name', 'Name A–Z'],
  ['name-desc', 'Name Z–A'],
  ['sponsor', 'Sponsor A–Z'],
  ['year-newest', 'Newest open-source year'],
  ['year-oldest', 'Oldest open-source year'],
] as const;
type SortOrder = (typeof sortOptions)[number][0];
const projectCollator = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'base',
});
const dateFormatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function ProjectExplorer() {
  const [query, setQuery] = useState('');
  const [jurisdiction, setJurisdiction] = useState('All jurisdictions');
  const [domain, setDomain] = useState('All domains');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(24);
  const [sort, setSort] = useState<SortOrder>('name');
  const [selected, setSelected] = useState<Project | null>(null);
  const [requestedProjectId, setRequestedProjectId] = useState<string | null>(
    null,
  );
  const statusRef = useRef<HTMLParagraphElement>(null);
  const closeRecord = useCallback(() => {
    setSelected(null);
    setRequestedProjectId(null);
  }, []);
  const domains = [
    'All domains',
    ...Array.from(new Set(projects.map((item) => item.domain))).sort(),
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') ?? '');
    const projectId = params.get('project')?.trim();
    if (projectId) {
      setRequestedProjectId(projectId);
      setSelected(projectById.get(projectId) ?? null);
    }
  }, []);

  useEffect(() => {
    if (!selected) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      closeRecord();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [closeRecord, selected]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const matching = projects.filter((project) => {
      const matchesQuery =
        !needle ||
        [
          project.name,
          project.id,
          project.summary,
          project.sponsor,
          agencySearchTextByProjectId.get(project.id),
          project.geography,
          project.domain,
          String(project.openSourceYear),
          project.license,
          ...project.tags,
        ]
          .join(' ')
          .toLowerCase()
          .includes(needle);
      const matchesJurisdiction =
        jurisdiction === 'All jurisdictions' ||
        project.jurisdiction === jurisdiction;
      const matchesDomain =
        domain === 'All domains' || project.domain === domain;
      return matchesQuery && matchesJurisdiction && matchesDomain;
    });
    return matching.sort((a, b) => {
      let difference = 0;
      if (sort === 'name-desc')
        difference = projectCollator.compare(b.name, a.name);
      else if (sort === 'sponsor')
        difference = projectCollator.compare(a.sponsor, b.sponsor);
      else if (sort === 'year-newest')
        difference = b.openSourceYear - a.openSourceYear;
      else if (sort === 'year-oldest')
        difference = a.openSourceYear - b.openSourceYear;
      return (
        difference ||
        projectCollator.compare(a.name, b.name) ||
        projectCollator.compare(a.id, b.id)
      );
    });
  }, [domain, jurisdiction, query, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visibleProjects = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const rangeStart = filtered.length ? (currentPage - 1) * pageSize + 1 : 0;
  const rangeEnd = Math.min(currentPage * pageSize, filtered.length);

  const reset = () => {
    setQuery('');
    setJurisdiction('All jurisdictions');
    setDomain('All domains');
    setPage(1);
  };
  const changePage = (nextPage: number) => {
    if (!Number.isInteger(nextPage)) return;
    setPage(Math.max(1, Math.min(nextPage, pageCount)));
    requestAnimationFrame(() => statusRef.current?.focus());
  };
  const selectedFreshness = selected ? getProjectFreshness(selected.id) : null;
  const selectedDirectoryState = selected
    ? getProjectDirectoryState(selected)
    : null;
  const selectedLinks = selectedDirectoryState?.availability?.links;
  const selectedDisabled = selectedDirectoryState?.status === 'disabled';

  return (
    <>
      {requestedProjectId && !selected && (
        <div className="border-b border-line bg-paper" role="alert">
          <div className="page-shell py-6">
            <p className="eyebrow text-blue">Project record not found</p>
            <h2 className="mt-2 font-display text-2xl font-black tracking-tight text-ink">
              No record matches “{requestedProjectId}”.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate">
              The link may be incorrect, or the record may have been removed
              from the catalog. Disabled records remain available by their
              existing record ID and would be identified here as disabled.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="/directory/" className="text-link">
                Browse current records →
              </a>
              <a href="/contact/" className="text-link text-ink">
                Report a broken record link →
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="border-b border-line bg-white">
        <div className="page-shell py-6">
          <div className="grid gap-3 lg:grid-cols-[1fr_210px_210px]">
            <label className="filter-control">
              <Search className="size-4 text-blue" />
              <span className="sr-only">Search projects</span>
              <input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Search name, record ID, agency, place, license…"
                className="w-full bg-transparent outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setPage(1);
                  }}
                  aria-label="Clear search"
                >
                  <X className="size-4 text-slate" />
                </button>
              )}
            </label>
            <label className="filter-control">
              <Filter className="size-4 text-blue" />
              <span className="sr-only">Filter by jurisdiction</span>
              <select
                value={jurisdiction}
                onChange={(event) => {
                  setJurisdiction(event.target.value);
                  setPage(1);
                }}
                className="w-full appearance-none bg-transparent outline-none"
              >
                {jurisdictions.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="filter-control">
              <span className="font-mono text-[10px] font-bold text-blue">
                TYPE
              </span>
              <span className="sr-only">Filter by domain</span>
              <select
                value={domain}
                onChange={(event) => {
                  setDomain(event.target.value);
                  setPage(1);
                }}
                className="w-full appearance-none bg-transparent outline-none"
              >
                {domains.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:flex">
            <label className="filter-control">
              <span className="shrink-0 text-xs font-bold text-slate">
                Sort by
              </span>
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value as SortOrder);
                  setPage(1);
                }}
                className="min-w-0 flex-1 bg-transparent outline-none"
              >
                {sortOptions.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="filter-control">
              <span className="shrink-0 text-xs font-bold text-slate">
                Records per page
              </span>
              <select
                value={pageSize}
                onChange={(event) => {
                  const nextSize = Number(event.target.value);
                  setPage(
                    Math.floor(((currentPage - 1) * pageSize) / nextSize) + 1,
                  );
                  setPageSize(nextSize);
                }}
                className="min-w-0 flex-1 bg-transparent outline-none"
              >
                {pageSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-slate">
              <span className="text-ink">{filtered.length}</span> verified
              records
            </p>
            {(query ||
              jurisdiction !== 'All jurisdictions' ||
              domain !== 'All domains') && (
              <button
                type="button"
                onClick={reset}
                className="text-sm font-bold text-blue hover:text-ink"
              >
                Reset filters
              </button>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <p
              ref={statusRef}
              tabIndex={-1}
              className="scroll-mt-24 text-sm text-slate"
              aria-live="polite"
              aria-atomic="true"
            >
              {filtered.length
                ? `Showing ${rangeStart.toLocaleString('en')}–${rangeEnd.toLocaleString('en')} of ${filtered.length.toLocaleString('en')}`
                : 'Showing 0 of 0'}
            </p>
            {pageCount > 1 && (
              <ProjectPagination
                label="Project result pages above list"
                page={currentPage}
                pageCount={pageCount}
                setPage={changePage}
              />
            )}
          </div>
        </div>
      </div>

      <div className="page-shell py-10 lg:py-14">
        {filtered.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => {
              const freshness = getProjectFreshness(project.id);
              return (
                <article key={project.id} className="directory-card">
                  <div className="flex items-start justify-between gap-3">
                    <span className="status-pill">
                      <Check className="size-3" /> Verified
                    </span>
                    <div className="flex shrink-0 flex-col items-end text-right">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[.08em] text-slate">
                        {project.status}
                      </span>
                      {freshness.annualCommits.some(
                        ({ commits }) => commits !== null,
                      ) && (
                        <div className="mt-1">
                          <FreshnessSparkline freshness={freshness} compact />
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="eyebrow mt-6 text-blue">
                    {project.geography} / {project.domain}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.035em] text-ink">
                    {project.name}
                  </h2>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="license-pill">{project.license}</span>
                    <span className="rounded-full bg-paper px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[.08em] text-slate">
                      {project.jurisdiction}
                    </span>
                    <span className="rounded-full bg-paper px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[.08em] text-slate">
                      Open sourced · {project.openSourceYear}
                    </span>
                  </div>
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="eyebrow text-slate">Sponsor / provenance</p>
                    <p className="mt-1 text-sm font-bold text-ink">
                      {project.sponsor}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`View full record for ${project.name}`}
                    className="group mt-6 flex w-full cursor-pointer items-center justify-end gap-2 border-t border-line pt-5 text-right text-base font-extrabold text-blue transition-colors hover:border-blue hover:text-ink"
                    onClick={() => {
                      setRequestedProjectId(null);
                      setSelected(project);
                    }}
                  >
                    <span className="underline decoration-blue/35 decoration-2 underline-offset-4 group-hover:decoration-current">
                      View full record
                    </span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border border-dashed border-slate/40 bg-white px-6 py-20 text-center">
            <Search className="mx-auto size-8 text-blue" />
            <h2 className="mt-4 font-display text-2xl font-extrabold">
              No verified records match
            </h2>
            <p className="mt-2 text-sm text-slate">
              Try a broader term or reset the filters.
            </p>
            <button
              type="button"
              onClick={reset}
              className="button-secondary mt-6"
            >
              Reset filters
            </button>
          </div>
        )}
        {pageCount > 1 && (
          <div className="mt-8 flex justify-end">
            <ProjectPagination
              label="Project result pages below list"
              page={currentPage}
              pageCount={pageCount}
              setPage={changePage}
            />
          </div>
        )}
      </div>

      {selected && selectedFreshness && selectedDirectoryState && (
        <dialog
          open
          className="fixed inset-0 z-[80] m-0 grid h-full max-h-none w-full max-w-none place-items-center border-0 bg-ink/60 p-4 backdrop-blur-sm"
          aria-modal="true"
          aria-labelledby="record-title"
        >
          <button
            type="button"
            tabIndex={-1}
            className="absolute inset-0 cursor-default"
            onClick={closeRecord}
            aria-label="Close project record"
          />
          <article className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-line bg-paper p-6 sm:p-8">
              <div className="min-w-0 pr-4">
                <p
                  className={`eyebrow ${selectedDisabled ? 'text-ink' : 'text-blue'}`}
                >
                  {selectedDisabled
                    ? 'Disabled project record'
                    : 'Verified project record'}
                </p>
                <h2
                  id="record-title"
                  className="mt-3 font-display text-3xl font-black tracking-tight"
                >
                  {selected.name}
                </h2>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  onClick={closeRecord}
                  className="grid size-9 place-items-center rounded-full border border-line bg-white"
                  aria-label="Close record"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              {selectedDisabled && (
                <section
                  className="mb-7 border-l-4 border-signal bg-paper p-5"
                  aria-labelledby="disabled-record-title"
                >
                  <h3
                    id="disabled-record-title"
                    className="font-display text-xl font-black tracking-tight text-ink"
                  >
                    This record is disabled
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    It no longer appears in directory search, counts, or
                    coverage while these publication requirements are unmet.
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm font-bold leading-6 text-ink">
                    {selectedDirectoryState.reasons.map((reason) => (
                      <li key={reason.code} className="flex gap-2">
                        <span aria-hidden="true">—</span>
                        <span>{reason.message}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[.08em] text-slate">
                    Disabled{' '}
                    <time dateTime={selectedDirectoryState.statusChangedAt}>
                      {formatDate(selectedDirectoryState.statusChangedAt)}
                    </time>
                    {' · '}
                    {selectedDirectoryState.source === 'editorial'
                      ? 'Editorial review'
                      : 'Automated availability checks'}
                  </p>
                  <a href="/contact/" className="text-link mt-4 inline-flex">
                    Submit corrected public evidence →
                  </a>
                </section>
              )}
              <p className="text-base leading-7 text-slate">
                {selected.summary}
              </p>
              <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
                {[
                  ['Sponsor / provenance', selected.sponsor],
                  [
                    'Jurisdiction',
                    `${selected.jurisdiction} · ${selected.geography}`,
                  ],
                  ['License', selected.license],
                  ['Service domain', selected.domain],
                  ['Open source year', selected.openSourceYear],
                ].map(([term, value]) => (
                  <div key={term} className="bg-white p-4">
                    <dt className="eyebrow text-slate">{term}</dt>
                    <dd className="mt-2 text-sm font-bold text-ink">{value}</dd>
                  </div>
                ))}
                <div className="bg-white p-4">
                  <dt className="eyebrow text-slate">Stewardship</dt>
                  <dd className="mt-2">
                    <strong className="text-sm text-ink">
                      {selected.status}
                    </strong>
                    <p className="mt-1 text-xs leading-5 text-slate">
                      {freshnessLabels[selectedFreshness.status]} repository
                      activity
                      {selectedFreshness.archived
                        ? ' · Repository archived'
                        : ''}
                      {' · '}Last default-branch commit{' '}
                      {formatDate(selectedFreshness.lastChangeAt)}
                    </p>
                    <div className="mt-2">
                      <FreshnessSparkline freshness={selectedFreshness} />
                    </div>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[.05em] text-slate">
                      {selectedFreshness.annualCommits[0]?.year}–
                      {selectedFreshness.annualCommits.at(-1)?.year}{' '}
                      default-branch activity
                    </p>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {!isKnownHardDeadLink(selectedLinks?.repository) && (
                  <a
                    href={selected.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="button-primary justify-center"
                  >
                    <Code2 className="size-4" /> Open repository
                  </a>
                )}
                {!isKnownHardDeadLink(selectedLinks?.official) && (
                  <a
                    href={selected.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary justify-center"
                  >
                    Official project page <ArrowUpRight className="size-4" />
                  </a>
                )}
                {selected.evidenceUrl &&
                  !isKnownHardDeadLink(selectedLinks?.provenance) && (
                    <a
                      href={selected.evidenceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-secondary justify-center"
                    >
                      Provenance evidence <ArrowUpRight className="size-4" />
                    </a>
                  )}
              </div>
              <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate">
                {selectedDisabled ? (
                  <X className="mt-0.5 size-4 shrink-0 text-slate" />
                ) : (
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-green" />
                )}{' '}
                <span>
                  {selectedDisabled
                    ? 'This record is retained for transparency and will continue to be checked for recovery. '
                    : 'Verified records connect a government sponsor, public source, and eligible license to supporting evidence. '}
                  <a
                    href="/contact/"
                    className="font-bold text-blue underline decoration-blue/35 underline-offset-2 hover:text-ink"
                  >
                    Submit a correction or update
                  </a>
                </span>
              </p>
              <p className="mt-3 text-right font-mono text-[9px] uppercase tracking-[.05em] text-slate/75">
                Activity checked{' '}
                <time dateTime={freshnessSnapshot.generatedAt}>
                  {formatDate(freshnessSnapshot.generatedAt)}
                </time>{' '}
                · Publication links checked{' '}
                <time dateTime={availabilitySnapshot.generatedAt}>
                  {formatDate(availabilitySnapshot.generatedAt)}
                </time>{' '}
                · Editorial evidence reviewed{' '}
                <time dateTime={selected.verified}>
                  {formatDate(selected.verified)}
                </time>
              </p>
            </div>
          </article>
        </dialog>
      )}
    </>
  );
}

function formatDate(value: string | null) {
  if (!value) return 'Unavailable';
  return dateFormatter.format(new Date(`${value}T00:00:00Z`));
}

function ProjectPagination({
  label,
  page,
  pageCount,
  setPage,
}: {
  label: string;
  page: number;
  pageCount: number;
  setPage: (page: number) => void;
}) {
  const pageInputId = useId();
  const pageInputRef = useRef<HTMLInputElement>(null);
  const buttonClass =
    'inline-flex h-11 items-center justify-center rounded-lg border border-ink bg-transparent px-3 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-45';
  return (
    <nav
      className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-start"
      aria-label={label}
    >
      <div className="flex gap-2">
        <button
          type="button"
          className={buttonClass}
          disabled={page === 1}
          onClick={() => setPage(1)}
        >
          First
        </button>
        <button
          type="button"
          className={buttonClass}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
      </div>
      <form
        className="order-first flex w-full items-center gap-2 text-sm font-bold text-ink sm:order-none sm:w-auto"
        onSubmit={(event) => {
          event.preventDefault();
          if (event.currentTarget.reportValidity() && pageInputRef.current)
            setPage(pageInputRef.current.valueAsNumber);
        }}
      >
        <label htmlFor={pageInputId}>Page</label>
        <input
          key={page}
          ref={pageInputRef}
          id={pageInputId}
          type="number"
          inputMode="numeric"
          min={1}
          max={pageCount}
          step={1}
          required
          defaultValue={page}
          className="h-11 w-16 rounded-lg border border-line bg-white px-2 text-center"
        />
        <span>of {pageCount.toLocaleString('en')}</span>
        <button type="submit" className={buttonClass}>
          Go
        </button>
      </form>
      <div className="flex gap-2">
        <button
          type="button"
          className={buttonClass}
          disabled={page === pageCount}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
        <button
          type="button"
          className={buttonClass}
          disabled={page === pageCount}
          onClick={() => setPage(pageCount)}
        >
          Last
        </button>
      </div>
    </nav>
  );
}
