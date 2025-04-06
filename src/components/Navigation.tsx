'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Guides', href: '/guides' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl sm:text-2xl tracking-tight"
            >
              <span className="text-white font-light">Ovation</span>
              <span className="text-blue-400 font-medium ml-2">AI Guide</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              {navigation.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-[15px] text-gray-300 hover:text-white transition-colors tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/coaching" 
              className="px-6 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-[15px] rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-black/95 border-t border-white/5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-base text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/coaching"
              className="block w-full px-6 py-3 text-center bg-blue-500 hover:bg-blue-400 text-white text-[15px] rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
