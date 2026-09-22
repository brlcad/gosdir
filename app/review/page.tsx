import { PageIntro } from '@/components/page-intro';
import { ReviewQueue } from '@/components/review-queue';

export default function ReviewPage() {
  return <main>
    <PageIntro
      eyebrow="Editorial review queue"
      title="Follow the evidence. Grow the directory."
      description="Inspect open project and policy submissions, verify every eligibility claim, and prepare accepted records for an ordinary reviewed code change."
      aside={<div className="max-w-xs border border-line bg-white p-5"><span className="eyebrow text-blue">Reviewer access</span><strong className="mt-2 block font-display text-lg">Public to inspect · GitHub sign-in to act</strong><span className="mt-2 block text-xs leading-5 text-slate">Anyone can read the queue. Commenting, labeling, closing, and merging use the repository’s GitHub permissions.</span></div>}
    />
    <ReviewQueue />
  </main>;
}
