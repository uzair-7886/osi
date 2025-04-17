import React from 'react';

const HeroBanner = ({ text }) => {
  return (
    <div className="relative w-full">
      <img 
        src="/images/banner.png"
        alt="Banner background"
        className="w-full object-cover object-top"
      />
      
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center tracking-wide">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;