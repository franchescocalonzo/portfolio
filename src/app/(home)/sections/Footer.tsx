export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-portfolio-card pb-6 pt-6 text-sm transition-colors">
      <p className="mb-2 text-[0.8rem] text-portfolio-muted">
        Designed in{" "}
        <a
          href="https://www.figma.com/"
          rel="noreferrer noopener"
          target="_blank"
          className="font-semibold text-portfolio-secondary transition-colors hover:text-portfolio"
        >
          Figma
        </a>
        , built with{" "}
        <a
          href="https://nextjs.org/"
          rel="noreferrer noopener"
          target="_blank"
          className="font-semibold text-portfolio-secondary transition-colors hover:text-portfolio"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          rel="noreferrer noopener"
          target="_blank"
          className="font-semibold text-portfolio-secondary transition-colors hover:text-portfolio"
        >
          Tailwind CSS
        </a>
        , deployed on{" "}
        <a
          href="https://vercel.com/"
          rel="noreferrer noopener"
          target="_blank"
          className="font-semibold text-portfolio-secondary transition-colors hover:text-portfolio"
        >
          Vercel
        </a>
        .
      </p>
      <p className="text-[0.8rem] text-portfolio-muted">
        © {currentYear} Franchesco Calonzo ·{" "}
        <a
          href="mailto:hello@franchesco.dev"
          className="font-semibold text-portfolio-secondary transition-colors hover:text-portfolio"
        >
          Get in touch
        </a>{" "}
        · Simplicity in every detail.
      </p>
    </footer>
  );
}
