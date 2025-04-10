import React from 'react';

export default function ErrorResolutionGuideSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {/* Basic Error Types */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Common Error Types</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Before diving into debugging, let&apos;s understand the main types of errors you&apos;ll encounter:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-red-400 text-sm font-medium mb-2">Syntax Errors</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Incorrect code structure or typos</p>
                  <pre className="mt-2 text-xs bg-black/50 p-2 rounded overflow-x-auto">
                    <code className="text-red-400">const myFunction = {'{'}
  console.log(&quot;Hello&quot;)   // Missing closing parenthesis
{'}'}</code>
                  </pre>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-yellow-400 text-sm font-medium mb-2">Runtime Errors</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Errors that occur during execution</p>
                  <pre className="mt-2 text-xs bg-black/50 p-2 rounded overflow-x-auto">
                    <code className="text-yellow-400">const data = undefined;
console.log(data.length); // Cannot read property</code>
                  </pre>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-orange-400 text-sm font-medium mb-2">Type Errors</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Incorrect data type usage</p>
                  <pre className="mt-2 text-xs bg-black/50 p-2 rounded overflow-x-auto">
                    <code className="text-orange-400">const num: number = &quot;123&quot;; // Type mismatch</code>
                  </pre>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="text-blue-400 text-sm font-medium mb-2">Logic Errors</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Code runs but produces wrong results</p>
                  <pre className="mt-2 text-xs bg-black/50 p-2 rounded overflow-x-auto">
                    <code className="text-blue-400">function add(a, b) {'{'}
  return a - b; // Wrong operator
{'}'}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Cursor AI Debug Tools */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Cursor AI Debug Tools</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-blue-400">
                  Cursor AI provides intelligent tools to help you identify and fix errors quickly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white text-sm font-medium mb-3">1. Error Highlighting</h4>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-gray-400">Red squiggles: Syntax/Type errors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-gray-400">Yellow squiggles: Warnings/Suggestions</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white text-sm font-medium mb-3">2. AI Error Analysis</h4>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <kbd className="px-2 py-1 text-xs bg-white/10 rounded">Hover</kbd>
                      <span className="text-xs text-gray-400">Quick error explanation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <kbd className="px-2 py-1 text-xs bg-white/10 rounded">Click</kbd>
                      <span className="text-xs text-gray-400">Detailed analysis & fixes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debug Workflow */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Simple Debug Workflow</h3>
            <div className="space-y-6">
              <div className="relative pl-8 pb-8 border-l border-white/10">
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400"></div>
                <h4 className="text-blue-400 text-sm font-medium mb-2">1. Locate the Error</h4>
                <p className="text-sm text-gray-400">Check terminal for error messages</p>
                <div className="mt-3 flex gap-2">
                  <kbd className="px-2 py-1 text-xs bg-white/10 rounded">Ctrl + ~</kbd>
                  <span className="text-xs text-gray-500">Open terminal</span>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l border-white/10">
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400"></div>
                <h4 className="text-blue-400 text-sm font-medium mb-2">2. Open AI Chat</h4>
                <p className="text-sm text-gray-400">Open the global AI chat panel</p>
                <div className="mt-3 flex gap-2">
                  <kbd className="px-2 py-1 text-xs bg-white/10 rounded">Cmd + L</kbd>
                  <span className="text-xs text-gray-500">Open AI chat panel</span>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l border-white/10">
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400"></div>
                <h4 className="text-blue-400 text-sm font-medium mb-2">3. Get AI Help</h4>
                <p className="text-sm text-gray-400">Copy error message into chat and apply fix</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-black/30 rounded">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-xs text-gray-400">Copy error from terminal, paste into chat</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-black/30 rounded">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-400">Click &quot;Apply Changes&quot; when solution appears</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/20 border border-blue-400"></div>
                <h4 className="text-blue-400 text-sm font-medium mb-2">4. Verify Fix</h4>
                <p className="text-sm text-gray-400">Save changes and restart server</p>
                <div className="mt-3 space-y-2">
                  <div className="flex gap-2">
                    <kbd className="px-2 py-1 text-xs bg-white/10 rounded">Cmd + S</kbd>
                    <span className="text-xs text-gray-500">Save changes</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 p-2 bg-black/30 rounded">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-gray-400">Run &quot;npm run dev&quot; and refresh browser</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Debugging Session */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Example Debugging Session</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-3">Problem: Type Error in React Component</h4>
                <pre className="text-xs bg-black/50 p-3 rounded overflow-x-auto mb-4">
                  <code className="text-red-400">Error: Type error: Property &apos;name&apos; is missing in type &apos;{}&apos; but required in type &apos;Props&apos;.</code>
                </pre>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400">1.</span>
                    <div>
                      <p className="text-sm text-gray-400">Open terminal to see error</p>
                      <kbd className="text-xs bg-white/10 px-2 py-1 rounded mt-1">Ctrl + ~</kbd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400">2.</span>
                    <div>
                      <p className="text-sm text-gray-400">Open AI chat panel</p>
                      <kbd className="text-xs bg-white/10 px-2 py-1 rounded mt-1">Cmd + L</kbd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400">3.</span>
                    <div>
                      <p className="text-sm text-gray-400">Copy the error message above and paste it into the chat</p>
                      <div className="mt-2 p-2 bg-black/50 rounded">
                        <p className="text-xs text-gray-400">Wait for AI response, then click &quot;Apply Changes&quot;</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400">4.</span>
                    <div>
                      <p className="text-sm text-gray-400">Save and verify the fix</p>
                      <div className="text-xs text-gray-500 mt-1">
                        <p>1. Save changes (Cmd + S)</p>
                        <p>2. Run &quot;npm run dev&quot;</p>
                        <p>3. Refresh browser</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Pro Debugging Tips</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/30 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-blue-400 mb-2">Use Console Effectively</h4>
                <pre className="text-xs bg-black/50 p-2 rounded overflow-x-auto">
                  <code className="text-gray-400">console.log({'{&apos;} value, type: typeof value {&apos;}'});</code>
                </pre>
              </div>
              <div className="bg-black/30 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-blue-400 mb-2">Debug with Breakpoints</h4>
                <p className="text-xs text-gray-400">Click the line number to add a breakpoint</p>
              </div>
              <div className="bg-black/30 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-blue-400 mb-2">Check Documentation</h4>
                <p className="text-xs text-gray-400">Use AI to explain library errors</p>
              </div>
              <div className="bg-black/30 p-3 rounded-lg">
                <h4 className="text-sm font-medium text-blue-400 mb-2">Save Common Fixes</h4>
                <p className="text-xs text-gray-400">Create snippets for recurring issues</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left sm:text-center">
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Now that you understand error resolution, let&apos;s learn about understanding error messages in detail.
            </p>
            <a 
              href="/guides/debug/error-messages"
              className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Understanding Error Messages
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
