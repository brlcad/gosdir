import { FederalCoverageBeta } from '@/components/federal-coverage-beta';

export const metadata = {
  title: 'Federal Coverage Prototype — GOSDIR',
  description:
    'Explore GOSDIR coverage by branch across the complete Federal Register publishing-unit roster.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CoverageBetaPage() {
  return (
    <main>
      <FederalCoverageBeta />
    </main>
  );
}
