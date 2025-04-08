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
  }
];

export default function ResourcesSection() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-6">
            <span className="text-blue-400 text-sm font-medium">Free Resource</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-white">
            Start learning today with our
            <br />
            <span className="text-blue-400">Getting Started Guide</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Download our comprehensive guide and start building real applications 
            with AI-powered development tools.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.path}
              download={resource.filename}
              className="group block relative bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10 text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-colors">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-blue-400 transition-colors mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-400">
                    <span className="group-hover:underline">Download PDF Guide</span>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
