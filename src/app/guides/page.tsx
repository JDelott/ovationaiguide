import React from 'react';
import Link from 'next/link';

const guides = [
  {
    category: "Getting Started",
    description: "Learn the basics of Cursor AI and set up your development environment.",
    number: "01",
    items: [
      { title: "Installing Cursor AI", slug: "installation", time: "5 min" },
      { title: "Basic Interface Overview", slug: "interface", time: "10 min" },
      { title: "Key Shortcuts", slug: "shortcuts", time: "8 min" },
    ]
  },
  {
    category: "Core Concepts",
    description: "Master the fundamentals of AI-assisted development.",
    number: "02",
    items: [
      { title: "AI Assistant Basics", slug: "ai-basics", time: "15 min" },
      { title: "Effective Prompting", slug: "prompting", time: "20 min" },
      { title: "Code Generation", slug: "code-generation", time: "25 min" },
    ]
  },
  {
    category: "Advanced Topics",
    description: "Take your AI development skills to the next level.",
    number: "03",
    items: [
      { title: "Project Architecture", slug: "architecture", time: "30 min" },
      { title: "Testing with Cursor", slug: "testing", time: "25 min" },
      { title: "Debugging Tips", slug: "debugging", time: "20 min" },
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
