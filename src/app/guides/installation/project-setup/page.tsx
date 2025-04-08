import React from 'react';
import ProjectSetupSection from '@/components/ProjectSetupSection';

export default function ProjectSetupPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <span className="text-blue-400 text-sm font-medium">Getting Started • 03</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Project Setup
              <span className="text-blue-400 block mt-4">Guide</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Learn how to create a new GitHub repository, set up your local development environment, 
              and initialize a Next.js project with TypeScript and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Project Setup Content */}
        <ProjectSetupSection />
      </div>
    </div>
  );
}
