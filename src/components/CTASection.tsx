import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 sm:gap-6 opacity-[0.02] pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-full border-l border-white" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-6 sm:mb-8">
            <span className="text-blue-400 text-sm font-medium">Get Started Today</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-white">
            Ready to master
            <br />
            <span className="text-blue-400">AI-powered development?</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12">
            Join hundreds of developers who are already building faster and smarter 
            with AI-powered development. Start your journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/guides" 
              className="group relative px-8 py-4 bg-white text-black font-medium hover:bg-blue-400 transition-colors duration-300 text-center"
            >
              Start Learning
              <div className="absolute inset-0 border border-white group-hover:border-blue-400 transition-colors duration-300 translate-x-1 translate-y-1 -z-10" />
            </Link>
            <Link 
              href="/coaching" 
              className="px-8 py-4 border border-white text-white font-medium hover:border-blue-400 hover:text-blue-400 transition-colors duration-300 text-center"
            >
              Book AI Coaching
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 sm:mt-16">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-400">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">500+ developers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">100% satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
