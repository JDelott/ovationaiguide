import React from 'react';
import InstallSection from '@/components/InstallSection';

export default function InstallationGuidePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <span className="text-blue-400 text-sm font-medium">Getting Started • 01</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-white">
            Development Environment
            <span className="text-blue-400 block mt-4">Setup Guide</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
