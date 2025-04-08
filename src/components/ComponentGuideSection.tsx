import React from 'react';

export default function ComponentGuideSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {/* Getting Started */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Getting Started</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Follow these exact steps to create a new component with Cursor AI:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    In the file explorer (left sidebar), navigate to <code className="text-blue-400">src/components/</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Right-click and select <code className="text-blue-400">New File</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Name your file with <code className="text-blue-400">.tsx</code> extension (e.g., <code className="text-blue-400">Button.tsx</code>)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Press <code className="text-blue-400">Cmd/Ctrl + L</code> to open the chat interface
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">5.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Click inside the new file before starting your chat with Cursor
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Chat Interface Tips */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Chat Interface Tips</h3>
            <div className="space-y-4 sm:space-y-6">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    The chat panel will appear on the right side of your screen
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Cursor will understand which file you&apos;re working on based on your cursor position
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Use <code className="text-blue-400">Cmd/Ctrl + /</code> to quickly accept suggested code
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Press <code className="text-blue-400">Esc</code> to close the chat interface
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Writing Prompts */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Writing Your First Component Prompt</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Once your chat is open, try this example prompt:
              </p>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                &ldquo;Create a button component with these requirements:
                - Primary and secondary variants
                - Small, medium, and large sizes
                - Tailwind CSS styling
                - TypeScript support for props
                - Hover and focus states&rdquo;
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                After Cursor generates the code, you can:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Review the suggested implementation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Accept the code with <code className="text-blue-400">Cmd/Ctrl + /</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Ask for modifications: &ldquo;Can you add an outline variant?&rdquo;
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left sm:text-center">
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Now that you can create basic components, let&apos;s learn about building more complex layouts.
            </p>
            <a 
              href="/guides/build/layouts"
              className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Building Layouts
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
