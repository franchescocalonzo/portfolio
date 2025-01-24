export default function Header() {
  return (
    <header className="overflow-hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-20">
      <div className="border-5 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="animation-delay-500 mt-2 animate-blur overflow-visible text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            <a href="/">Franchesco Calonzo </a>
          </h1>
          <h2 className="text-base font-medium tracking-tight text-slate-800 sm:text-lg">
            Software Engineer at CIS Bayad Center
          </h2>
        </div>

        <div className="">
          <div className="flex gap-4 text-slate-800">
            <img
              className="h-[23px] w-[23px] text-slate-800"
              src="/icons/linkedin.svg"
              alt="CIS Bayad Center Inc. Logo"
            />
            <img
              className="h-[23px] w-[23px]"
              src="/icons/git.svg"
              alt="CIS Bayad Center Inc. Logo"
            />
            <img
              className="h-[23px] w-[23px]"
              src="/icons/codepen.svg"
              alt="CIS Bayad Center Inc. Logo"
            />
          </div>
        </div>

        <p className="animation-delay-500 max-w-sm animate-blur leading-6 text-slate-800">
          I build application and I design simple yet effective User Interface.
          Targeting JavaScipt React and other Web Development opportunities.
        </p>
      </div>

      <img
        className="pointer-events-none mx-auto lg:w-[400px]"
        src="/avatars/me.webp"
        alt="Franchesco Calonzo"
      />
    </header>
  );
}
