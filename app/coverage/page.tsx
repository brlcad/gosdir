import { CoverageExplorer } from '@/components/coverage-explorer';
import { PageIntro } from '@/components/page-intro';

export default function CoveragePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Coverage atlas"
        title="See the map. Follow the work."
        description="Explore verified state, federal, and international records, and help fill the map with new sources."
        aside={<div className="max-w-xs border-l-4 border-signal bg-ink p-5 text-sm leading-6 text-white/70"><strong className="mb-1 block text-white">Coverage definition</strong>At least one project in this launch dataset has passed sponsor and license review.</div>}
      />
      <CoverageExplorer />
    </main>
  );
}

