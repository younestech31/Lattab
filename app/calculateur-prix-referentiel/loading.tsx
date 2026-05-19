import { CalculatorSkeleton } from '@/components/PriceCalculator';

export default function CalculatorLoading() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <CalculatorSkeleton />
      </div>
    </div>
  );
}
