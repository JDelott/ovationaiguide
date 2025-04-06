import React from 'react';

const faqs = [
  {
    question: "What is Cursor AI?",
    answer: "Cursor AI is an intelligent code editor that combines the power of AI with traditional development tools. It helps developers write, understand, and debug code more efficiently."
  },
  {
    question: "Do I need coding experience to use Cursor?",
    answer: "While some basic programming knowledge is helpful, Cursor AI is designed to assist developers of all skill levels. Our guides help beginners get started effectively."
  },
  {
    question: "What's included in the coaching sessions?",
    answer: "Coaching sessions include personalized guidance, code review, project planning, and direct support to help you make the most of Cursor AI in your development workflow."
  },
  {
    question: "How is the ebook different from the video course?",
    answer: "The ebook provides comprehensive written documentation and examples, while the video course offers visual demonstrations and hands-on tutorials. Many developers find value in both formats."
  },
  {
    question: "Can I use Cursor AI for commercial projects?",
    answer: "Yes, Cursor AI can be used for both personal and commercial projects. Our guides cover best practices for professional development."
  }
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold mb-12">Frequently Asked Questions</h1>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-8">
            <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
