import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

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
      <Reveal>
        <SectionHeader title="Stack" />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="bg-portfolio-badge text-portfolio-secondary hover:bg-portfolio-hover hover:text-portfolio rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
