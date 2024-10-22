import React from 'react';

const SummerBanner = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 px-4 md:py-10">
      <div className="relative bg-[#1e3a8a] rounded-3xl overflow-hidden md:w-[1200px] md:h-[260px]">
        <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-5">
          <div className="relative w-full md:w-1/3 mb-6 md:mb-0">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/person.png"
                alt="Student"
                className="object-cover w-full h-full transform scale-150 " 
              />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready To Make Summer 2025 Memorable?
            </h2>
            <p className="mb-6 text-gray-200 text-sm md:text-base">
              Join us at the Oxford Summer Institute for an unforgettable 
              journey of academic excellence, cultural immersion, and 
              lifelong connections.
            </p>
            <button className="bg-orange text-white px-6 py-2 rounded-full mb-5">
              Register Now
            </button>
          </div>

          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-400 opacity-20"></div>
          <div className="absolute bottom-4 right-20 w-8 h-8 rounded-full bg-blue-400 opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SummerBanner;