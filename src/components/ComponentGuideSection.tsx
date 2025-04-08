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
                To create a new component using Cursor AI, follow these steps:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Right-click in the src/components folder and select &ldquo;New File&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Name your file (e.g., &ldquo;Button.tsx&rdquo; or &ldquo;LandingPage.tsx&rdquo;)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Open the chat interface with Cmd/Ctrl + L
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Writing Prompts */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Writing Effective Prompts</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Example: Creating a Simple Component</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Create a reusable button component with the following requirements:
                  - Primary and secondary variants
                  - Small, medium, and large sizes
                  - Tailwind CSS styling
                  - TypeScript support
                  - Hover and focus states&rdquo;
                </div>
              </div>
              
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Example: Creating a Landing Page</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Create a modern landing page component with:
                  - Hero section with headline, subtext, and CTA button
                  - Features grid showing 4 key product features
                  - Testimonials section with customer quotes
                  - Pricing table for different tiers
                  - Newsletter signup form in the footer
                  - Mobile responsive design using Tailwind CSS&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Breaking Down Large Components */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Breaking Down Large Components</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                For larger components like landing pages, break them down into sections:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    &ldquo;Create a hero section with a gradient background, centered text, and a CTA button&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    &ldquo;Add a features grid section below the hero with 4 cards&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    &ldquo;Create a testimonials carousel component&rdquo;
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Iterating and Refining */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Iterating on Components</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-400">
                After Cursor AI generates your component, you can refine it by:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Ask to modify specific parts: &ldquo;Make the hero section taller on desktop&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Request additional features: &ldquo;Add a dark mode toggle to the navbar&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Fix responsive issues: &ldquo;The pricing table is overlapping on mobile&rdquo;
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tips for Success */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Tips for Success</h3>
            <div className="space-y-3 sm:space-y-4">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Start with a clear outline of your component&apos;s structure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Break complex layouts into smaller, manageable sections
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Use reference images or websites to describe desired designs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Test components at different screen sizes as you build
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left sm:text-center">
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Now that you can create components, let&apos;s learn about building pages and routes.
            </p>
            <a 
              href="/guides/build/routing"
              className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Creating Pages & Routes
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
