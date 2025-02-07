import React from 'react';
import Link from 'next/link';
import { Send, Phone, Mail } from 'lucide-react';
import BottomBar from './BottomBar';

const Footer = () => {
  return (
    <div>
    <footer className="bg-grey bg-opacity-10 py-12 px-4 mt-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          {/* <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-900 rounded-full"></div>
            <span className="ml-2 text-xl font-semibold">OSI</span>
          </div> */}
          <Link href="/">
              <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto sm:h-10" />
            </Link>
          <p className="text-gray-600 font-medium">1234 Abc Street</p>
          <p className="text-gray-600 font-medium">Oxford, UK</p>
          <div className="flex items-center space-x-2 text-gray-600 font-medium">
          <img src="/svgs/phone-black.svg" alt="mail svg" />
            <span>+1 234-123-1234</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 font-medium">
          <img src="/svgs/mail-black.svg" alt="mail svg" />
            <span>support@email.com</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Listings', 'Services', 'Blogs', 'Lorem Ipsum'].map((item) => (
              <li key={item}>
                <Link href="/" className="text-gray-600 hover:text-blue-900 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Discovery</h3>
          <ul className="space-y-2">
            {['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'].map((item, index) => (
              <li key={index}>
                <Link href="/" className="text-gray-600 hover:text-blue-900 transition-colors">
                  {item}
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
                  {social === 'linkedin' &&           <img src="/svgs/in.svg" alt="mail svg" />
                  }
                  {social === 'facebook' &&           <img src="/svgs/fb.svg" alt="mail svg" />
                  }
                  {social === 'instagram' &&           <img src="/svgs/insta.svg" alt="mail svg" />
                  }
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    <BottomBar/>
    </div>
  );
};

export default Footer;