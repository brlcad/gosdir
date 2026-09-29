import { PageIntro } from '@/components/page-intro';
import { TimelineExplorer } from '@/components/timeline-explorer';

export default function TimelinePage() {
  return (
    <main>
      <PageIntro eyebrow="Timeline" title="Policy becomes practice." description="A selected chronology of decisions and public products that helped open source move from exception to repeatable government practice." />
      <TimelineExplorer />
    </main>
  );
}
