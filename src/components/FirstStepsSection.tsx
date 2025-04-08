import React from 'react';

export default function FirstStepsSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Local Development */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">1. Starting Local Development</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 mb-2">Launch Development Server</h4>
                <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                  npm run dev
                </div>
                <p className="text-gray-400 mt-4">
                  This command:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-400">
                      Starts a local development server at <code className="text-blue-400">http://localhost:3000</code>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-400">
                      Enables hot reloading (changes appear instantly in browser)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-400">
                      Shows real-time compilation errors and warnings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Browser Dev Tools */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">2. Browser Developer Tools</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Essential browser shortcuts for development:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Open Dev Tools: <code className="text-blue-400">Cmd + Option + I</code> (Mac) or <code className="text-blue-400">F12</code> (Windows)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Elements Panel: <code className="text-blue-400">Cmd + Option + C</code> (Mac) or <code className="text-blue-400">Ctrl + Shift + C</code> (Windows)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Console Panel: <code className="text-blue-400">Cmd + Option + J</code> (Mac) or <code className="text-blue-400">Ctrl + Shift + J</code> (Windows)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Hard Reload: <code className="text-blue-400">Cmd + Shift + R</code> (Mac) or <code className="text-blue-400">Ctrl + Shift + R</code> (Windows)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cursor UI Tour */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">3. Cursor UI Overview</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Key features of the Cursor interface:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Command Palette: <code className="text-blue-400">Cmd + Shift + P</code> (Mac) or <code className="text-blue-400">Ctrl + Shift + P</code> (Windows) - Access all commands
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    AI Chat Panel: <code className="text-blue-400">Cmd + L</code> (Mac) or <code className="text-blue-400">Ctrl + L</code> (Windows) - Open AI assistant
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    File Explorer: <code className="text-blue-400">Cmd + B</code> (Mac) or <code className="text-blue-400">Ctrl + B</code> (Windows) - Toggle sidebar
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Quick File: <code className="text-blue-400">Cmd + P</code> (Mac) or <code className="text-blue-400">Ctrl + P</code> (Windows) - Find files quickly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Integrated Terminal: <code className="text-blue-400">Cmd + `</code> (Mac) or <code className="text-blue-400">Ctrl + `</code> (Windows) - Toggle terminal
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI Interaction */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">4. Working with AI Assistant</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Try these example prompts to get started:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-gray-400">
                    &ldquo;Create a new React component for a navigation menu&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-gray-400">
                    &ldquo;Help me understand how this code works&rdquo; (with selected code)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-gray-400">
                    &ldquo;Suggest improvements for this function&rdquo; (with selected code)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">5. Development Best Practices</h3>
            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Always review and understand AI-generated code before using it
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Use clear, specific prompts for better results
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Test AI-generated code thoroughly before committing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-gray-400">
                    Keep your prompts focused on specific tasks or problems
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Now that you&apos;ve learned the basics, let&apos;s explore more advanced AI development concepts.
            </p>
            <a 
              href="/guides/ai-basics"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to AI Assistant Basics
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
