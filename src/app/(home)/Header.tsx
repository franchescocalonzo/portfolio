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
          <h1 className="animation-delay-500 mt-2 animate-blur overflow-visible text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
            <a href="/">Franchesco Calonzo </a>
          </h1>
        </div>
        <p className="animation-delay-500 max-w-sm animate-blur leading-6 text-slate-800">
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
                alt="CIS Bayad Center Inc. Logo"
              />
            </a>
            <a
              href="https://github.com/franchescocalonzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitIcon
                className="animation-delay-500 h-[23px] w-[23px] animate-blur text-slate-800"
                alt="CIS Bayad Center Inc. Logo"
              />
            </a>
            <a
              href="https://codepen.io/franchesco-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodePenIcon
                className="animation-delay-500 h-[23px] w-[23px] animate-blur text-slate-800"
                alt="CIS Bayad Center Inc. Logo"
              />
            </a>
          </div>
        </div>
      </div>
      <Image
        className="pointer-events-none mx-auto lg:w-[400px]"
        src="/avatars/me.webp"
        alt="Franchesco Calonzo"
        layout="responsive"
        width={400} // Base width
        height={400} // Base height
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.3) 90%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </header>
  );
}
