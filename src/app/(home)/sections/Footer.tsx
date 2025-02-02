export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max-w-md bg-white pb-2 text-sm text-slate-800">
      <p className="my-2 text-[0.8rem] text-slate-500">
        Designed with intention and creativity in{" "}
        <a
          href="https://www.figma.com/"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Go to Figma official website"
          className="font-semibold text-slate-600"
        >
          Figma
        </a>
        , and thoughtfully brought to life in{" "}
        <a
          href="https://code.visualstudio.com/"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Go to Visual Studio Code official website"
          className="font-semibold text-slate-600"
        >
          Visual Studio Code
        </a>
        .
      </p>
      <p className="mb-2 text-[0.8rem] text-slate-500">
        Powered by{" "}
        <a
          href="https://nextjs.org/"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Go to Visual Studio Code official website"
          className="font-semibold text-slate-600"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Go to  Tailwind CSS official website"
          className="font-semibold text-slate-600"
        >
          Tailwind CSS
        </a>
        , and gracefully deployed with{" "}
        <a
          href="https://vercel.com/"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Go to Vercel official website"
          className="font-semibold text-slate-600"
        >
          Vercel
        </a>
        .
      </p>
      <p className="mb-2 text-[0.8rem] text-slate-500">
        Artfully crafted by Franchesco Calonzo © {currentYear}
      </p>
      <p className="text-[0.8rem] text-slate-500">
        Simplicity in every detail.
      </p>
    </footer>
  );
}
