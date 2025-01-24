import Navigation from "@/components/Navigation";
import ChallengeIcon from "@/assets/icons/puzzle.svg";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Card from "@/components/Card";

export default function Main() {
  return (
    <main className="flex-col border pt-24 lg:w-1/2 lg:py-20">
      <nav className="sticky top-[82px] mb-3.5 flex h-20 items-center">
        <div className="relative flex w-full">
          <div className="absolute -top-[97px] h-[155px] w-full bg-[#F9F9F9]">
            {/* Bottom Gradient */}
            <div className="absolute -bottom-8 left-0 h-10 w-full bg-gradient-to-b from-[#F9F9F9] via-[#F9F9F9]/80 to-transparent"></div>
          </div>
          <Navigation />
        </div>
      </nav>
      <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-20">
        <About />
        <Card />
        <Footer />
      </div>
    </main>
  );
}
