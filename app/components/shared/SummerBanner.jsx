import React from 'react';
import Link from 'next/link';

const SummerBanner = () => {
  return (
    <div className="max-w-6xl mx-auto py-4 px-4 md:py-10">
{/* --- replace everything inside <div className="relative"> ... </div> --- */}
<div className="relative bg-[#1e3a8a] rounded-3xl overflow-hidden min-h-[260px]">
  <div className="flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-8 gap-6">
    
    {/* contained image (no absolute positioning) */}
    <div className="hidden md:block flex-shrink-0 ">
      <img
        src="/images/summer.jpeg"
        alt="Student"
        className="w-[380px] h-full object-contain rounded-2xl"
      />
    </div>

    {/* text block */}
    <div className="md:flex-1 text-white text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready To Make Summer 2025 Memorable?
      </h2>
      <p className="mb-6 text-gray-200 text-sm md:text-base">
        Join us at the Oxford Summer Institute for an unforgettable
        journey of academic excellence, cultural immersion, and
        lifelong connections.
      </p>
      <Link href="/application">
              <button className="bg-orange text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Register Now
              </button>
            </Link>
    </div>
  </div>

  {/* decorative circles (unchanged) */}
  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-400 opacity-20" />
  <div className="absolute bottom-4 right-20 w-8 h-8 rounded-full bg-blue-400 opacity-10" />
</div>

    </div>
  );
};

export default SummerBanner;
