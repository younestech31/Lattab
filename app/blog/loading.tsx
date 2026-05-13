export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-pulse">
          <div className="h-12 bg-gray-200 rounded-xl w-2/3 mx-auto mb-6" />
          <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
              <div className="h-6 bg-gray-200 rounded w-full mb-2" />
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
