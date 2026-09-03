import { PageIntro } from '@/components/page-intro';
import { SubmissionForm } from '@/components/submission-form';

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="Contact & corrections" title="Make the record better." description="Flag a correction, propose a research partnership, ask about the methodology, or help connect a government team to the directory." />
      <section className="page-shell grid gap-8 py-14 lg:grid-cols-[.7fr_1.3fr] lg:py-18">
        <div className="grid content-start gap-3">
          <ContactCard title="Corrections" body="Send the record URL, the field that needs attention, and a primary source supporting the change." />
          <ContactCard title="Government teams" body="Ask about getting an agency, department, state, or national catalog represented in the ingestion roadmap." />
          <ContactCard title="Research & press" body="Request methods notes, launch data context, or a conversation about open source policy coverage." />
          <div className="mt-3 border-l-4 border-signal bg-ink p-5 text-xs leading-5 text-white/60"><strong className="mb-1 block text-sm text-white">Security reports</strong>Do not include vulnerability details in this general form. A production launch should publish a dedicated SECURITY.md and private reporting channel.</div>
        </div>
        <SubmissionForm mode="contact" />
      </section>
    </main>
  );
}

function ContactCard({ title, body }: { title: string; body: string }) { return <article className="border border-line bg-white p-5"><h2 className="font-display text-lg font-black tracking-tight">{title}</h2><p className="mt-2 text-xs leading-5 text-slate">{body}</p></article>; }
