import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center pt-16 pb-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-6 opacity-[0.02] pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-full border-l border-white" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-2">
            {/* Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-12">
              <span className="text-white block mb-2">Master AI</span>
              <span className="text-white block mb-2">development with</span>
              <span className="text-blue-400 block">Cursor</span>
            </h1>

            {/* Description */}
            <div className="grid grid-cols-12 gap-6 mb-16">
              <p className="col-span-12 lg:col-span-6 text-xl text-gray-400 leading-relaxed">
                Ovation AI Guide provides expert coaching and comprehensive resources 
                to help you build powerful applications using Cursor AI. Perfect for 
                beginners, hobbyists, and solo entrepreneurs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/guides" 
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white text-[15px] rounded-lg transition-colors inline-flex items-center"
              >
                Learn AI Development
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/coaching" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-[15px] rounded-lg transition-colors border border-white/10"
              >
                Book 1:1 AI Coaching
              </Link>
            </div>

            {/* Target Audience Tags */}
            <div className="flex gap-4 mt-12">
              <div className="px-4 py-2 bg-white/5 rounded-full">
                <span className="text-sm text-gray-400">For Hobbyists</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-full">
                <span className="text-sm text-gray-400">For Entrepreneurs</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-full">
                <span className="text-sm text-gray-400">For Beginners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
