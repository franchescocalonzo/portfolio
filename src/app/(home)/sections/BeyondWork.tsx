import SectionHeader from "@/components/SectionHeader";

const interests = [
  { emoji: "🚀", label: "PaReserve" },
  { emoji: "☕", label: "Specialty Coffee" },
  { emoji: "📚", label: "Continuous Learning" },
];

export default function BeyondWork() {
  return (
    <section id="beyond-work" aria-label="Beyond work">
      <SectionHeader title="Beyond Work" />
      <div className="rounded border border-portfolio-card bg-portfolio-card px-5 py-6 sm:px-6">
        <p className="text-sm font-medium text-portfolio">Outside of Work</p>
        <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-portfolio-muted">
          <p>
            I&apos;m naturally curious, and most of that curiosity eventually
            turns into projects.
          </p>
          <p>
            Outside of work, I&apos;m currently building PaReserve, exploring
            specialty coffee, and continuously learning about software
            engineering, product design, and AI. They may seem unrelated, but
            each one teaches me something I bring back into the way I build
            products.
          </p>
          <p>
            Whether I&apos;m improving a side project, refining an espresso
            workflow, or learning a new technology, I enjoy understanding how
            things work and making them a little better over time.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest.label}
              className="rounded-full bg-portfolio-badge px-3 py-1.5 text-xs font-medium text-portfolio-secondary"
            >
              <span aria-hidden>{interest.emoji}</span> {interest.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
