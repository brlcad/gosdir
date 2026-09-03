import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { timeline } from '@/lib/data';

export default function TimelinePage() {
  return (
    <main>
      <PageIntro eyebrow="Timeline" title="Policy becomes practice." description="A selected chronology of decisions and public products that helped open source move from exception to repeatable government practice." />
      <section className="page-shell py-14 lg:py-20">
        <div className="timeline-rail">
          {timeline.map((event, index) => (
            <article key={`${event.year}-${event.title}`} className="timeline-event">
              <div className="timeline-year"><span>{event.year}</span></div>
              <div className="timeline-content">
                <p className="eyebrow text-blue">Milestone {String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-3 font-display text-2xl font-black tracking-[-.035em] text-ink sm:text-3xl">{event.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate sm:text-base sm:leading-7">{event.body}</p>
                {'projectId' in event && event.projectId && <Link href={`/directory?project=${event.projectId}`} className="text-link mt-5">View project record →</Link>}
                {'policyId' in event && event.policyId && <Link href={`/policy?record=${event.policyId}`} className="text-link mt-5">View policy record →</Link>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 border border-line bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8"><div><p className="eyebrow text-blue">This timeline is selective</p><p className="mt-2 max-w-2xl text-sm leading-6 text-slate">It prioritizes actions tied to the launch directory. Help add a well-sourced milestone or correction.</p></div><Link href="/contact" className="button-secondary mt-5 shrink-0 sm:mt-0">Suggest a milestone</Link></div>
      </section>
    </main>
  );
}

