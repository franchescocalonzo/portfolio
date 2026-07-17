"use client";

import { createContext, useContext } from "react";
import { motion } from "framer-motion";

const IntroRevealContext = createContext(false);

export function IntroRevealProvider({
  ready,
  children,
}: {
  ready: boolean;
  children: React.ReactNode;
}) {
  return (
    <IntroRevealContext.Provider value={ready}>
      {children}
    </IntroRevealContext.Provider>
  );
}

export function useIntroReveal() {
  return useContext(IntroRevealContext);
}

export function RevealAfterIntro({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ready = useIntroReveal();

  return (
    <motion.div
      initial={false}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      aria-hidden={!ready}
    >
      {children}
    </motion.div>
  );
}
