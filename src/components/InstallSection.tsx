import React from 'react';

export default function InstallSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 rounded-full mb-4 sm:mb-6">
            <span className="text-blue-400 text-xs sm:text-sm font-medium">Prerequisites</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-4 sm:mb-6 text-white">
            Before Installing Cursor AI
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            Make sure you have these tools installed before setting up Cursor AI and your development environment.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="space-y-8 sm:space-y-12">
          {/* Homebrew */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">1. Install Homebrew (macOS)</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Homebrew is a package manager for macOS that we&apos;ll use to install Cursor AI and other tools.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Install Homebrew */}
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Install Homebrew</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  /bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
                </div>
              </div>

              {/* Configure Path for Intel Macs */}
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Add to PATH (Intel Mac)</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  echo &apos;eval &quot;$(/usr/local/bin/brew shellenv)&quot;&apos; &gt;&gt; ~/.zprofile
                  <br />
                  eval &quot;$(/usr/local/bin/brew shellenv)&quot;
                </div>
              </div>

              {/* Configure Path for M1/M2 Macs */}
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Add to PATH (Apple Silicon - M1/M2)</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  echo &apos;eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;&apos; &gt;&gt; ~/.zprofile
                  <br />
                  eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;
                </div>
              </div>

              {/* Verify Installation */}
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Verify Installation</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  brew --version
                </div>
              </div>
            </div>

            {/* Homebrew Tips */}
            <div className="mt-4 sm:mt-6 bg-blue-500/10 rounded-lg p-3 sm:p-4">
              <h4 className="text-sm sm:text-base text-blue-400 mb-2">Important Notes</h4>
              <ul className="text-gray-400 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Choose the appropriate PATH commands based on your Mac&apos;s processor
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  If using bash instead of zsh, replace .zprofile with .bash_profile
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  You may need to restart your terminal after these changes
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Run &quot;brew doctor&quot; to check for any potential issues
                </li>
              </ul>
            </div>
          </div>

          {/* Node.js & NVM */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">2. Install Node Version Manager (nvm)</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              NVM helps you manage multiple versions of Node.js. This is essential for development with Next.js.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Install NVM</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                </div>
              </div>
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Install Node.js LTS</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  nvm install --lts
                  <br />
                  nvm use --lts
                </div>
              </div>
            </div>
          </div>

          {/* NPM */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">3. Verify npm Installation</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              npm (Node Package Manager) comes with Node.js. Verify it&apos;s installed correctly:
            </p>
            <div className="bg-black/30 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
              npm --version
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-500/10 rounded-lg sm:rounded-xl p-4 sm:p-6">
            <h4 className="text-base sm:text-lg text-blue-400 mb-2 sm:mb-3">Important Notes</h4>
            <ul className="text-gray-400 space-y-1.5 sm:space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                After installing Homebrew, follow any additional instructions in your terminal
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Restart your terminal after installing nvm
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                For Windows users, visit nodejs.org to download and install Node.js directly
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Make sure all commands complete successfully before proceeding to install Cursor AI
              </li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="text-left">
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Once you have all prerequisites installed, you&apos;re ready to proceed with installing Cursor AI.
            </p>
            <a 
              href="/guides/installation/cursor"
              className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Cursor AI Installation
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
