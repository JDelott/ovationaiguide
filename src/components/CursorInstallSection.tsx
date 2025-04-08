import React from 'react';

export default function CursorInstallSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* macOS Installation */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">Installing on macOS</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 mb-2">Using Homebrew (Recommended)</h4>
                <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                  brew install --cask cursor
                </div>
              </div>
              
              <div>
                <h4 className="text-blue-400 mb-2">Manual Installation</h4>
                <p className="text-gray-400 mb-2">
                  Alternatively, download the latest version from the official website:
                </p>
                <a 
                  href="https://cursor.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  cursor.sh
                </a>
              </div>
            </div>
          </div>

          {/* Windows Installation */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">Installing on Windows</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Download and run the official Windows installer:
              </p>
              <a 
                href="https://cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Download Windows Installer
              </a>
            </div>
          </div>

          {/* Initial Setup */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">Initial Setup</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                After installation, launch Cursor AI and configure these recommended settings:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-gray-400">
                    Enable AI features when prompted during first launch
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-gray-400">
                    Set up your preferred theme and editor settings
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-gray-400">
                    Install recommended extensions for TypeScript and Tailwind CSS
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Verification */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">Verify Installation</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                To verify Cursor AI is working correctly:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-gray-400">
                    Create a new file and test the AI autocomplete
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-gray-400">
                    Try the command palette (Cmd/Ctrl + Shift + P)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-gray-400">
                    Test the integrated terminal
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Now that Cursor AI is installed, let&apos;s create your first Next.js project.
            </p>
            <a 
              href="/guides/installation/project-setup"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Project Setup
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
