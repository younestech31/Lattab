import CalculatorSkeleton from '@/components/CalculatorSkeleton';

export default function CalculatorLoading() {
  return (
    <div className="min-h-screen bg-white pt-20" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          حاسبة السعر المرجعي العقاري — وهران 2026
        </h1>
        <CalculatorSkeleton />
      </div>
    </div>
  );
}
