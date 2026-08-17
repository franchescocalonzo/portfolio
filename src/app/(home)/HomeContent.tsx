"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";

// import Header from "./Header";
import HeroExplorer from "./heroes/HeroExplorer";
import {
  IntroRevealProvider,
  RevealAfterIntro,
} from "./IntroRevealContext";
// import About from "./sections/About";
// import Experience from "./sections/Experience";
import Products from "./sections/Products";
import BehindMyWork from "./sections/BehindMyWork";
import BeyondWork from "./sections/BeyondWork";
import Stack from "./sections/Stack";
import Footer from "./sections/Footer";

export default function HomeContent() {
  const [introReady, setIntroReady] = useState(true);
  const [titleAnchored, setTitleAnchored] = useState(true);
  const handleIntroComplete = useCallback(() => setIntroReady(true), []);
  const handleTitleAnchor = useCallback(() => setTitleAnchored(true), []);

  return (
    <IntroRevealProvider ready={introReady}>
      <motion.div
        className="min-h-screen bg-portfolio"
        initial={false}
        animate={{
          backgroundColor: titleAnchored ? "rgba(22, 22, 22, 0)" : "#161616",
        }}
        transition={{ duration: 0.95, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-xl px-4 py-8 font-sans sm:px-6 sm:py-10">
          {/* <Header /> */}
          <HeroExplorer
            onIntroComplete={handleIntroComplete}
            onTitleAnchor={handleTitleAnchor}
          />
          {/* <About /> */}
          {/* <Experience /> */}
          <div className="mt-8 flex flex-col gap-8">
            <RevealAfterIntro delay={0.42}>
              <Products />
            </RevealAfterIntro>
            <RevealAfterIntro delay={0.54}>
              <BehindMyWork />
            </RevealAfterIntro>
            <RevealAfterIntro delay={0.62}>
              <BeyondWork />
            </RevealAfterIntro>
            <RevealAfterIntro delay={0.7}>
              <Stack />
            </RevealAfterIntro>
          </div>
          <RevealAfterIntro delay={0.78}>
            <Footer />
          </RevealAfterIntro>
        </div>
      </motion.div>
    </IntroRevealProvider>
  );
}
