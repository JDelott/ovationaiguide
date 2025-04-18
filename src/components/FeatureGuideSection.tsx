import React from 'react';

export default function FeatureGuideSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {/* Prompt Engineering Fundamentals */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Prompt Engineering Fundamentals</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                When requesting new features from Cursor AI, structure your prompts using this framework:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Context: Describe the current state and purpose of your application
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Objective: Clearly state what you want to achieve
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Requirements: List specific functionality needed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Constraints: Mention any technical or design limitations
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
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Landing Page Feature</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Context:
                  Building a SaaS product landing page that needs to convert visitors.

                  Objective:
                  Create a hero section that captures attention and drives sign-ups.

                  Requirements:
                  - Headline and subheadline highlighting key benefits
                  - Email capture form with validation
                  - Social proof indicators (user count, testimonials)
                  - Responsive design for all devices
                  
                  Constraints:
                  - Must match our blue/white color scheme
                  - Should load quickly and be accessible
                  - Need to integrate with existing navigation&rdquo;
                </div>
              </div>
              
              <div>
                <h4 className="text-sm sm:text-base text-blue-400 mb-2">Authentication Feature</h4>
                <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                  &ldquo;Context:
                  Need to add user authentication to our Next.js application.

                  Objective:
                  Implement secure login/signup flow with social providers.

                  Requirements:
                  - Email/password authentication
                  - Google and GitHub OAuth options
                  - Password reset functionality
                  - Remember me option
                  
                  Constraints:
                  - Must use NextAuth.js
                  - Need proper error handling
                  - Should follow accessibility guidelines&rdquo;
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
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Start with high-level features, then drill down into specifics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Break complex features into smaller, manageable chunks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Use existing components as reference points for consistency
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Consider edge cases and error states in your requirements
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Iterative Development */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Iterative Development</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-400">
                After getting initial code, refine your feature through iterations:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Review and test the generated code
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Ask for specific adjustments: &ldquo;Can we improve the form validation UX?&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Request optimizations: &ldquo;Let&apos;s add loading states and error handling&rdquo;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Polish the implementation: &ldquo;Add animations and improve mobile responsiveness&rdquo;
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
