export default function Loading() {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:py-12">
        <div className="animate-pulse">
          <div className="text-center mb-8 sm:mb-12">
            <div className="h-4 sm:h-6 bg-gray-200 rounded w-1/3 sm:w-1/4 mx-auto mb-2"></div>
            <div className="h-8 sm:h-10 bg-gray-200 rounded w-2/3 sm:w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="transition-all duration-300">
                <div className="relative overflow-hidden rounded-tr-lg">
                  <div className="h-40 sm:h-48 bg-gray-200 rounded-md mb-4"></div>
                  <div className="p-3 sm:p-4 bg-white rounded-2xl">
                    <div className="h-5 sm:h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded w-1/2 mb-3 sm:mb-4"></div>
                    <div className="h-12 sm:h-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }