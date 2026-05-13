export default function CalculatorLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32 pb-20">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 font-medium">جاري تحميل الحاسبة...</p>
      </div>
    </div>
  );
}
