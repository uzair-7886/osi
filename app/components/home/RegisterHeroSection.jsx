'use client'
import React from 'react';

const RegisterHeroSection = () => {
  return (
    <section className="relative w-full bg-grey bg-opacity-10 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-[26px] font-semibold">
        Harness your leadership potential at Oxford Centre for Leadership 
        </h1>
        
        <p className="mb-8 text-base text-black max-w-2xl mx-auto">
        Our program aims to nurture the next generation of socially conscious, technologically adept and entrepreneurial leaders in an environment that has shaped over 50 world leaders and 70 Nobel laureates.
        </p>
        
        <button 
          className="bg-orange  text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-base"
          onClick={() => (window.location.href = "/application")}
        >
          Register Now
        </button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50 -z-10"></div>
    </section>
  );
};

export default RegisterHeroSection;