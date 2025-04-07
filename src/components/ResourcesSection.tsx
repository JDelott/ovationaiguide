import React from 'react';

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of AI-powered development with Cursor. Perfect for beginners starting their journey with AI-assisted coding.",
    path: "/guides/pdfs/getting-started.pdf",
    filename: "cursor-ai-getting-started-guide.pdf",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Prompt Engineering Guide",
    description: "Master the art of writing effective AI prompts. Learn proven techniques to communicate with AI and generate exactly what you need.",
    path: "/guides/pdfs/prompt-engineering.pdf",
    filename: "cursor-ai-prompt-engineering-guide.pdf",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Real Projects Workbook",
    description: "Step-by-step guide to building complete applications. Follow along as we build real-world projects using AI-powered development.",
    path: "/guides/pdfs/real-projects.pdf",
    filename: "cursor-ai-real-projects-workbook.pdf",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

export default function ResourcesSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">Free Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-white">
            Start learning today with our
            <br />
            <span className="text-blue-400">free development guides</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Download our comprehensive guides and start building real applications 
            with AI-powered development tools.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {resources.map((resource, index) => (
            <a
              key={resource.title}
              href={resource.path}
              download={resource.filename}
              className="group block relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Icon & Title */}
                <div className="lg:col-span-5 flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10 text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-colors">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">
                      {resource.title}
                    </h3>
                    <div className="mt-2 flex items-center text-sm text-blue-400">
                      <span className="group-hover:underline">Download PDF</span>
                      <svg 
                        className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Column - Description */}
                <div className="lg:col-span-7">
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < resources.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mt-12 sm:mt-16" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
