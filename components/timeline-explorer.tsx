'use client';

import { useState } from 'react';
import { timeline } from '@/lib/catalog/timeline';
import type { TimelineEvent } from '@/lib/catalog/types';

type Category = TimelineEvent['category'];

const categories: { value: Category; label: string }[] = [
  { value: 'us-policy', label: 'US policies' },
  { value: 'eu-policy', label: 'EU policies' },
  { value: 'other-policy', label: 'Other policies' },
  { value: 'software', label: 'Notable software' },
];

export function TimelineExplorer() {
  const [included, setIncluded] = useState<Set<Category>>(() => new Set(categories.map(({ value }) => value)));
  const visible = timeline.filter((event) => included.has(event.category));

  function toggle(category: Category) {
    setIncluded((current) => {
      const next = new Set(current);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  }

  return (
    <section className="page-shell py-10 lg:py-14">
      <fieldset aria-labelledby="timeline-filter-heading" className="border border-line bg-white p-5 sm:p-6">
        <legend className="sr-only">Filter timeline milestones</legend>
        <p id="timeline-filter-heading" className="font-display text-lg font-black text-ink">Show milestones</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ value, label }) => (
            <label key={value} className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-blue focus-within:border-blue focus-within:ring-2 focus-within:ring-blue/20">
              <input type="checkbox" checked={included.has(value)} onChange={() => toggle(value)} className="size-5 shrink-0 accent-blue" />
              {label}
            </label>
          ))}
        </div>
        <output className="mt-4 block text-sm text-slate" aria-live="polite">Showing {visible.length} of {timeline.length} milestones</output>
      </fieldset>

      {visible.length ? (
        <div className="timeline-rail mt-12">
          {visible.map((event, index) => (
            <article key={`${event.year}-${event.title}`} className="timeline-event">
              <div className="timeline-year"><span>{event.year}</span></div>
              <div className="timeline-content">
                <p className="eyebrow text-blue">Milestone {String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-3 font-display text-2xl font-black tracking-[-.035em] text-ink sm:text-3xl">{event.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate sm:text-base sm:leading-7">{event.body}</p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {event.projectId && <a href={`/directory?project=${event.projectId}`} className="text-link">View project record →</a>}
                  {event.policyId && <a href={`/policy?record=${event.policyId}`} className="text-link">View policy record →</a>}
                  {event.sourceUrl && <a href={event.sourceUrl} target="_blank" rel="noreferrer" className="text-link">Read primary source →</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-12 border border-dashed border-slate/40 bg-white p-10 text-center sm:p-14">
          <p className="text-base text-slate">No milestones match the selected filters.</p>
          <button type="button" className="button-secondary mt-5" onClick={() => setIncluded(new Set(categories.map(({ value }) => value)))}>Show all milestones</button>
        </div>
      )}

      <div className="mt-12 border border-line bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8"><div><p className="eyebrow text-blue">This timeline is selective</p><p className="mt-2 max-w-2xl text-sm leading-6 text-slate">It prioritizes actions tied to the launch directory. Help add a well-sourced milestone or correction.</p></div><a href="/contribute/?kind=timeline" className="button-secondary mt-5 shrink-0 sm:mt-0">Suggest a timeline change</a></div>
    </section>
  );
}
