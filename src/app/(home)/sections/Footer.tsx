import { Reveal } from "@/components/Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Reveal>
      <footer className="border-portfolio-card mt-12 border-t pt-6 pb-6 text-sm transition-colors">
        <p className="text-portfolio-muted mb-2 text-[0.8rem]">
          Designed in{" "}
          <a
            href="https://www.figma.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="text-portfolio-secondary hover:text-portfolio font-semibold transition-colors"
          >
            Figma
          </a>
          , built with{" "}
          <a
            href="https://nextjs.org/"
            rel="noreferrer noopener"
            target="_blank"
            className="text-portfolio-secondary hover:text-portfolio font-semibold transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="text-portfolio-secondary hover:text-portfolio font-semibold transition-colors"
          >
            Tailwind CSS
          </a>
          , deployed on{" "}
          <a
            href="https://vercel.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="text-portfolio-secondary hover:text-portfolio font-semibold transition-colors"
          >
            Vercel
          </a>
          .
        </p>
        <p className="text-portfolio-muted text-[0.8rem]">
          © {currentYear} Franchesco Calonzo ·{" "}
          <a
            href="mailto:hello@franchesco.dev"
            className="text-portfolio-secondary hover:text-portfolio font-semibold transition-colors"
          >
            Get in touch
          </a>{" "}
          · Simplicity in every detail.
        </p>
      </footer>
    </Reveal>
  );
}
