const LEARNING_SECTIONS = [
  {
    title: "Getting Started with Cursor",
    sections: [
      { title: "What is Cursor AI?", slug: "introduction" },
      { title: "Installation Guide", slug: "installation" },
      { title: "Interface Overview", slug: "interface" },
    ]
  },
  {
    title: "Basic Concepts",
    sections: [
      { title: "Understanding the AI Assistant", slug: "ai-assistant" },
      { title: "Navigation and Shortcuts", slug: "navigation" },
      { title: "Version Control Integration", slug: "git-basics" },
    ]
  },
  {
    title: "Prompt Engineering",
    sections: [
      { title: "Writing Effective Prompts", slug: "prompt-basics" },
      { title: "Common Patterns", slug: "prompt-patterns" },
      { title: "Real-world Examples", slug: "examples" },
    ]
  }
];

export default function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Learn Cursor AI</h1>
      <div className="space-y-12">
        {LEARNING_SECTIONS.map((section) => (
          <div key={section.title} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.sections.map((subsection) => (
                <li key={subsection.slug}>
                  <a href={`/learn/${subsection.slug}`} 
                     className="text-blue-600 hover:underline">
                    {subsection.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 
