import React from 'react';

const Header = () => {
  return (
    <header className="bg-darkblue text-white py-2 h-[61px] hidden md:flex items-center justify-center ">
      <div className="container  px-2 sm:px-4 flex justify-between items-center ">
        <div className="text-[20px] font-semibold">
          OCL
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-8 ">
          <a href="tel:+1234-123-1234" className="flex items-center gap-2">
            <img src="/svgs/phone.svg" alt="phone svg" />
            <span className="text-[13px]  whitespace-nowrap">+1 234-123-1234</span>
          </a>
          <a href="mailto:support@email.com" className="flex items-center gap-2">
          <img src="/svgs/mail.svg" alt="mail svg" />
            <span className="text-[13px] whitespace-nowrap">support@email.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;