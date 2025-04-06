import React from 'react';
import Link from 'next/link';

const navigation = [
  { name: 'Guides', href: '/guides' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl tracking-tight"
            >
              <span className="text-white font-light">Ovation</span>
              <span className="text-blue-400 font-medium ml-2">AI Guide</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <div className="flex items-center space-x-10 mr-16">
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
        </div>
      </div>
    </nav>
  );
}
