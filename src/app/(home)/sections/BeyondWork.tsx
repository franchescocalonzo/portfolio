import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const interests = [
  { emoji: "🚀", label: "PaReserve" },
  { emoji: "☕", label: "Specialty Coffee" },
  { emoji: "📚", label: "Continuous Learning" },
];

export default function BeyondWork() {
  return (
    <section id="beyond-work" aria-label="Beyond work">
      <Reveal>
        <SectionHeader title="Beyond Work" />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="border-portfolio-card bg-portfolio-card rounded border px-5 py-6 sm:px-6">
          <p className="text-portfolio text-sm font-medium">Outside of Work</p>
          <div className="text-portfolio-muted mt-3 flex flex-col gap-3 text-sm leading-relaxed">
            <p>
              Outside of work, I like building things, trying new things, and
              learning whatever catches my interest.
            </p>
            <p>
              I&apos;m currently exploring an idea called PaReserve, a simple
              booking platform for small businesses in the Philippines. I&apos;m
              also getting more into specialty coffee — mostly trying different
              coffee spots around Bulacan, tasting what each shop does
              differently, and learning more about coffee along the way.
            </p>
            <p>
              Lately, I&apos;ve also been learning how to use AI better,
              especially understanding where it can actually be useful and how
              to write better prompts instead of just using it for everything.
            </p>
            <p>
              When I&apos;m not doing any of that, I&apos;m usually playing
              Dota, working out, or spending time with my family.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest.label}
                className="bg-portfolio-badge text-portfolio-secondary rounded-full px-3 py-1.5 text-xs font-medium"
              >
                <span aria-hidden>{interest.emoji}</span> {interest.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
