import { SectionReveal, SectionRevealItem } from "@/components/Reveal";

const tools = [
  { label: "Figma", href: "https://www.figma.com/" },
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { label: "Vercel", href: "https://vercel.com/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <SectionReveal>
      <SectionRevealItem>
      <footer className="border-portfolio-card mt-12 border-t pt-6 pb-6 transition-colors">
        <div className="flex flex-col gap-1.5 text-left">
            <p className="text-portfolio-muted text-[0.75rem] leading-relaxed">
              Designed in{" "}
              <a href={tools[0].href} rel="noreferrer noopener" target="_blank" className="link-sheen font-medium">
                {tools[0].label}
              </a>
              , built with{" "}
              <a href={tools[1].href} rel="noreferrer noopener" target="_blank" className="link-sheen font-medium">
                {tools[1].label}
              </a>{" "}
              and{" "}
              <a href={tools[2].href} rel="noreferrer noopener" target="_blank" className="link-sheen font-medium">
                {tools[2].label}
              </a>
              , deployed on{" "}
              <a href={tools[3].href} rel="noreferrer noopener" target="_blank" className="link-sheen font-medium">
                {tools[3].label}
              </a>
              .
            </p>
            <p className="text-portfolio-muted text-[0.75rem]">
              © {currentYear} Franchesco Calonzo ·{" "}
              <a href="mailto:franchesco.dev@gmail.com" className="link-sheen font-medium">
                franchesco.dev@gmail.com
              </a>
            </p>
        </div>
      </footer>
      </SectionRevealItem>
    </SectionReveal>
  );
}
