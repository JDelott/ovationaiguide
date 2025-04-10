import React from 'react';

export default function GitBasicsSection() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
      {/* Introduction */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Getting Started with Git</h3>
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-400">
            Git is integrated directly into Cursor, making version control seamless:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm text-gray-400">Access Git commands from the sidebar</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm text-gray-400">View changes in real-time</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm text-gray-400">Integrated terminal for Git operations</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Basic Commands */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Essential Git Commands</h3>
        <div className="space-y-4">
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Initialize Repository</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git init</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Check Status</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git status</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Add Files</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git add .</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Now that you understand Git basics, let&apos;s learn how to commit changes.
        </p>
        <a 
          href="/guides/version-control/commits"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          Continue to Committing Changes
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
} 
