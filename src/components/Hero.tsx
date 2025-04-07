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
            {/* Header Section */}
            <div className="mb-16">
              {/* Tag */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
                <span className="text-blue-400 text-sm font-medium">AI Development Guide</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12">
                <span className="text-white">Build better with</span>
                <br />
                <span className="text-blue-400">Cursor AI</span>
              </h1>
            </div>

            {/* Creative Content Layout */}
            <div className="space-y-12 mb-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
              
              {/* Content Sections */}
              <div className="pl-8 relative">
                <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]" />
                <div className="text-2xl text-blue-400 mb-3 font-light">Start Your AI Journey</div>
                <div className="text-gray-400 text-lg">
                  Begin with the basics of Cursor AI. Our guides take you from 
                  installation to your first AI-powered development experience.
                </div>
              </div>

              <div className="pl-8 relative">
                <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]" />
                <div className="text-2xl text-blue-400 mb-3 font-light">Build with Confidence</div>
                <div className="text-gray-400 text-lg">
                  Learn to harness AI for coding, whether you&apos;re new to development 
                  or looking to enhance your workflow.
                </div>
              </div>

              <div className="pl-8 relative">
                <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]" />
                <div className="text-2xl text-blue-400 mb-3 font-light">Accelerate Development</div>
                <div className="text-gray-400 text-lg">
                  From basic prompts to complete applications, discover how AI 
                  transforms the way you code.
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/guides" 
                className="group relative inline-flex items-center justify-center"
              >
                <div className="relative px-8 py-3 bg-blue-500 text-white font-medium rounded-lg 
                               shadow-[0_0_20px_rgba(59,130,246,0.5)] 
                               hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] 
                               hover:bg-blue-600 transition-all duration-300 
                               border border-blue-400/50 hover:border-blue-400
                               hover:scale-[1.02]">
                  Download Free Guides
                </div>
              </Link>
              
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center"
              >
                <div className="relative px-8 py-3 bg-transparent text-white font-medium rounded-lg
                               border border-white/20 hover:border-blue-400/50
                               hover:bg-blue-500/10 transition-all duration-300
                               shadow-[0_0_20px_rgba(255,255,255,0)] 
                               hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
                               hover:scale-[1.02]">
                  Book AI Coaching
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
