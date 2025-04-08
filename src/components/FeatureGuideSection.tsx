import React from 'react';

export default function FeatureGuideSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {/* Writing Effective Prompts */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Writing Effective Prompts</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                When requesting new features from Cursor AI, follow these best practices:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Be specific about the desired functionality
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Provide context about your existing codebase
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Specify any requirements or constraints
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Example Prompts</h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Adding a New Component</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Create a reusable button component with primary and secondary variants, 
                  using Tailwind CSS for styling. Include hover and focus states.&rdquo;
                </div>
              </div>
              
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Implementing Functionality</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Add form validation to the login component. Include email format validation 
                  and minimum password length requirements. Show error messages below each field.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Best Practices</h3>
            <div className="space-y-3 sm:space-y-4">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Break down complex features into smaller, manageable requests
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Review and understand the generated code before implementing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Iterate on the AI&apos;s suggestions to match your specific needs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Test the implemented features thoroughly
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left sm:text-center">
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Now that you understand how to request features, let&apos;s learn about building UI components.
            </p>
            <a 
              href="/guides/build/components"
              className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Building UI Components
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
