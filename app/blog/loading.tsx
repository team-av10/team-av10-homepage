export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-700 rounded-lg max-w-2xl mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20"
            >
              <div className="h-48 bg-gray-700 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-700 rounded mb-3 animate-pulse"></div>
                <div className="h-6 bg-gray-700 rounded mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 