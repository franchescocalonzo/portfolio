"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";

type Product = {
  company: string;
  tagline: string;
  period: string;
  product: string;
  whyItMatters: string;
  contribution: string[];
  learned: string;
  technology: string[];
};

// Sample content — replace with your real details
const products: Product[] = [
  {
    company: "Bell Canada",
    tagline: "Supporting nationwide telecom infrastructure.",
    period: "2025 — Present",
    product:
      "IQGeo provides geospatial network management software that helps telecom teams plan, design, and maintain fiber infrastructure across Canada.",
    whyItMatters:
      "Reliable network records keep field crews, planners, and operations aligned — reducing costly site revisits and speeding up nationwide fiber rollout.",
    contribution: [
      "Build and maintain internal tools on top of the IQGeo platform",
      "Develop UI features used by network planners day-to-day",
      "Collaborate with cross-functional teams across time zones",
    ],
    learned:
      "Working within a large, long-lived codebase taught me to value incremental change, careful reviews, and clear communication over clever code.",
    technology: ["React", "TypeScript", "Python", "Ant Design"],
  },
  {
    company: "CIS Bayad Center Inc.",
    tagline: "Nationwide bill payment platform.",
    period: "2023 — 2025",
    product:
      "Bayad Web enables millions of Filipinos to pay utilities, government fees, and loans through a single web platform.",
    whyItMatters:
      "For many users this is the primary way to settle essential bills — uptime and correctness directly affect households nationwide.",
    contribution: [
      "Developed and maintained core payment flows",
      "Optimized performance with cloud technologies",
      "Worked closely with QA and product to ship reliably",
    ],
    learned:
      "Payments taught me discipline: idempotency, auditability, and how to think about failure modes before they happen.",
    technology: ["Next.js", "Node.js", "AWS", "MySQL"],
  },
  {
    company: "Moneygment",
    tagline: "Fintech dashboard for contributions and loans.",
    period: "2019 — 2023",
    product:
      "A modern operations dashboard replacing a legacy system — handling contributions, loan processing, and automated reporting.",
    whyItMatters:
      "The legacy system slowed daily operations; the new dashboard cut manual work and gave the team real-time visibility.",
    contribution: [
      "Built the frontend from the ground up",
      "Designed and administered the database",
      "Implemented secure authentication and reporting APIs",
    ],
    learned:
      "Owning both frontend and database taught me how data modeling decisions ripple all the way up to the UI.",
    technology: ["React", "JavaScript", "MySQL", "PHP"],
  },
  {
    company: "Cormant Technologies",
    tagline: "DCIM software for data center management.",
    period: "2018",
    product:
      "Cormant-CS is a data center infrastructure management platform tracking assets, connectivity, and capacity.",
    whyItMatters:
      "Accurate infrastructure records prevent outages and make capacity planning possible for large facilities.",
    contribution: [
      "Executed test plans across web and mobile clients",
      "Documented and reproduced defects for the dev team",
      "Participated in release regression cycles",
    ],
    learned:
      "QA gave me a tester's eye I still use as an engineer — thinking in edge cases and validating assumptions early.",
    technology: ["TestRail", "SQL", "Jira"],
  },
];

function TechList({ items }: { items: string[] }) {
  return (
    <p className="text-xs leading-relaxed text-portfolio-muted sm:text-sm">
      <span className="text-portfolio-secondary">Built with </span>
      {items.join(" · ")}
    </p>
  );
}

type Block = { label: string; body: React.ReactNode };

function useBlocks(product: Product): Block[] {
  return [
    { label: "The Product", body: product.product },
    { label: "Why It Matters?", body: product.whyItMatters },
    {
      label: "My Contribution",
      body: (
        <ul className="flex list-disc flex-col gap-1 pl-4 marker:text-portfolio-subtle">
          {product.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    { label: "What I Learned?", body: product.learned },
    { label: "Technology", body: <TechList items={product.technology} /> },
  ];
}

function ProductContent({ product }: { product: Product }) {
  const blocks = useBlocks(product);

  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block) => (
        <div key={block.label}>
          <h4 className="text-[11px] font-semibold uppercase tracking-widest text-portfolio">
            {block.label}
          </h4>
          <div className="mt-2 text-xs leading-relaxed text-portfolio-muted sm:text-sm">
            {block.body}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductCard({
  product,
  isOpen,
  onToggle,
}: {
  product: Product;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group rounded border transition-colors duration-200 ${
        isOpen
          ? "border-portfolio-card bg-portfolio-card"
          : "border-transparent hover:border-portfolio-card-border hover:bg-portfolio-card"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between px-4 py-3 text-left"
      >
        <div className="min-w-0 flex-1">
          <h3
            className={`text-sm font-medium transition-colors duration-200 sm:text-base ${
              isOpen
                ? "text-portfolio"
                : "text-portfolio-muted group-hover:text-portfolio"
            }`}
          >
            {product.company}
          </h3>
          <p
            className={`mt-0.5 text-xs transition-colors duration-200 ${
              isOpen
                ? "text-portfolio-secondary"
                : "text-portfolio-muted group-hover:text-portfolio-secondary"
            }`}
          >
            {product.tagline}
          </p>
        </div>
        <div className="ml-4 flex shrink-0 items-center gap-3">
          <span
            className={`text-xs transition-colors duration-200 ${
              isOpen
                ? "text-portfolio-secondary"
                : "text-portfolio-muted group-hover:text-portfolio-secondary"
            }`}
          >
            {product.period}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-center transition-colors duration-200 ${
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
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pt-2">
              <ProductContent product={product} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Products() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set());

  return (
    <section
      id="products"
      aria-label="Products I've helped build"
    >
      <SectionHeader title="Products I've Helped Build" />
      <div className="flex flex-col gap-1">
        {products.map((product, index) => (
          <ProductCard
            key={product.company}
            product={product}
            isOpen={openIndices.has(index)}
            onToggle={() =>
              setOpenIndices((prev) => {
                const next = new Set(prev);
                if (next.has(index)) {
                  next.delete(index);
                } else {
                  next.add(index);
                }
                return next;
              })
            }
          />
        ))}
      </div>
    </section>
  );
}
