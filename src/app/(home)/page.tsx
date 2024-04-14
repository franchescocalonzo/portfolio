export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="  h-screen lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex border-orange-500 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 border-2 ">
          <div>
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
        </header>
        <main className="border-2 border-purple-300"></main>
      </div>
    </div>
  );
}
