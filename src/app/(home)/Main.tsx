import About from "./sections/About";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

export default function Main() {
  return (
    <main className="min-h-screen flex-col lg:w-1/2">
      {/* Animated Navigation */}
      {/* <nav className="sticky top-[82px] mb-3.5 flex h-20 items-center">
        <div className="relative flex w-full">
          <div className="absolute -top-[97px] h-[155px] w-full bg-[#F9F9F9]">
            <div className="absolute -bottom-8 left-0 h-10 w-full bg-gradient-to-b from-[#F9F9F9] via-[#F9F9F9]/80 to-transparent"></div>
          </div>
          <Navigation />
        </div>
      </nav> */}

      <div className="flex min-h-screen flex-col">
        <div className="flex-grow">
          <About />
          <Experience />
        </div>

        <Footer />
      </div>
    </main>
  );
}
