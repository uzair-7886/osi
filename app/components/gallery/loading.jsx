export default function Loading() {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:py-12">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }