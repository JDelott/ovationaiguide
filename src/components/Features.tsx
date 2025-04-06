import React from 'react';

const features = [
  {
    title: "Learn Cursor AI Basics",
    description: "Master the fundamentals of AI-powered development with step-by-step guides.",
    icon: "📚"
  },
  {
    title: "Real-World Projects",
    description: "Follow along with practical examples and build production-ready applications.",
    icon: "🚀"
  },
  {
    title: "Prompt Engineering",
    description: "Learn how to write effective prompts to get the most out of Cursor AI.",
    icon: "💡"
  },
  {
    title: "Best Practices",
    description: "Discover proven patterns and workflows for efficient development.",
    icon: "✨"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Master Cursor AI
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
