import React from 'react';

export default function ProjectSetupSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* GitHub Repository Setup */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">1. Create GitHub Repository</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                First, create a new repository on GitHub:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-gray-400">
                    Go to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">github.com/new</a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-gray-400">
                    Name your repository (e.g., &quot;my-next-project&quot;)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-gray-400">
                    Add a description (optional)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  <span className="text-gray-400">
                    Initialize with a README
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">5.</span>
                  <span className="text-gray-400">
                    Click &quot;Create repository&quot;
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Local Project Setup */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">2. Set Up Local Project Directory</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 mb-2">Create Projects Directory</h4>
                <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                  mkdir ~/projects
                  <br />
                  cd ~/projects
                </div>
              </div>
              
              <div>
                <h4 className="text-blue-400 mb-2">Clone Your Repository</h4>
                <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                  git clone https://github.com/yourusername/my-next-project.git
                  <br />
                  cd my-next-project
                </div>
              </div>
            </div>
          </div>

          {/* Next.js Project Creation */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">3. Initialize Next.js Project</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 mb-2">Create Next.js Project</h4>
                <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                  npx create-next-app@latest . --typescript --tailwind --eslint
                </div>
                <p className="text-gray-400 mt-2 text-sm">
                  Note: The dot (.) after create-next-app tells it to use the current directory
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 mb-2">Project Configuration</h4>
                <p className="text-gray-400 mb-2">
                  When prompted, configure your project:
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>✓ Would you like to use TypeScript? Yes</li>
                  <li>✓ Would you like to use ESLint? Yes</li>
                  <li>✓ Would you like to use Tailwind CSS? Yes</li>
                  <li>✓ Would you like to use `src/` directory? Yes</li>
                  <li>✓ Would you like to use App Router? Yes</li>
                  <li>✓ Would you like to customize the default import alias? No</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Now that your project is set up, let&apos;s start development with Cursor AI.
            </p>
            <a 
              href="/guides/development/first-steps"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to First Development Steps
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
