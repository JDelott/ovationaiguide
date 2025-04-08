import React from 'react';
import RoutingGuideSection from '@/components/RoutingGuideSection';

export default function RoutingGuidePage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 mt-16 sm:mt-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 rounded-full mb-6 sm:mb-8">
            <span className="text-blue-400 text-xs sm:text-sm font-medium">Iterate/Build • 03</span>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Creating Pages
              <span className="text-blue-400 block mt-2 sm:mt-4">& Routes</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Learn how to create new pages and set up routing in your Next.js application using Cursor AI.
            </p>
          </div>
        </div>

        {/* Guide Content */}
        <RoutingGuideSection />
      </div>
    </div>
  );
} 
