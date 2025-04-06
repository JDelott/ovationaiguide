import React from 'react';

const products = [
  {
    title: "Build with Cursor Ebook",
    description: "A comprehensive guide to building modern applications with Cursor AI.",
    price: "$20",
    features: [
      "Fundamentals of Cursor AI",
      "Step-by-step tutorials",
      "Best practices and tips",
      "Real-world examples"
    ]
  },
  {
    title: "Video Course",
    description: "Complete video course on Udemy teaching you everything about Cursor AI.",
    price: "$30",
    features: [
      "6+ hours of content",
      "Hands-on projects",
      "Lifetime access",
      "Project files included"
    ]
  },
  {
    title: "1-on-1 Coaching",
    description: "Personal mentoring sessions to accelerate your learning journey.",
    price: "Custom",
    features: [
      "Personalized guidance",
      "Code review",
      "Project planning",
      "Direct support"
    ]
  }
];

export default function Products() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Learning Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="text-2xl font-bold mb-4">{product.price}</div>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-black text-white py-2 rounded-full hover:bg-gray-800">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
