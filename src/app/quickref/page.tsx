import React from 'react';
import QuickReference from '@/components/QuickReference';

export default function QuickReferencePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-32">
        {/* Header */}
        <div className="mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <span className="text-blue-400 text-sm font-medium">Quick Reference</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-white">
            Essential commands and
            <br />
            <span className="text-blue-400">shortcuts reference</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A comprehensive guide to all the commands, shortcuts, and workflows you need 
            for efficient development with Cursor AI and Next.js.
          </p>
        </div>

        {/* Quick Reference Component */}
        <QuickReference />
      </div>
    </div>
  );
}
