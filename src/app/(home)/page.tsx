import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="  h-screen lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex border-blue-200 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-24 border-2 ">
          <div className="border-2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <a href="/">Franchesco Calonzo</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium  sm:text-xl ">
              Software Engineer at CIS Bayad Center
            </h2>
            <p className="mt-4 max-w-sm leading-normal">
              I build application and I design simple yet effective User
              Interface. Targeting JavaScipt React and other Web Development
              opportunities.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <img src="/avatars/me.webp" alt="Franchesco Calonzo" />
          </div>
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24  border-blue-200 border-2">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div>
              <p className="mb-4">
                Back in 2012, I decided to try my hand at creating custom Tumblr
                themes and tumbled head first into the rabbit hole of coding and
                web development. Fast-forward to today, and I’ve had the
                privilege of building software for an
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://us.mullenlowe.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="advertising agency (opens in a new tab)"
                >
                  advertising agency
                </a>
                , a
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://starry.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="start-up (opens in a new tab)"
                >
                  start-up
                </a>
                , a
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.apple.com/apple-music/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="huge corporation (opens in a new tab)"
                >
                  huge corporation
                </a>
                , and a
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://upstatement.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="digital product studio (opens in a new tab)"
                >
                  digital product studio
                </a>
                .
              </p>
              <p className="mb-4">
                My main focus these days is building accessible user interfaces
                for our customers at
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.klaviyo.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Klaviyo (opens in a new tab)"
                >
                  Klaviyo
                </a>
                . I most enjoy building software in the sweet spot where design
                and engineering meet — things that look good but are also built
                well under the hood. In my free time, I've also released an
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.newline.co/courses/build-a-spotify-connected-app"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="online video course (opens in a new tab)"
                >
                  online video course
                </a>
                that covers everything you need to know to build a web app with
                the Spotify API.
              </p>
              <p>
                When I’m not at the computer, I’m usually rock climbing,
                reading, hanging out with my wife and two cats, or running
                around Hyrule searching for .
              </p>
            </div>
          </section>
          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Loosely designed in
              <a
                href="https://www.figma.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Figma (opens in a new tab)"
              >
                Figma
              </a>
              and coded in
              <a
                href="https://code.visualstudio.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visual Studio Code (opens in a new tab)"
              >
                Visual Studio Code
              </a>
              by yours truly. Built with
              <a
                href="https://nextjs.org/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Next.js (opens in a new tab)"
              >
                Next.js
              </a>
              and
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Tailwind CSS (opens in a new tab)"
              >
                Tailwind CSS
              </a>
              , deployed with
              <a
                href="https://vercel.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Vercel (opens in a new tab)"
              >
                Vercel
              </a>
              . All text is set in the
              <a
                href="https://rsms.me/inter/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Inter (opens in a new tab)"
              >
                Inter
              </a>
              typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
