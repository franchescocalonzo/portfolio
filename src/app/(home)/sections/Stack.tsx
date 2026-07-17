import SectionHeader from "@/components/SectionHeader";

// Sample stack — replace with your actual technologies
const stack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Docker",
  "Git",
  "Figma",
];

export default function Stack() {
  return (
    <section id="stack" aria-label="Tech stack">
      <SectionHeader title="Stack" />
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-portfolio-badge px-3 py-1.5 text-xs font-medium text-portfolio-secondary transition-colors hover:bg-portfolio-hover hover:text-portfolio"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
