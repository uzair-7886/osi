'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:h-[80px] md:text-[16px] font-medium">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-lg font-semibold md:hidden text-darkblue">
              OCI
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="bg-darkblue bg-opacity-30 text-black px-3 py-2 rounded-full text-sm font-medium">Home</a>
                <a href="#" className="text-black hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">About</a>
                <a href="#" className="text-black hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">Programs</a>
                <a href="#" className="text-black hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">Why Choose us</a>
                <a href="#" className="text-black hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">Parents</a>
                <a href="#" className="text-black hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">Gallery</a>
                <a href="#" className="text-black hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">Fee & Key Dates</a>
                <a href="#" className="text-black hover:bg-gray-100 px-3 py-2 rounded-full text-sm font-medium">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-darkblue text-white w-[157px] h-[41px] rounded-full text-sm font-medium">Register Now</button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="bg-blue-100 text-black block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Programs</a>
            <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Why Choose us</a>
            <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Parents</a>
            <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Fee & Key Dates</a>
            <a href="#" className="text-black hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <button className="mt-2 w-1/3 bg-darkblue text-white px-4 py-2 rounded-md text-sm font-medium">Register Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;