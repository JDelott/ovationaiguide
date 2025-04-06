import React from 'react';

const features = [
  {
    number: "01",
    title: "Free AI Development Guide",
    description: "Master the fundamentals of AI-powered development. Learn app architecture, navigation, and version control basics — perfect for complete beginners.",
    tag: "Free",
    details: [
      "Introduction to AI-powered coding",
      "Basic app architecture",
      "Navigation fundamentals",
      "Version control with AI"
    ]
  },
  {
    number: "02",
    title: "Prompt Engineering Mastery",
    description: "Learn to write effective prompts that actually build what you want. From UI components to authentication systems, master the art of AI communication.",
    tag: "Free",
    details: [
      "Prompt writing techniques",
      "Real-world examples",
      "Component generation",
      "System integration"
    ]
  },
  {
    number: "03",
    title: "Real-World Projects",
    description: "Build complete applications with step-by-step guidance. Perfect for aspiring developers, designers, and founders building MVPs with minimal budget.",
    tag: "Premium",
    details: [
      "Todo app with authentication",
      "AI blog generator",
      "Custom dashboard",
      "Full-stack deployment"
    ]
  },
  {
    number: "04",
    title: "1:1 Expert Coaching",
    description: "Get personalized guidance to accelerate your journey. Includes code reviews, pair programming sessions, and direct support for your specific projects.",
    tag: "Premium",
    details: [
      "Personalized learning path",
      "Code review sessions",
      "Project planning",
      "Launch strategy"
    ]
  }
];

export default function Features() {
  return (
    <section className="py-32 relative" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <span className="text-blue-400 text-sm font-medium">Learning Journey</span>
          </div>
          <h2 
            id="features-heading"
            className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-white"
          >
            From idea to deployed app
            <br />
            <span className="text-blue-400">with AI-powered development</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Whether you&apos;re a complete beginner or just curious about using AI to speed up your workflow, 
            we&apos;ll help you go from &quot;I have an idea&quot; to &quot;I just built that.&quot;
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative"
            >
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* Left Column */}
                <div className="col-span-12 md:col-span-5 lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono text-sm text-blue-400">
                        {feature.number}
                      </span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        feature.tag === 'Free' 
                          ? 'bg-green-500/10 text-green-400' 
                          : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-medium text-white group-hover:text-blue-400 transition-colors mb-4">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.details.map((detail, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/5 mt-24" />
            </div>
          ))}
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-12 gap-6 opacity-[0.02] pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full w-full border-l border-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
