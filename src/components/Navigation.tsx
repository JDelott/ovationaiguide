import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              Build with Cursor
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/learn" className="hover:text-gray-600">Learn</Link>
            <Link href="/resources" className="hover:text-gray-600">Resources</Link>
            <Link href="/products" className="hover:text-gray-600">Products</Link>
            <Link href="/contact" 
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
