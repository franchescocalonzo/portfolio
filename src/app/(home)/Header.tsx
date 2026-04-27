import Image from "next/image";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import CodePenIcon from "@/assets/icons/codepen.svg";
import GitIcon from "@/assets/icons/git.svg";
// Import as React Component

export default function Header() {
  return (
    <header className="overflow-hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-10">
      <div className="border-5 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="animation-delay-500 mt-2 animate-blur overflow-visible text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            <a href="/">Franchesco Calonzo </a>
          </h1>
        </div>
        <p className="animation-delay-500 max-w-sm animate-blur leading-6 text-slate-600">
          I build seamless web experiences and am excited to continue deepening
          my expertise in frontend development.
        </p>
        <div className="">
          <div className="flex gap-4 text-slate-800">
            <a
              href="https://www.linkedin.com/in/franchesco-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon
                className="animation-delay-500 h-[23px] w-[23px] animate-blur text-slate-800"
                aria-hidden
              />
            </a>
            <a
              href="https://github.com/franchescocalonzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitIcon
                className="animation-delay-500 h-[23px] w-[23px] animate-blur text-slate-800"
                aria-hidden
              />
            </a>
            <a
              href="https://codepen.io/franchesco-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodePenIcon
                className="animation-delay-500 h-[23px] w-[23px] animate-blur text-slate-800"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[400px] flex-1 min-h-0 flex items-end justify-center pt-4 bg-white">
        <Image
          className="pointer-events-none object-contain object-bottom w-full h-full"
          src="/avatars/me.webp"
          alt="Franchesco Calonzo"
          width={400}
          height={400}
          style={{
            // Long, smooth fade so no visible line at the bottom (works all screen sizes)
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
