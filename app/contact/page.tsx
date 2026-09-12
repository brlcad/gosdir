import { PageIntro } from '@/components/page-intro';
import { SubmissionForm } from '@/components/submission-form';

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="Contact & corrections" title="Make the record better." description="Flag a correction, suggest an official source, report an accessibility issue, or ask a question through the public project tracker." />
      <section className="page-shell grid gap-8 py-14 lg:grid-cols-[.7fr_1.3fr] lg:py-18">
        <div className="grid content-start gap-3">
          <ContactCard title="Corrections" body="Include the record URL, field needing attention, and a primary source supporting the change." />
          <ContactCard title="Coverage suggestions" body="Point editors to a public agency catalog, repository organization, policy, or official publication." />
          <ContactCard title="Public by design" body="Messages become GitHub issues. Do not include personal, confidential, classified, export-controlled, or vulnerability information." />
          <div className="mt-3 border-l-4 border-signal bg-ink p-5 text-xs leading-5 text-white/60"><strong className="mb-1 block text-sm text-white">Sensitive security reports</strong>Do not disclose exploit or vulnerability details through the public form. Use the affected project’s own security policy and private reporting channel.</div>
        </div>
        <SubmissionForm mode="contact" />
      </section>
    </main>
  );
}

function ContactCard({ title, body }: { title: string; body: string }) { return <article className="border border-line bg-white p-5"><h2 className="font-display text-lg font-black tracking-tight">{title}</h2><p className="mt-2 text-xs leading-5 text-slate">{body}</p></article>; }
