"use client";

// import Header from "./Header";
import HeroExplorer from "./heroes/HeroExplorer";
// import About from "./sections/About";
// import Experience from "./sections/Experience";
import Products from "./sections/Products";
import BehindMyWork from "./sections/BehindMyWork";
import BeyondWork from "./sections/BeyondWork";
import Stack from "./sections/Stack";
import Footer from "./sections/Footer";

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-portfolio">
      <div className="mx-auto max-w-xl px-4 py-8 font-sans sm:px-6 sm:py-10">
        {/* <Header /> */}
        <HeroExplorer />
        {/* <About /> */}
        {/* <Experience /> */}
        <div className="mt-8 flex flex-col gap-8">
          <Products />
          <BehindMyWork />
          <BeyondWork />
          <Stack />
        </div>
        <Footer />
      </div>
    </div>
  );
}
