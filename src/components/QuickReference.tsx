'use client';
import React, { useState } from 'react';

const sections = [
  {
    title: "Basic Workflow",
    items: [
      { command: "npm run dev", description: "Start server" },
      { command: "Ctrl+C", description: "Stop server" },
      { command: "Cmd+R", description: "Refresh browser (normal)" },
      { command: "Cmd+Shift+R", description: "Hard refresh browser" }
    ]
  },
  {
    title: "Cursor Shortcuts",
    items: [
      { command: "Ctrl + ~", description: "Open/close terminal" },
      { command: "Cmd + B", description: "Toggle sidebar/file explorer" },
      { command: "Cmd + L", description: "Open AI chat panel" },
      { command: "Cmd + K", description: "Show command palette" },
      { command: "Option + Z", description: "Toggle word wrap" },
      { command: "Cmd + S", description: "Save file" },
      { command: "Cmd + W", description: "Close tab" }
    ]
  },
  {
    title: "Git Commands",
    items: [
      { command: "git status", description: "Check changes" },
      { command: "git add .", description: "Stage all changes" },
      { command: "git commit -m \"Message\"", description: "Commit with message" },
      { command: "git push", description: "Push to remote repository" },
      { command: "git pull", description: "Pull latest changes" }
    ]
  },
  {
    title: "Browser Dev Tools",
    items: [
      { command: "Cmd+Option+J", description: "Open browser console" },
      { command: "Cmd+Option+C", description: "Inspect element" },
      { command: "F12", description: "Open developer tools" }
    ]
  },
  {
    title: "Debug Flow",
    items: [
      { command: "1. Check terminal", description: "Look for error messages" },
      { command: "2. Copy error", description: "Select the error message" },
      { command: "3. Cmd+L", description: "Open AI chat" },
      { command: "4. Paste & Ask", description: "Get AI assistance" }
    ]
  }
];

export default function QuickReference() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = sections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">Quick Reference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-white">
            Next.js & Cursor AI
            <br />
            <span className="text-blue-400">Development Guide</span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
            <svg 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Reference Sections */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredSections.map((section) => (
            <div 
              key={section.title}
              className="bg-white/[0.03] rounded-xl p-6 hover:bg-white/[0.05] transition-colors"
            >
              <h3 className="text-xl font-medium text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li 
                    key={index}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <code className="text-blue-400 font-mono text-sm">
                      {item.command}
                    </code>
                    <p className="mt-1 text-sm">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
