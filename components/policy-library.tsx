'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, FileText, Search, SlidersHorizontal } from 'lucide-react';
import { policies } from '@/lib/catalog/policies';

export function PolicyLibrary() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All instruments');
  const types = ['All instruments', ...Array.from(new Set(policies.map((item) => item.type))).sort()];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selected = policies.find((policy) => policy.id === params.get('record'));
    setQuery(params.get('q') ?? selected?.title ?? '');
  }, []);

  const filtered = useMemo(() => policies.filter((policy) => {
    const needle = query.toLowerCase();
    return (!needle || [policy.title, policy.issuer, policy.geography, policy.summary, policy.type].join(' ').toLowerCase().includes(needle)) && (type === 'All instruments' || policy.type === type);
  }), [query, type]);

  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="page-shell grid gap-3 py-6 md:grid-cols-[1fr_240px]">
          <label className="filter-control"><Search className="size-4 text-blue" /><span className="sr-only">Search policy library</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, issuing body, place…" className="w-full bg-transparent outline-none" /></label>
          <label className="filter-control"><SlidersHorizontal className="size-4 text-blue" /><span className="sr-only">Filter instrument type</span><select value={type} onChange={(event) => setType(event.target.value)} className="w-full appearance-none bg-transparent outline-none">{types.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
      </div>
      <div className="page-shell grid gap-8 py-12 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit border border-line bg-ink p-6 text-white lg:sticky lg:top-24">
          <FileText className="size-7 text-signal" />
          <p className="eyebrow mt-6 text-signal">Reading the library</p>
          <p className="mt-3 text-sm leading-6 text-white/65">Plain-language summaries link to primary sources for controlling text and current status.</p>
          <div className="mt-6 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[.12em] text-white/45">{filtered.length} of {policies.length} records shown</div>
        </aside>
        <div className="grid gap-4">
          {filtered.map((policy) => (
            <article key={policy.id} className="border border-line bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="license-pill">{policy.type}</span>
                <span className="status-pill">{policy.status}</span>
                <span className="ml-auto font-mono text-xs font-bold text-slate">{policy.year}</span>
              </div>
              <h2 className="mt-6 font-display text-2xl font-black tracking-[-0.035em] text-ink sm:text-3xl">{policy.title}</h2>
              <p className="mt-2 text-sm font-bold text-blue">{policy.issuer} · {policy.geography}</p>
              <p className="mt-5 max-w-3xl text-sm leading-6 text-slate sm:text-base sm:leading-7">{policy.summary}</p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[.1em] text-slate">Evidence reviewed {policy.reviewed}</span>
                <a href={policy.url} target="_blank" rel="noreferrer" className="text-link">Read primary source <ArrowUpRight /></a>
              </div>
            </article>
          ))}
          {!filtered.length && <div className="border border-dashed border-slate/40 bg-white p-14 text-center text-sm text-slate">No policy records match these filters.</div>}
        </div>
      </div>
    </>
  );
}

