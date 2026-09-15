'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';
import { glossary } from '@/lib/catalog/glossary';

export default function GlossaryPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => glossary.filter((item) => [item.term, item.definition].join(' ').toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <main>
      <PageIntro eyebrow="Plain-language glossary" title="Speak open, clearly." description="Terms used across open source policy, licensing, software delivery, and public digital infrastructure—without assuming a technical background." />
      <section className="page-shell py-12 lg:py-16">
        <label className="filter-control mx-auto max-w-2xl"><Search className="size-4 text-blue" /><span className="sr-only">Search the glossary</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a term or idea…" className="w-full bg-transparent outline-none" /></label>
        <div className="mx-auto mt-10 max-w-4xl border-t border-line">
          {filtered.map((item, index) => (
            <article key={item.term} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[56px_220px_1fr] sm:gap-6">
              <span className="font-mono text-[10px] font-bold text-blue">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="font-display text-xl font-black tracking-tight text-ink">{item.term}</h2>
              <p className="text-sm leading-6 text-slate">{item.definition}</p>
            </article>
          ))}
          {!filtered.length && <p className="py-16 text-center text-sm text-slate">No glossary terms match “{query}”.</p>}
        </div>
      </section>
    </main>
  );
}

