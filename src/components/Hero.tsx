import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="min-h-[90vh] flex items-center pt-24 sm:pt-32 pb-16 sm:pb-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 opacity-[0.02] pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-full border-l border-white" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
          {/* Main Content */}
          <div className="col-span-1 lg:col-span-8 lg:col-start-2">
            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 sm:mb-12">
              <span className="text-white block mb-2">Master AI</span>
              <span className="text-white block mb-2">development with</span>
              <span className="text-blue-400 block">Cursor</span>
            </h1>

            {/* Description */}
            <div className="mb-8 sm:mb-16">
              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
                Ovation AI Guide provides expert coaching and comprehensive resources 
                to help you build powerful applications using Cursor AI. Learn from 
                industry experts and accelerate your AI development journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link 
                href="/guides" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium hover:bg-blue-400 transition-colors duration-300 text-center"
              >
                Start Learning
                <div className="absolute inset-0 border border-white group-hover:border-blue-400 transition-colors duration-300 translate-x-1 translate-y-1 -z-10" />
              </Link>
              <Link 
                href="/coaching" 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border border-white text-white font-medium hover:border-blue-400 hover:text-blue-400 transition-colors duration-300 text-center"
              >
                Book AI Coaching
              </Link>
            </div>

            {/* Target Audience Tags */}
            <div className="flex flex-wrap gap-3 mt-8 sm:mt-12">
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
