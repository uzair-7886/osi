import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import BottomBar from './BottomBar';

const availablePages = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Oxford Summer Program', href: '/programs' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Fee & Key Dates', href: '/fee-key-dates' },
  { title: 'Parents', href: '/parents' }
];

const Footer = () => {
  return (
    <div>
      <footer className="bg-grey bg-opacity-10 py-12 px-4 mt-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto sm:h-10" />
            </Link>
            <div className="flex items-center space-x-2 text-gray-600 font-medium">
              <img src="/svgs/phone-black.svg" alt="phone icon" />
              <span>01865684061</span>
            </div>
            <div className="flex items-center space-x-2  text-gray-600 font-medium">
              <img src="/svgs/mail-black.svg" alt="mail icon" />
              <span>info@oxfordsummercourses.co.uk</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {availablePages.map((page) => (
                <li key={page.title}>
                  <Link href={page.href} className="text-gray-600 hover:text-blue-900 transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter!</h3>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-[60px] px-4 py-2 rounded-[20px] shadow-md border border-gray-300 focus:outline-none focus:border-blue-900"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
                <Send size={18} />
              </button>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us on</h4>
              <div className="flex space-x-4">
                {['linkedin', 'facebook', 'instagram'].map((social) => (
                  <Link
                    key={social}
                    href="/"
                    className="text-blue-900 hover:text-blue-800 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {social === 'linkedin' && <img src="/svgs/in.svg" alt="LinkedIn" />}
                    {social === 'facebook' && <img src="/svgs/fb.svg" alt="Facebook" />}
                    {social === 'instagram' && <img src="/svgs/insta.svg" alt="Instagram" />}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BottomBar />
    </div>
  );
};

export default Footer;
