export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="h-6 bg-gray-700 rounded w-32 mb-8 animate-pulse"></div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="h-12 bg-gray-700 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded w-32 mb-8 animate-pulse"></div>
            <div className="h-96 bg-gray-700 rounded-xl mb-8 animate-pulse"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="space-y-4">
              <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 