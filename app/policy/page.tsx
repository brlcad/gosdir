import { PageIntro } from '@/components/page-intro';
import { PolicyLibrary } from '@/components/policy-library';

export default function PolicyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Policy library"
        title="The policy behind public code."
        description="Plain-language summaries of laws, memoranda, regulations, strategies, standards, and implementation guidance—paired with the primary source."
        aside={<a href="https://opensource.org/licenses" target="_blank" rel="noreferrer" className="block max-w-xs border border-line bg-white p-5 transition-colors hover:border-blue"><span className="eyebrow text-blue">Eligibility reference</span><strong className="mt-2 block font-display text-lg">OSI Approved Licenses ↗</strong><span className="mt-2 block text-xs leading-5 text-slate">Only OSI-approved licenses or clear public-domain works enter the project directory.</span></a>}
      />
      <PolicyLibrary />
    </main>
  );
}

