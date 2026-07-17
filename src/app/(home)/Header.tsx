import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import CodePenIcon from "@/assets/icons/codepen.svg";
import GitIcon from "@/assets/icons/git.svg";

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="mt-2 animate-blur overflow-visible text-3xl font-bold tracking-tight text-portfolio sm:text-4xl">
            <Link href="/">Franchesco Calonzo</Link>
          </h1>
          <p className="animate-blur text-sm font-medium text-portfolio-muted">
            Software Engineer · Philippines
          </p>
        </div>
        <p className="animate-blur leading-6 text-portfolio-muted">
          Software Engineer building and improving production web applications
          used by real businesses. I enjoy solving problems through software and
          contributing to products that people rely on every day.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@franchesco.dev"
            className="group inline-flex animate-blur items-center gap-1 text-sm font-medium text-portfolio-secondary transition-colors hover:text-portfolio"
          >
            Say hello
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <div className="h-3 w-px bg-portfolio-card-border" />
          <div className="flex gap-4 text-portfolio-secondary">
            <a
              href="https://www.linkedin.com/in/franchesco-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-portfolio"
            >
              <LinkedinIcon className="h-[23px] w-[23px] animate-blur" aria-hidden />
            </a>
            <a
              href="https://github.com/franchescocalonzo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="transition-colors hover:text-portfolio"
            >
              <GitIcon className="h-[23px] w-[23px] animate-blur" aria-hidden />
            </a>
            <a
              href="https://codepen.io/franchesco-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen profile"
              className="transition-colors hover:text-portfolio"
            >
              <CodePenIcon className="h-[23px] w-[23px] animate-blur" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-6 flex h-[320px] w-full max-w-[400px] items-end justify-center bg-portfolio pt-4 sm:h-[380px]">
        <Image
          className="pointer-events-none h-full w-full object-contain object-bottom"
          src="/avatars/me.webp"
          alt="Franchesco Calonzo"
          width={400}
          height={400}
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 35%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.6) 68%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.12) 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 35%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.6) 68%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0.12) 90%, transparent 100%)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center bottom",
            maskPosition: "center bottom",
          }}
        />
      </div>
    </header>
  );
}
