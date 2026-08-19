"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";
import { SectionReveal, SectionRevealItem } from "@/components/Reveal";

type Entry = {
  question: string;
  answer: React.ReactNode;
};

function Paragraphs({ children }: { children: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {children.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-portfolio-secondary font-normal tracking-[0.01em] italic">
      {children}
    </p>
  );
}

const entries: Entry[] = [
  {
    question: "How do I approach a new task?",
    answer: (
      <>
        <p>Most tickets I&apos;ve worked on already describe a solution:</p>
        <Quote>
          &ldquo;Add this button.&rdquo; &ldquo;Create a new page.&rdquo;
          &ldquo;Add a filter.&rdquo;
        </Quote>
        <p>Before thinking about implementation, I ask myself:</p>
        <Quote>
          &ldquo;What problem are we actually trying to solve?&rdquo;
        </Quote>
        <p>
          Sometimes, the right solution isn&apos;t to create or add something
          new, but to simply improve or extend what&apos;s already there.
        </p>
        <p>
          I&apos;ve learned that understanding the problem first leads to better
          engineering decisions.
        </p>
      </>
    ),
  },
  {
    question: "What do I think about before making changes?",
    answer: (
      <Paragraphs>
        {[
          "Before touching an existing system, I want to understand how everything fits together. I think about the purpose of the change, how it affects the rest of the product, what risks come with it, and what could happen once it reaches production.",
          "Writing the code is usually the straightforward part. Understanding the impact of that change is where most of the thinking happens.",
        ]}
      </Paragraphs>
    ),
  },
  {
    question: "How do I investigate production issues?",
    answer: (
      <Paragraphs>
        {[
          "Production issues aren't always straightforward to diagnose. A bug may only appear in a specific environment, after a particular sequence of actions, or under conditions that aren't immediately visible.",
          "Before fixing an issue, I prefer to reproduce it, understand what is actually happening, and gather enough context to identify the cause.",
          "My background in QA taught me that a reliable fix starts with understanding why the issue happened, not just making the symptom disappear.",
        ]}
      </Paragraphs>
    ),
  },
  {
    question: "How do I handle design as a developer?",
    answer: (
      <Paragraphs>
        {[
          "I treat frontend work as both implementation and design.",
          "When I build a feature, I think about more than making it work. I try to keep the experience simple and intuitive, without overcomplicating the interface, while keeping the code practical and maintainable.",
          "Working on teams without a dedicated designer pushed me to develop that judgment. I aim for interfaces that feel considered — usable, functional, and visually professional — without adding unnecessary complexity.",
        ]}
      </Paragraphs>
    ),
  },
  {
    question: "When do I improve existing code?",
    answer: (
      <Paragraphs>
        {[
          "When working on an existing system, I don't make refactoring a priority unless there's a reason to. If a new feature or bug fix takes me into that part of the code, that's when I look for things that can be simplified or made easier to maintain.",
          "I don't refactor just for the sake of it. But if I'm already there and a small change can make things easier for the next person or the next feature, I'll take the opportunity.",
        ]}
      </Paragraphs>
    ),
  },
];

function AccordionItem({
  entry,
  isOpen,
  onToggle,
  isLast,
}: {
  entry: Entry;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={isLast ? "" : "border-portfolio-card border-b"}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span
          className={`text-sm font-medium transition-colors duration-200 sm:text-base ${
            isOpen
              ? "text-portfolio"
              : "text-portfolio-muted group-hover:text-portfolio"
          }`}
        >
          {entry.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex shrink-0 items-center transition-colors duration-200 ${
            isOpen
              ? "text-portfolio"
              : "text-portfolio-subtle group-hover:text-portfolio"
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            aria-hidden
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-portfolio-muted flex flex-col gap-3 pb-5 text-xs leading-relaxed sm:text-sm">
              {entry.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BehindMyWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="behind-my-work" aria-label="Behind my work">
      <SectionReveal>
        <SectionRevealItem>
          <SectionHeader title="Behind My Work" />
        </SectionRevealItem>
        <SectionRevealItem>
          <div className="text-portfolio-muted mb-2 flex flex-col gap-3 text-sm leading-relaxed">
            <p>
              Every engineer writes code. <br />
              <span>These are the questions I ask before I write mine.</span>
            </p>
          </div>
        </SectionRevealItem>
        {entries.map((entry, index) => (
          <SectionRevealItem key={entry.question}>
            <AccordionItem
              entry={entry}
              isOpen={openIndex === index}
              isLast={index === entries.length - 1}
              onToggle={() =>
                setOpenIndex((prev) => (prev === index ? null : index))
              }
            />
          </SectionRevealItem>
        ))}
      </SectionReveal>
    </section>
  );
}
