"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import ThemeToggle from "@/components/ThemeToggle";
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

const RESUME = "/resume.pdf";

export default function HomeContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const resumeTriggerRef = useRef<HTMLDivElement>(null);
  const [introReady, setIntroReady] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [hasReachedResumeTrigger, setHasReachedResumeTrigger] = useState(false);
  const [titleAnchored, setTitleAnchored] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroReady(true), []);
  const handleTitleAnchor = useCallback(() => setTitleAnchored(true), []);
  const showResumeUtility =
    introReady && hasReachedResumeTrigger && !isHeroVisible;

  useEffect(() => {
    if (!introReady) {
      setIsHeroVisible(true);
      return;
    }

    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setIsHeroVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasReachedResumeTrigger(false);
        }
      },
      { threshold: 0.04 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [introReady]);

  useEffect(() => {
    if (!introReady) return;

    const trigger = resumeTriggerRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasReachedResumeTrigger(true);
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.12 },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [introReady]);

  return (
    <IntroRevealProvider ready={introReady}>
      <motion.div
        initial={false}
        animate={introReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.65, delay: 0.42, ease: "easeOut" }}
      >
        <ThemeToggle />
      </motion.div>
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
          <div ref={heroRef}>
            <HeroExplorer
              onIntroComplete={handleIntroComplete}
              onTitleAnchor={handleTitleAnchor}
            />
          </div>
          {/* <About /> */}
          {/* <Experience /> */}
          <div className="mt-8 flex flex-col gap-8">
            <RevealAfterIntro delay={0.42}>
              <Products />
            </RevealAfterIntro>
            <div ref={resumeTriggerRef}>
              <RevealAfterIntro delay={0.54}>
                <BehindMyWork />
              </RevealAfterIntro>
            </div>
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
      <FloatingResumeUtility visible={showResumeUtility} />
    </IntroRevealProvider>
  );
}

function FloatingResumeUtility({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={`fixed bottom-[max(20px,calc(env(safe-area-inset-bottom,0px)+16px))] right-[calc(env(safe-area-inset-right,0px)+1rem)] z-50 md:bottom-[calc(env(safe-area-inset-bottom,0px)+1.25rem)] md:right-[calc(env(safe-area-inset-right,0px)+1.25rem)] ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <a
        href={RESUME}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Résumé"
        tabIndex={visible ? 0 : -1}
        className="group inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-[rgb(252_251_248/0.68)] px-4 py-2.5 text-sm font-medium text-portfolio-secondary opacity-90 shadow-[0_16px_44px_rgb(24_24_24/0.14)] backdrop-blur-xl transition-[background-color,opacity] duration-200 ease-out dark:border-white/10 dark:bg-[rgb(27_27_27/0.66)] dark:shadow-[0_16px_44px_rgb(0_0_0/0.3)] md:border-portfolio md:bg-[rgb(252_251_248/0.82)] md:shadow-[0_10px_30px_rgb(24_24_24/0.08)] md:backdrop-blur-md md:hover:bg-[rgb(241_239_232/0.92)] md:hover:opacity-100 dark:md:bg-[rgb(27_27_27/0.78)] dark:md:hover:bg-[rgb(20_20_20/0.9)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current"
      >
        <span className="hidden sm:inline">View Résumé</span>
        <span className="sm:hidden">Résumé</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-out md:group-hover:translate-x-0.5"
        >
          ↗
        </span>
      </a>
    </motion.div>
  );
}
