export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 max-w-md text-sm text-slate-800 sm:pb-0">
      <p className="my-2 text-slate-800">
        Designed with intention and creativity in Figma, and thoughtfully
        brought to life in Visual Studio Code.
      </p>
      <p>
        Powered by Next.js and Tailwind CSS, and gracefully deployed with
        Vercel.
      </p>
      <p className="mb-2 text-slate-800">
        Artfully crafted by Franchesco Calonzo © {currentYear}
      </p>
      <p className="text-slate-800">Simplicity in every detail.</p>
    </footer>
  );
}
