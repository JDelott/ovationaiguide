import React from 'react';

const products = [
  {
    title: "Free AI Development Guide",
    description: "Start your journey with our comprehensive guide to building modern applications with Cursor AI. Perfect for beginners and hobbyists.",
    price: "Free",
    tag: "Most Popular",
    features: [
      "Introduction to AI-powered coding",
      "Basic app architecture",
      "Navigation fundamentals",
      "Version control with AI",
      "Prompt writing techniques",
      "Real-world examples"
    ]
  },
  {
    title: "Complete AI Development Course",
    description: "Master AI-powered development with our comprehensive video course and ebook bundle. Build real projects step by step.",
    price: "$49",
    tag: "Best Value",
    features: [
      "Everything in the free guide",
      "6+ hours of video content",
      "Build 3 complete projects",
      "Advanced prompt engineering",
      "Component architecture",
      "Deployment strategies"
    ]
  },
  {
    title: "1:1 AI Development Coaching",
    description: "Get personalized guidance to accelerate your journey. Perfect for entrepreneurs and developers building serious projects.",
    price: "From $199",
    tag: "Premium",
    features: [
      "Personal learning roadmap",
      "Weekly coaching calls",
      "Code review sessions",
      "Project planning help",
      "Architecture review",
      "Launch strategy"
    ]
  }
];

export default function Products() {
  return (
    <section className="py-32 relative" aria-labelledby="products-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <span className="text-blue-400 text-sm font-medium">Learning Resources</span>
          </div>
          <h2 
            id="products-heading"
            className="text-4xl sm:text-5xl font-light tracking-tight mb-6 text-white"
          >
            Choose your path to
            <br />
            <span className="text-blue-400">AI development mastery</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Whether you&apos;re just starting out or building the next big thing, 
            we have the resources to help you succeed with AI-powered development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.title} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl -m-2 group-hover:bg-white/[0.07] transition-colors" />
              
              <div className="relative p-8">
                {/* Tag */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4">
                  {product.tag}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-medium text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-light text-white">
                    {product.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full py-4 bg-white text-black font-medium hover:bg-blue-400 transition-colors">
                  {product.price === "Free" ? "Download Now" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
