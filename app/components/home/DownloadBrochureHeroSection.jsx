'use client'
import React from 'react';

const DownloadBrochureHeroSection = () => {
  return (
    <section className="relative w-full  py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className='text-orange text-lg font-semibold'>Download</h2>
        <h1 className="mb-6 text-[26px] font-semibold text-gray-900">
Our Brochure        </h1>
        
        <p className="mb-8 text-base text-black max-w-2xl mx-auto">
        Get all the details you need about our programs, courses, and student life at Oxford Summer Institute. Download our brochure and take the first step towards an unforgettable summer experience!        </p>
        
        <button 
          className="bg-orange  text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-base mx-4"
          onClick={() => console.log('Register clicked')}
        >
          Oxford Summer Program
        </button>
        <button 
          className="bg-orange  text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-base mx-4"
          onClick={() => console.log('Register clicked')}
        >
          Oxford Executive Program
          </button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50 -z-10"></div>
    </section>
  );
};

export default DownloadBrochureHeroSection;