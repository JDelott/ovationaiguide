import React from 'react';

export default function PullRequestsSection() {
  return (
    <section className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
      {/* Creating Pull Requests */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Creating Pull Requests</h3>
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-400">
            Steps to create a pull request:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">1.</span>
              <span className="text-sm text-gray-400">Push your branch to GitHub</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">2.</span>
              <span className="text-sm text-gray-400">Visit your repository on GitHub</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">3.</span>
              <span className="text-sm text-gray-400">Click &quot;Compare & pull request&quot;</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">4.</span>
              <span className="text-sm text-gray-400">Fill in PR details and create</span>
            </li>
          </ul>
        </div>
      </div>

      {/* PR Best Practices */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Pull Request Best Practices</h3>
        <div className="space-y-4">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm text-gray-400">Write clear PR descriptions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm text-gray-400">Keep changes focused and atomic</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm text-gray-400">Add relevant screenshots or GIFs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="text-sm text-gray-400">Respond to review comments promptly</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Managing PRs */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
        <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Managing Pull Requests</h3>
        <div className="space-y-4">
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Update PR Branch</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git pull origin main</code>
            </pre>
          </div>
          <div className="bg-black/30 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-blue-400 mb-2">Push Updates</h4>
            <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
              <code className="text-gray-400">git push origin feature/branch</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
} 
