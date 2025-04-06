import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Building with Cursor AI?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of developers who are already building faster and smarter with AI-powered development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/products" 
            className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100"
          >
            View Products
          </Link>
          <Link 
            href="/contact" 
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
