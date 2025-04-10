import React from 'react';

export default function CommitChangesSection() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
      {/* Staging Changes */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Staging Changes</h3>
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-400">
            Before committing, you need to stage your changes:
          </p>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Stage All Changes</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git add .</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Stage Specific File</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git add src/components/MyComponent.tsx</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Creating Commits */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Creating Commits</h3>
        <div className="space-y-4">
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Basic Commit</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git commit -m &quot;Add new feature&quot;</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Detailed Commit</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git commit -m &quot;feat: add user authentication&quot; -m &quot;Implements login and signup functionality&quot;</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Now that you can commit changes, let&apos;s learn about working with branches.
        </p>
        <a 
          href="/guides/version-control/branches"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          Continue to Working with Branches
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
} 
