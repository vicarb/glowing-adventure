'use client'
// components/Navbar.js
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <a href="#" className="text-lg font-bold">YourDigitalBusiness</a>
        </div>
        <div className="hidden md:block">
          <a href="#services" className="text-gray-600 hover:text-gray-900 px-4">Services</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900 px-4">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 px-4">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#services" className="block text-gray-600 hover:text-gray-900 px-4 py-2">Services</a>
        <a href="#portfolio" className="block text-gray-600 hover:text-gray-900 px-4 py-2">Portfolio</a>
        <a href="#contact" className="block text-gray-600 hover:text-gray-900 px-4 py-2">Contact</a>
      </div>
    </nav>
  );
}
