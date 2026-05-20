export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            المدونة القانونية والعقارية
          </h1>
          <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse" />
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" role="presentation" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 animate-pulse h-[340px]">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gray-200 rounded-2xl" />
                <div className="w-20 h-8 bg-gray-200 rounded-full" />
              </div>
              <div className="h-8 bg-gray-200 rounded w-full mb-4" />
              <div className="h-4 bg-gray-200 rounded w-full mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                <div className="w-1/3 h-4 bg-gray-200 rounded" />
                <div className="w-16 h-8 bg-gray-200 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
