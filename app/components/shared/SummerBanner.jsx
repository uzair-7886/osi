import React from 'react';

const SummerBanner = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 px-4 md:py-10">
      <div className="relative">
        <div className="hidden md:block absolute left-0 bottom-0 w-[300px] sm:w-[350px] md:w-[500px] -mb-24 -ml-4 md:-ml-8 z-10">
          <img
            src="/images/person.png"
            alt="Student"
            className="w-full h-auto object-contain transform -translate-y-16"
          />
        </div>

        <div className="relative bg-[#1e3a8a] rounded-3xl overflow-hidden min-h-[260px] z-0">
          <div className="flex flex-col md:flex-row items-center justify-end p-6 md:p-8">
            <div className="hidden md:block w-[400px]" />
            
            <div className="md:w-2/3 text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready To Make Summer 2025 Memorable?
              </h2>
              <p className="mb-6 text-gray-200 text-sm md:text-base">
                Join us at the Oxford Summer Institute for an unforgettable 
                journey of academic excellence, cultural immersion, and 
                lifelong connections.
              </p>
              <button className="bg-orange text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Register Now
              </button>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-400 opacity-20" />
          <div className="absolute bottom-4 right-20 w-8 h-8 rounded-full bg-blue-400 opacity-10" />
        </div>
      </div>
    </div>
  );
};

export default SummerBanner;
