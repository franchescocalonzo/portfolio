"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.6;
const DISTANCE = 16;

// Used by RevealGroup/RevealItem (legacy row-level stagger, kept for backward compat).
const ROW_STAGGER = 0.08;

// Used by SectionReveal/SectionRevealItem (section-level stagger).
const SECTION_STAGGER = 0.1;

// Trigger as soon as ANY part of the element enters the viewport.
// No bottom margin — sections must actually enter view before animating.
const VIEWPORT = { once: true, amount: "some" as const };

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// ---------------------------------------------------------------------------
// Reveal — single element fade+slide, whileInView
// ---------------------------------------------------------------------------
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{
        duration: reduceMotion ? 0.2 : DURATION,
        ease: EASE_OUT,
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// RevealGroup / RevealItem — staggered row-level reveal inside a section.
// The GROUP detects viewport entry; ITEMs animate as staggered children.
// ---------------------------------------------------------------------------
export function RevealGroup({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : delay,
        staggerChildren: reduceMotion ? 0 : ROW_STAGGER,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: Omit<RevealProps, "delay">) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.2 : DURATION, ease: EASE_OUT },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// SectionReveal / SectionRevealItem — section-level orchestration.
//
// SectionReveal is the viewport trigger for the whole section.
// When ANY part of the section enters the viewport, it transitions from
// "hidden" → "visible", which cascades into all SectionRevealItems via
// Framer Motion's variant propagation + staggerChildren.
//
// Usage:
//   <SectionReveal>
//     <SectionRevealItem><SectionHeader /></SectionRevealItem>
//     <SectionRevealItem><rows /></SectionRevealItem>
//   </SectionReveal>
// ---------------------------------------------------------------------------
export function SectionReveal({ children, className }: Omit<RevealProps, "delay">) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : SECTION_STAGGER,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function SectionRevealItem({
  children,
  className,
}: Omit<RevealProps, "delay">) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.2 : DURATION, ease: EASE_OUT },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
