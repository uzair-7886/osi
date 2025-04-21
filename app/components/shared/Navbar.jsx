'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProgramMenu from './ProgramMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProgramMenu, setShowProgramMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePage = (path) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6  md:h-[80px] md:text-[16px] font-medium">
        <div className="flex items-center justify-between h-16 ">
        <div className="flex items-center">
    {/* Mobile logo */}
    <Link href="/" className="md:hidden">
      <img
        src="/logo-footer.jpeg"
        alt="Logo"
        className="h-10 w-auto mr-4"
      />
    </Link>
            
            <div className="hidden md:block">
              <div className=" flex items-baseline space-x-1">
                <Link href="/" className={`${isActivePage('/') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-2 py-2 rounded-full text-sm font-medium`}>Home</Link>
                <Link href="/about" className={`${isActivePage('/about') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-3 py-2 rounded-full text-sm font-medium`}>About</Link>
                {/* <div
  className="relative"
  onMouseEnter={() => setShowAboutMenu(true)}
  onMouseLeave={() => setShowAboutMenu(false)}
>
  <button
    className={`${isActivePage('/about') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'
      } text-black px-3 py-2 rounded-full text-sm font-medium`}
  >
    About
  </button>
  {showAboutMenu && (
    <div className="absolute left-0 top-full pt-2 w-[200px] z-50 bg-white shadow-lg rounded-lg p-2">
      <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
        Conference
      </Link>
      <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
        Summer School
      </Link>
    </div>
  )}
</div> */}
                <div
                  className="relative"
                  onMouseEnter={() => setShowProgramMenu(true)}
                  onMouseLeave={() => setShowProgramMenu(false)}
                >
                  <button
                    className={`${isActivePage('/programs') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'
                      } text-black px-3 py-2 rounded-full text-sm font-medium`}
                  >
                    Oxford Summer Program
                  </button>
                  {showProgramMenu && (
                    <div
                      className="absolute left-0 top-full pt-2 w-[700px] z-50"
                    >
                      <ProgramMenu />
                    </div>
                  )}
                </div>
                <Link href="/oxford-executive-program" className={`${isActivePage('oxford-executive-program') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-3 py-2 rounded-full text-sm font-medium`}> Executive Program</Link>
                <Link href="/why-choose-us" className={`${isActivePage('/why-choose-us') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-3 py-2 rounded-full text-sm font-medium`}>Why Choose Us</Link>
                <Link href="/parents" className={`${isActivePage('/parents') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-3 py-2 rounded-full text-sm font-medium`}>Parents</Link>
                <Link href="/oxford-leadership-conference" className={`${isActivePage('/oxford-leadership-conference') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-3 py-2 rounded-full text-sm font-medium`}> Leadership Conference</Link>
                <Link href="/gallery" className={`${isActivePage('/gallery') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-3 py-2 rounded-full text-sm font-medium`}>Gallery</Link>
                {/* <Link href="/fee-key-dates" className={`${isActivePage('/fee-key-dates') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'} text-black px-3 py-2 rounded-full text-sm font-medium`}>Fee & Key Dates</Link> */}
                                <div
  className="relative"
  onMouseEnter={() => setShowAboutMenu(true)}
  onMouseLeave={() => setShowAboutMenu(false)}
>
  <button
    className={`${isActivePage('/about') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'
      } text-black px-3 py-2 rounded-full text-sm font-medium`}
  >
    Resources
  </button>
  {showAboutMenu && (
    <div className="absolute left-0 top-full pt-2  w-[250px] z-50 bg-white shadow-lg rounded-lg p-2">
      <Link href="/fee-key-dates" className="block px-4 py-2 text-sm text-grey hover:bg-gray-100 rounded-lg">
        Fee and Key dates
      </Link>
      <Link href="/health-and-safety" className="block px-4 py-2 text-sm text-grey hover:bg-gray-100 rounded-lg">
        Health and Safety
      </Link>
      <Link href="/terms-and-conditions" className="block px-4 py-2 text-sm text-grey hover:bg-gray-100 rounded-lg">
Terms and Conditions      </Link>
<Link href="/student-code-of-conduct" className="block px-4 py-2 text-sm text-grey hover:bg-gray-100 rounded-lg">
        Student Code of Conduct
      </Link>
    </div>
  )}
</div>
                
              </div>
            </div>
          </div>
          <Link href={'/application'} className="hidden md:block">
            <div className="bg-darkblue text-white w-[100px] h-[41px] rounded-full text-sm font-medium cursor-pointer flex justify-center items-center">Register</div>
          </Link>
          <div className="-mr-2 flex md:hidden">
    <button
      onClick={toggleMenu}
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded={isMenuOpen}
    >
      <span className="sr-only">Open main menu</span>
      {!isMenuOpen ? (
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ) : (
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  </div>

        </div>
      </div>

      {/* ─── Mobile menu ──────────────────────────────────────────────────────────── */}
{isMenuOpen && (
  <div className="md:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      
      {/* Nav links */}
      <Link
        href="/"
        className={`${isActivePage('/') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`${isActivePage('/about') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        About
      </Link>

      <Link
        href="/programs"
        className={`${isActivePage('/programs') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Oxford Summer Program
      </Link>

      <Link
        href="/oxford-executive-program"
        className={`${isActivePage('/oxford-executive-program') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Executive Program
      </Link>

      <Link
        href="/why-choose-us"
        className={`${isActivePage('/why-choose-us') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Why Choose Us
      </Link>

      <Link
        href="/parents"
        className={`${isActivePage('/parents') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Parents
      </Link>

      <Link
        href="/oxford-leadership-conference"
        className={`${isActivePage('/oxford-leadership-conference') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Leadership Conference
      </Link>

      <Link
        href="/gallery"
        className={`${isActivePage('/gallery') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Gallery
      </Link>

      {/* Resources submenu items */}
      <Link
        href="/fee-key-dates"
        className={`${isActivePage('/fee-key-dates') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Fee & Key Dates
      </Link>

      <Link
        href="/health-and-safety"
        className={`${isActivePage('/health-and-safety') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Health & Safety
      </Link>

      <Link
        href="/terms-and-conditions"
        className={`${isActivePage('/terms-and-conditions') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Terms & Conditions
      </Link>

      <Link
        href="/student-code-of-conduct"
        className={`${isActivePage('/student-code-of-conduct') ? 'bg-darkblue bg-opacity-30' : 'hover:bg-gray-100'}
                    text-black block px-3 py-2 rounded-md text-base font-medium`}
      >
        Student Code of Conduct
      </Link>

      {/* Register button */}
      <Link href="/application">
        <button className="mt-4 w-full bg-darkblue text-white px-4 py-2 rounded-md text-sm font-medium">
          Register Now
        </button>
      </Link>
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;