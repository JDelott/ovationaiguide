import React from 'react';
import InstallSection from '@/components/InstallSection';

export default function InstallationGuidePage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 mt-16 sm:mt-20">
        {/* Header */}
        <div className="text-left mb-12 sm:mb-16 lg:mb-24">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 rounded-full mb-6 sm:mb-8">
            <span className="text-blue-400 text-xs sm:text-sm font-medium">Getting Started • 01</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 sm:mb-8 text-white">
            Development Environment
            <span className="text-blue-400 block mt-2 sm:mt-4">Setup Guide</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed px-4">
            Set up your complete development environment with Cursor AI, Node.js, and create 
            your first Next.js project with TypeScript and Tailwind CSS.
          </p>
        </div>

        {/* Installation Guide Content */}
        <InstallSection />
      </div>
    </div>
  );
}
