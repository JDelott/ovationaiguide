import React from 'react';
import CursorUIMap from './CursorUIMap';

export default function FirstStepsSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Local Development */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">1. Starting Your Development Server</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 mb-2">Launch Development Server</h4>
                <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                  npm run dev
                </div>
                <p className="text-gray-400 mt-4">
                  After running this command, your application will be available at:
                </p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <code className="text-gray-400">http://localhost:3000</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Understanding Cursor's Layout */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">2. Understanding Cursor&apos;s Layout</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Cursor is designed to streamline your development workflow with an intuitive layout:
              </p>
              <CursorUIMap />
            </div>
          </div>

          {/* Essential Navigation */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">3. Essential Navigation</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-blue-400 mb-3">File Management</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">Toggle File Explorer with </span>
                        <code className="text-blue-400">⌘/Ctrl + B</code>
                        <span className="text-gray-400"> to manage project files</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">Quick file search using </span>
                        <code className="text-blue-400">⌘/Ctrl + P</code>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-3">Terminal & Output</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">Toggle Terminal with </span>
                        <code className="text-blue-400">⌘/Ctrl + `</code>
                        <span className="text-gray-400"> for commands and output</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">View problems and debug info in the bottom panel</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Working with AI */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-xl text-white mb-4">4. Efficient AI Workflow</h3>
            <div className="space-y-4">
              <p className="text-gray-400 mb-4">
                Cursor&apos;s AI features are integrated throughout your development experience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-blue-400 mb-3">Quick AI Access</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">Open AI Chat with </span>
                        <code className="text-blue-400">⌘/Ctrl + L</code>
                        <span className="text-gray-400"> for instant help</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">Select code and use </span>
                        <code className="text-blue-400">⌘/Ctrl + K</code>
                        <span className="text-gray-400"> for quick actions</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-3">Context-Aware Help</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">AI understands your current file and project context</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <div>
                        <span className="text-gray-400">Get inline suggestions and documentation</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Now that you understand Cursor&apos;s layout and navigation, let&apos;s explore more advanced features.
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
