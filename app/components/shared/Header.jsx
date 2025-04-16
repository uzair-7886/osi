import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-darkblue text-white py-2 h-[61px] hidden md:flex items-center justify-center ">
      <div className="container max-w-7xl  px-2 sm:px-4 flex justify-between items-center ">
        {/* <div className="text-[20px] font-semibold">
          OCL
        </div> */}
        <Link href="/">
              <img src="/logo.jpeg" alt="Logo" className="h-12 sm:h-10 w-auto" />
            </Link>
      
      </div>
    </header>
  );
};

export default Header;