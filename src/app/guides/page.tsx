import React from 'react';
import Link from 'next/link';

const guides = [
  {
    category: "Installation & Setup",
    description: "Get your development environment ready with Cursor AI, Node.js, and create your first project.",
    number: "01",
    items: [
      { title: "Development Prerequisites", slug: "installation", time: "10 min" },
      { title: "Installing Cursor AI", slug: "installation/cursor", time: "5 min" },
      { title: "Project Setup", slug: "installation/project-setup", time: "10 min" },
      { title: "First Development Steps", slug: "development/first-steps", time: "15 min" }
    ]
  },
  {
    category: "Iterate/Build",
    description: "Learn how to effectively use AI to build and expand your application.",
    number: "02",
    items: [
      { title: "Adding Features with AI", slug: "build/features", time: "20 min" },
      { title: "Building UI Components", slug: "build/components", time: "15 min" },
      { title: "Creating Pages & Routes", slug: "build/routing", time: "15 min" },
      { title: "Forms & API Integration", slug: "build/forms-api", time: "25 min" }
    ]
  },
  {
    category: "Debug",
    description: "Master the art of debugging with Cursor AI's intelligent assistance.",
    number: "03",
    items: [
      { title: "Error Resolution with Cursor", slug: "debug/basics", time: "20 min" },
      { title: "Understanding Error Messages", slug: "debug/errors", time: "15 min" },
      { title: "AI-Assisted Bug Fixing", slug: "debug/ai-fixes", time: "20 min" },
      { title: "Debugging Workflow", slug: "debug/workflow", time: "15 min" }
    ]
  },
  {
    category: "Version Control",
    description: "Learn essential Git operations with Cursor AI's intelligent assistance.",
    number: "04",
    items: [
      { title: "Git Repository Setup", slug: "git/setup", time: "10 min" },
      { title: "AI Commit Messages", slug: "git/commits", time: "15 min" },
      { title: "GitHub Integration", slug: "git/github", time: "20 min" }
    ]
  }
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-32">
        {/* Header */}
        <div className="mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <span className="text-blue-400 text-sm font-medium">Free Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-white">
            Master Cursor AI
            <br />
            <span className="text-blue-400">step by step</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Comprehensive guides to help you build powerful applications using Cursor AI. 
            Perfect for beginners and experienced developers alike.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="space-y-24">
          {guides.map((section) => (
            <div key={section.category} className="group">
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* Left Column - Category Info */}
                <div className="col-span-12 md:col-span-4">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-sm text-blue-400">{section.number}</span>
                    </div>
                    <h2 className="text-2xl font-medium text-white mb-4">
                      {section.category}
                    </h2>
                    <p className="text-gray-400 mb-6">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Right Column - Guide Links */}
                <div className="col-span-12 md:col-span-8">
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <Link 
                        key={item.slug}
                        href={`/guides/${item.slug}`}
                        className="group/item block bg-white/[0.03] hover:bg-white/[0.06] rounded-lg p-6 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg text-white group-hover/item:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500">{item.time}</span>
                            <svg className="w-4 h-4 text-gray-500 group-hover/item:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/5 mt-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
