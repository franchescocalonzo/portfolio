import SectionHeader from "@/components/SectionHeader";
import { SectionReveal, SectionRevealItem } from "@/components/Reveal";

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
      <SectionReveal>
        <SectionRevealItem>
          <SectionHeader title="Stack" />
        </SectionRevealItem>
        <SectionRevealItem>
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
        </SectionRevealItem>
      </SectionReveal>
    </section>
  );
}
