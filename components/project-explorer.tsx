'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Check, Code2, Filter, Search, ShieldCheck, X } from 'lucide-react';
import { agencySearchTextByProjectId } from '@/lib/catalog/agency-relations';
import { projects } from '@/lib/catalog/software';
import type { Project } from '@/lib/catalog/types';

const jurisdictions = ['All jurisdictions', 'U.S. federal', 'U.S. state', 'International'];
const PAGE_SIZE = 24;

export function ProjectExplorer() {
  const [query, setQuery] = useState('');
  const [jurisdiction, setJurisdiction] = useState('All jurisdictions');
  const [domain, setDomain] = useState('All domains');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Project | null>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const domains = ['All domains', ...Array.from(new Set(projects.map((item) => item.domain))).sort()];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') ?? '');
    const projectId = params.get('project');
    if (projectId) setSelected(projects.find((item) => item.id === projectId) ?? null);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesQuery =
        !needle ||
        [
          project.name,
          project.summary,
          project.sponsor,
          agencySearchTextByProjectId.get(project.id),
          project.geography,
          project.domain,
          project.license,
          ...project.tags,
        ]
          .join(' ')
          .toLowerCase()
          .includes(needle);
      const matchesJurisdiction = jurisdiction === 'All jurisdictions' || project.jurisdiction === jurisdiction;
      const matchesDomain = domain === 'All domains' || project.domain === domain;
      return matchesQuery && matchesJurisdiction && matchesDomain;
    });
  }, [domain, jurisdiction, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visibleProjects = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const rangeStart = filtered.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const rangeEnd = Math.min(currentPage * PAGE_SIZE, filtered.length);

  const reset = () => {
    setQuery('');
    setJurisdiction('All jurisdictions');
    setDomain('All domains');
    setPage(1);
  };
  const changePage = (nextPage: number) => {
    setPage(nextPage);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="page-shell py-6">
          <div className="grid gap-3 lg:grid-cols-[1fr_210px_210px]">
            <label className="filter-control">
              <Search className="size-4 text-blue" />
              <span className="sr-only">Search projects</span>
              <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search name, agency, place, license…" className="w-full bg-transparent outline-none" />
              {query && <button type="button" onClick={() => { setQuery(''); setPage(1); }} aria-label="Clear search"><X className="size-4 text-slate" /></button>}
            </label>
            <label className="filter-control">
              <Filter className="size-4 text-blue" />
              <span className="sr-only">Filter by jurisdiction</span>
              <select value={jurisdiction} onChange={(event) => { setJurisdiction(event.target.value); setPage(1); }} className="w-full appearance-none bg-transparent outline-none">
                {jurisdictions.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="filter-control">
              <span className="font-mono text-[10px] font-bold text-blue">TYPE</span>
              <span className="sr-only">Filter by domain</span>
              <select value={domain} onChange={(event) => { setDomain(event.target.value); setPage(1); }} className="w-full appearance-none bg-transparent outline-none">
                {domains.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[.12em] text-slate"><span className="text-ink">{filtered.length}</span> verified records</p>
            {(query || jurisdiction !== 'All jurisdictions' || domain !== 'All domains') && (
              <button type="button" onClick={reset} className="text-sm font-bold text-blue hover:text-ink">Reset filters</button>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <p ref={statusRef} tabIndex={-1} className="text-sm text-slate" aria-live="polite" aria-atomic="true">{filtered.length ? `Showing ${rangeStart}–${rangeEnd} of ${filtered.length}` : 'Showing 0 of 0'}</p>
            {filtered.length > PAGE_SIZE && <ProjectPagination page={currentPage} pageCount={pageCount} setPage={changePage} />}
          </div>
        </div>
      </div>

      <div className="page-shell py-10 lg:py-14">
        {filtered.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <article key={project.id} className="directory-card">
                <div className="flex items-start justify-between gap-3">
                  <span className="status-pill"><Check className="size-3" /> Verified</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[.08em] text-slate">{project.status}</span>
                </div>
                <p className="eyebrow mt-8 text-blue">{project.geography} / {project.domain}</p>
                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.035em] text-ink">{project.name}</h2>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="license-pill">{project.license}</span>
                  <span className="rounded-full bg-paper px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[.08em] text-slate">{project.jurisdiction}</span>
                </div>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="eyebrow text-slate">Sponsor / provenance</p>
                  <p className="mt-1 text-sm font-bold text-ink">{project.sponsor}</p>
                </div>
                <button type="button" className="mt-6 flex w-full items-center justify-between border-t border-line pt-5 text-sm font-extrabold text-blue hover:text-ink" onClick={() => setSelected(project)}>
                  View record <ArrowUpRight className="size-4" />
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-slate/40 bg-white px-6 py-20 text-center">
            <Search className="mx-auto size-8 text-blue" />
            <h2 className="mt-4 font-display text-2xl font-extrabold">No verified records match</h2>
            <p className="mt-2 text-sm text-slate">Try a broader term or reset the filters.</p>
            <button type="button" onClick={reset} className="button-secondary mt-6">Reset filters</button>
          </div>
        )}
        {filtered.length > PAGE_SIZE && (
          <div className="mt-8 flex justify-end">
            <ProjectPagination page={currentPage} pageCount={pageCount} setPage={changePage} />
          </div>
        )}
      </div>

      {selected && (
        <dialog open className="fixed inset-0 z-[80] m-0 grid h-full max-h-none w-full max-w-none place-items-center border-0 bg-ink/60 p-4 backdrop-blur-sm" aria-modal="true" aria-labelledby="record-title">
          <article className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-line bg-paper p-6 sm:p-8">
              <div>
                <p className="eyebrow text-blue">Verified project record</p>
                <h2 id="record-title" className="mt-3 font-display text-3xl font-black tracking-tight">{selected.name}</h2>
              </div>
              <button type="button" onClick={() => setSelected(null)} className="grid size-9 place-items-center rounded-full border border-line bg-white" aria-label="Close record"><X className="size-4" /></button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-base leading-7 text-slate">{selected.summary}</p>
              <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
                {[
                  ['Sponsor / provenance', selected.sponsor],
                  ['Jurisdiction', `${selected.jurisdiction} · ${selected.geography}`],
                  ['License', selected.license],
                  ['Service domain', selected.domain],
                  ['Stewardship', selected.status],
                  ['Last evidence review', selected.verified],
                ].map(([term, value]) => (
                  <div key={term} className="bg-white p-4"><dt className="eyebrow text-slate">{term}</dt><dd className="mt-2 text-sm font-bold text-ink">{value}</dd></div>
                ))}
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={selected.repository} target="_blank" rel="noreferrer" className="button-primary justify-center"><Code2 className="size-4" /> Open repository</a>
                <a href={selected.officialUrl} target="_blank" rel="noreferrer" className="button-secondary justify-center">Official project page <ArrowUpRight className="size-4" /></a>
                {selected.evidenceUrl && <a href={selected.evidenceUrl} target="_blank" rel="noreferrer" className="button-secondary justify-center">Provenance evidence <ArrowUpRight className="size-4" /></a>}
              </div>
              <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-green" /> Verified means the review found documented government provenance and an eligible license. It is not a security or procurement endorsement.</p>
            </div>
          </article>
        </dialog>
      )}
    </>
  );
}

function ProjectPagination({ page, pageCount, setPage }: {
  page: number;
  pageCount: number;
  setPage: (page: number) => void;
}) {
  return (
    <nav className="flex items-center gap-3" aria-label="Project result pages">
      <button type="button" className="button-secondary disabled:cursor-not-allowed disabled:opacity-45" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
      <span className="text-sm font-bold text-ink">Page {page} of {pageCount}</span>
      <button type="button" className="button-secondary disabled:cursor-not-allowed disabled:opacity-45" disabled={page === pageCount} onClick={() => setPage(page + 1)}>Next</button>
    </nav>
  );
}
