"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";

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

const entries: Entry[] = [
  {
    question: "How do I approach a new task?",
    answer: (
      <>
        <p>
          Most tickets I&apos;ve worked on throughout my career already
          describe a solution.
        </p>
        <p className="text-portfolio-secondary">
          &ldquo;Add this button.&rdquo; &ldquo;Create a new page.&rdquo;
          &ldquo;Add a filter.&rdquo; &ldquo;Implement this feature.&rdquo;
        </p>
        <p>
          Before I think about implementation, I usually ask myself one
          question:
        </p>
        <p className="text-portfolio-secondary">
          &ldquo;What problem are we actually trying to solve?&rdquo;
        </p>
        <p>
          That answer is often missing. A ticket usually explains what needs to
          be built, but not why the request exists in the first place.
        </p>
        <p>
          Once I understand the context, I can think beyond the ticket itself.
          Sometimes the proposed solution is exactly what&apos;s needed. Other
          times, there&apos;s a simpler approach that solves the same problem
          with less complexity.
        </p>
        <p>
          I&apos;ve learned that understanding the problem first almost always
          leads to better engineering decisions.
        </p>
      </>
    ),
  },
  {
    question: "What do I think about before making changes?",
    answer: (
      <Paragraphs>
        {[
          "Before touching an existing system, I want to understand how everything fits together.",
          "I think about the purpose of the feature, how it affects the rest of the product, what risks come with the change, and what could happen once it reaches production.",
          "Writing the code is usually the straightforward part.",
          "Understanding the impact of that change is where most of the thinking happens.",
        ]}
      </Paragraphs>
    ),
  },
  {
    question: "How do I investigate production issues?",
    answer: (
      <Paragraphs>
        {[
          "Not every production issue has an obvious cause.",
          "Some bugs only happen in a specific environment, after a particular sequence of actions, or under conditions that aren't immediately visible.",
          "Instead of jumping straight to a solution, I prefer reproducing the issue, gathering context, and following the evidence first.",
          "My background in QA taught me that understanding why something happened is just as important as fixing it.",
        ]}
      </Paragraphs>
    ),
  },
  {
    question: "How do I approach frontend development?",
    answer: (
      <Paragraphs>
        {[
          "Not every company I've worked with had dedicated UI or UX designers, so I learned to think beyond implementation.",
          "When building a feature, I don't only think about how it works—I also think about how people will use it and how easy it will be to maintain.",
          "There are many ways to build the same interface, but I try to find the balance between usability, technical feasibility, and long-term maintainability.",
          "Good frontend engineering isn't only about implementing designs. It's about making practical product decisions that benefit both users and the engineering team.",
        ]}
      </Paragraphs>
    ),
  },
  {
    question: "When do I improve existing code?",
    answer: (
      <Paragraphs>
        {[
          "I don't believe existing code should be rewritten just because there's a newer or cleaner way to do it.",
          "If something is stable and continues to solve the problem, I prefer respecting the work that's already there.",
          "But if I'm already working in that part of the system and there's a clear opportunity to simplify it, I'll usually take it.",
          "I don't mind spending a little more time if it makes the next change easier to build.",
        ]}
      </Paragraphs>
    ),
  },
  {
    question: "What kind of engineer am I trying to become?",
    answer: (
      <>
        <p>
          The technologies I use will continue to change throughout my career.
        </p>
        <p>What I don&apos;t think will change is how I approach problems.</p>
        <p className="text-portfolio-secondary">
          Understand them first.
          <span className="block" />
          Keep the solution as simple as possible.
          <span className="block" />
          Leave the product a little better than I found it.
        </p>
        <p>That&apos;s the kind of engineer I continue trying to become.</p>
      </>
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
    <div className={isLast ? "" : "border-b border-portfolio-card"}>
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
            <div className="flex flex-col gap-3 pb-5 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
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
      <SectionHeader title="Behind My Work" />
      <div className="mb-2 flex flex-col gap-3 text-sm leading-relaxed text-portfolio-muted">
        <p>
          Every engineer writes code.{" "} <br />
          <span >
            These are the questions I ask before I write mine.
          </span>
        </p>
      </div>
      <div className="flex flex-col">
        {entries.map((entry, index) => (
          <AccordionItem
            key={entry.question}
            entry={entry}
            isOpen={openIndex === index}
            isLast={index === entries.length - 1}
            onToggle={() =>
              setOpenIndex((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </div>
    </section>
  );
}
