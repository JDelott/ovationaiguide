import React from 'react';

export default function RoutingGuideSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {/* Getting Started */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Creating Your First Page</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Follow these steps to create a new page in Next.js:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Navigate to <code className="text-blue-400">src/app/</code> in the file explorer
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Create a new folder for your route (e.g., <code className="text-blue-400">about/</code>)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Inside the folder, create <code className="text-blue-400">page.tsx</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Press <code className="text-blue-400">Cmd/Ctrl + L</code> to open chat
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Example Page Prompts</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Simple About Page</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Create an about page with:
                  - A header section with title and subtitle
                  - Team member grid with images and bios
                  - Company mission statement section
                  - Contact information
                  - Use Tailwind CSS for styling
                  - Make it responsive for mobile&rdquo;
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Dynamic Blog Post Page</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Create a dynamic blog post page at [slug]/page.tsx with:
                  - Dynamic route parameter for post slug
                  - Markdown content rendering
                  - Author info and publish date
                  - Share buttons
                  - Next/previous post navigation
                  - Related posts section&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Route Types */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Common Route Types</h3>
            <div className="space-y-4 sm:space-y-6">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Static Route: <code className="text-blue-400">about/page.tsx</code> → <code className="text-blue-400">/about</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Dynamic Route: <code className="text-blue-400">blog/[slug]/page.tsx</code> → <code className="text-blue-400">/blog/post-1</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Catch-all Route: <code className="text-blue-400">docs/[...slug]/page.tsx</code> → <code className="text-blue-400">/docs/any/path</code>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Layout and Templates */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Creating Layouts</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Try this prompt to create a layout:
              </p>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                &ldquo;Create a layout.tsx file with:
                - Navigation header with logo and menu
                - Sidebar for documentation pages
                - Footer with site links
                - Dark mode support
                - Responsive design for mobile
                - Props typing for children&rdquo;
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Best Practices</h3>
            <div className="space-y-3 sm:space-y-4">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Keep page components focused on layout and data fetching
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Use layouts for shared UI between routes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Organize routes logically in the file system
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Consider loading and error states for each route
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left sm:text-center">
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Now that you can create pages and routes, let&apos;s learn about handling forms and API integration.
            </p>
            <a 
              href="/guides/build/forms-api"
              className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Forms & API Integration
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
