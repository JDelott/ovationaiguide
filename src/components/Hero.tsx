import React from 'react';  
import Link from 'next/link';
export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-center mb-6">
          Build Better Apps with <span className="text-blue-600">Cursor AI</span>
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Learn how to leverage AI-powered development to build real-world applications 
          faster and more efficiently than ever before.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/learn" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
            Start Learning
          </Link>
          <Link href="/products" className="border border-black px-8 py-3 rounded-full hover:bg-gray-50">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
