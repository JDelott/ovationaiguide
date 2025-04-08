import React from 'react';

export default function FormsApiGuideSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          

          {/* File Structure Setup */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Setting Up Your Files</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                First, create these files in your project:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Form Component: <code className="text-blue-400">src/components/ContactForm.tsx</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    API Route: <code className="text-blue-400">src/app/api/contact/route.ts</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Types: <code className="text-blue-400">src/types/forms.ts</code>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Required Dependencies */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Using Next.js Server Actions</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Next.js 14 includes everything we need for forms! No extra packages required:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Built-in form validation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Server Actions for form handling
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Automatic error handling
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step-by-Step Creation */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Creating Your Form</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Follow these exact steps:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Create file: <code className="text-blue-400">src/app/actions/contact.ts</code> for the server action
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Create file: <code className="text-blue-400">src/components/ContactForm.tsx</code> for the form UI
                  </span>
                </li>
              </ul>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                &ldquo;Create a contact form using Next.js Server Actions with:
                - Form component with email and message fields
                - Server action for form processing
                - Built-in form validation
                - Loading states with useFormStatus
                - Success/error messages
                - Tailwind styling&rdquo;
              </div>
            </div>
          </div>

          {/* Server Actions */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Setting Up Server Actions</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Create your server action:
              </p>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                &ldquo;Create a server action that:
                - Uses &apos;use server&apos; directive
                - Validates form data
                - Processes form submission
                - Returns success/error messages
                - Includes proper TypeScript types&rdquo;
              </div>
            </div>
          </div>

          {/* API Route Creation */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Setting Up the API Route</h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400">
                Create your API endpoint:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Create folders: <code className="text-blue-400">src/app/api/contact/</code>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Create file: <code className="text-blue-400">route.ts</code> inside the contact folder
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Use this prompt to generate the API code:
                  </span>
                </li>
              </ul>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                &ldquo;Create a Next.js API route that:
                - Handles POST requests
                - Validates incoming data with zod
                - Returns proper status codes
                - Includes error handling
                - Logs form submissions&rdquo;
              </div>
            </div>
          </div>

          {/* Testing Your Form */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Testing the Integration</h3>
            <div className="space-y-4 sm:space-y-6">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Open your browser&apos;s developer tools (<code className="text-blue-400">F12</code>)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Go to the Network tab to monitor API calls
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Submit the form and check for successful response
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Verify validation errors appear correctly
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* File Structure Visualization - Moved to bottom */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">Project Structure Overview</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="font-mono text-sm sm:text-base">
                <pre className="bg-black/30 p-3 sm:p-4 rounded-lg text-gray-300 overflow-x-auto">
                  <code>{`📁 src/
├── 📁 app/
│   ├── 📁 api/                    # API Routes Directory
│   │   └── 📁 contact/           
│   │       └── 📄 route.ts       # POST /api/contact - Handles form submissions
│   │
│   └── 📁 actions/               # Server Actions Directory
│       └── 📄 contact.ts         # 'use server' - Form processing logic
│
├── 📁 components/
│   └── 📄 ContactForm.tsx        # React component with form UI and client logic
│
└── 📁 types/                     # Type Definitions
    └── 📄 forms.ts               # Contact form type interfaces`}</code>
                </pre>
              </div>
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-gray-300">
                <h4 className="text-blue-400 mb-2">Key Responsibilities:</h4>
                <pre><code>{`// src/app/actions/contact.ts
async function submitContact(data: FormData) {
  'use server'
  // Handles form validation
  // Processes submission
  // Returns response
}

// src/components/ContactForm.tsx
export default function ContactForm() {
  // Form UI components
  // Loading states
  // Success/error messages
  // Client-side validation
}

// src/types/forms.ts
interface ContactForm {
  email: string
  message: string
  // ... other fields
}`}</code></pre>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left sm:text-center">
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Now that you understand forms and APIs, let&apos;s learn about debugging your application.
            </p>
            <a 
              href="/guides/debug/basics"
              className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
            >
              Continue to Error Resolution with Cursor
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
