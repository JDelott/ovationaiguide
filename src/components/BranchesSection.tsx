import React from 'react';

export default function BranchesSection() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
      {/* Branch Management */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Branch Management</h3>
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-400">
            Essential branch operations in Git:
          </p>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Create New Branch</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git checkout -b feature/new-feature</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Switch Branches</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git checkout main</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">List Branches</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git branch</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Working with Branches */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Branch Operations</h3>
        <div className="space-y-4">
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Update Branch</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git pull origin main</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Push Branch</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git push origin feature/new-feature</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Now that you understand branches, let&apos;s learn about creating pull requests.
        </p>
        <a 
          href="/guides/version-control/pull-requests"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          Continue to Pull Requests
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
} 
