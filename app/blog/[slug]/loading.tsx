export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="h-4 bg-gray-200 rounded w-64 mb-8 animate-pulse" />
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
          <div className="p-8 md:p-12">
            <div className="flex gap-4 mb-6">
              <div className="h-6 bg-gray-200 rounded-full w-24" />
              <div className="h-6 bg-gray-200 rounded w-32" />
            </div>
            <div className="h-12 bg-gray-200 rounded-xl w-full mb-4" />
            <div className="h-12 bg-gray-200 rounded-xl w-3/4 mb-10" />
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-100 rounded w-full mb-3" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
