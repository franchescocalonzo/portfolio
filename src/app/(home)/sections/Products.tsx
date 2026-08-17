"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

type Product = {
  company: string;
  tagline: string;
  period: string;
  context?: string;
  product: string;
  whyItMatters: string;
  contribution: string[];
  learned: string[];
  builtWith?: string[];
};

const products: Product[] = [
  {
    company: "Bell Canada",
    tagline: "Cell site project management platform.",
    period: "2025 — Present",
    product:
      "SmartPort is an internal platform used by Bell Mobility to manage projects across wireless sites throughout Canada, from bidding up to project awarding.",
    whyItMatters:
      "It centralizes the bidding and project-award process, making it easier for teams to manage contractors, approvals, site information, and the work that follows.",
    contribution: [
      "Develop and ship new features, including the Project Delegation workflow for reassigning projects between users.",
      "Fix and improve existing features across the platform, addressing bugs and improving the overall user experience.",
      "Contribute to the ongoing IQGeo platform upgrade, adapting our custom applications and workflows to the newer platform version.",
      "Build and improve frontend interfaces used by teams to manage projects, bidding, and day-to-day operations.",
    ],
    learned: [
      "Working within a large, legacy codebase taught me that good engineering isn't always about rewriting things from scratch.",
      "One example is our ongoing move from jQuery-based UI toward React for newer interfaces. React gives us a more structured way to build complex UI and manage interactions, making the code easier to understand and maintain as the product continues to evolve.",
    ],
    builtWith: [
      "React",
      "Python",
      "JavaScript",
      "Ant Design",
      "TanStack Table",
      "IQGeo",
      "PostgreSQL",
    ],
  },
  {
    company: "CIS Bayad Center Inc.",
    tagline: "B2B platform for bills and payment services.",
    period: "2023 — 2025",
    product:
      "Bayad Web is a B2B bills payment platform that enables Bayad and partner businesses to process a wide range of customer payments, from utilities and telecommunications to government services and more.",
    whyItMatters:
      "It gives businesses a centralized platform to process multiple payment services through a single workflow, while helping them serve customers who prefer or rely on in-person payments.",
    contribution: [
      "Develop and maintain full-stack features across the Bayad Web platform, working with React on the frontend and Python on the backend.",
      "Improve platform performance and reliability, including optimizing frequently accessed data and addressing application issues.",
      "Improve monitoring and observability across frontend and backend services to help identify issues and support production troubleshooting.",
      "Contribute to platform and infrastructure improvements, including runtime upgrades and maintaining stability across AWS-hosted services.",
    ],
    learned: [
      "Working on Bayad Web exposed me to different approaches to optimization, CI/CD, AWS, and production monitoring, giving me a better understanding of what happens beyond the application code itself.",
      "More importantly, I learned to appreciate the engineering process behind a production release. From sprint planning and code reviews to QA, security checks, change management, release planning, and rollback procedures, I saw how having a structured process helps teams deliver changes more safely and maintain the quality of software reaching production.",
    ],
    builtWith: [
      "React",
      "Python",
      "JavaScript",
      "Material UI",
      "Node.js",
      "AWS",
      "New Relic",
    ],
  },
  {
    company: "Moneygment",
    tagline: "Digital payments platform.",
    period: "2019 — 2023",
    product:
      "Moneygment is a digital payments platform that helps individuals and small businesses manage government contributions and payments through SSS, Pag-IBIG, PhilHealth, and more.",
    whyItMatters:
      "It makes government contributions and payments more accessible and convenient, giving individuals and small businesses an easier way to manage essential payments through a single platform.",
    contribution: [
      "Initiated the frontend revamp of the legacy system, introducing ReactJS and Material UI to improve usability, performance, and development efficiency.",
      "Developed and maintained frontend features supporting payment processing and internal operations.",
      "Automated recurring reporting workflows using Python and scheduled jobs, replacing manual report generation and distribution for teams such as Accounting and Marketing.",
      "Designed and optimized database queries to support reporting and operational requirements.",
    ],
    learned: [
      "Moneygment strengthened my database skills through complex queries and data manipulation while teaching me how to investigate production issues using Linux and application logs. It was also where I began my transition from database administration to frontend development, learning React and applying it to a real production application.",
    ],
    builtWith: ["React", "Python", "JavaScript", "Material UI", "SQL", "Linux"],
  },
  {
    company: "Cormant Technologies",
    tagline: "Digital forms and field workflow platform.",
    period: "2018",
    context: "Internship",
    product:
      "PowerForm is a digital forms and workflow platform that helps businesses replace manual processes with configurable forms, task assignments, and mobile field operations.",
    whyItMatters:
      "It helps businesses digitize manual workflows, allowing field teams to complete tasks electronically while giving operations teams better visibility and control.",
    contribution: [
      "Created and executed test cases across web and mobile applications.",
      "Tested features using different testing approaches, identifying and documenting defects for the development team.",
      "Participated in sprint planning and release testing, working within an Agile development process.",
      "Reproduced and investigated defects to help developers identify and resolve issues.",
    ],
    learned: [
      "My internship introduced me to the software development lifecycle from a QA perspective. I learned how to create effective test cases, think through different testing scenarios, and validate features across web and mobile applications. It also gave me my first exposure to Agile development, from sprint planning through testing and release.",
      "QA gave me a tester's eye that I still use as an engineer — thinking in edge cases, validating assumptions, testing beyond the happy path, and understanding that the environment is an important part of how software behaves.",
    ],
  },
];

function BuiltWithList({ technologies }: { technologies: string[] }) {
  return <p>{technologies.join(" · ")}</p>;
}

type Block = { label: string; body: React.ReactNode };

function useBlocks(product: Product): Block[] {
  const blocks: Block[] = [
    { label: "The Product", body: product.product },
    { label: "Why It Matters?", body: product.whyItMatters },
    {
      label: "My Contribution",
      body: (
        <ul className="marker:text-portfolio-subtle flex list-disc flex-col gap-1 pl-4">
          {product.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "What I Learned?",
      body: (
        <div className="flex flex-col gap-3">
          {product.learned.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ),
    },
  ];

  if (product.builtWith?.length) {
    blocks.push({
      label: "Built With",
      body: <BuiltWithList technologies={product.builtWith} />,
    });
  }

  return blocks;
}

function ProductContent({ product }: { product: Product }) {
  const blocks = useBlocks(product);

  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block) => (
        <div key={block.label}>
          <h4 className="text-portfolio text-[11px] font-semibold tracking-widest uppercase">
            {block.label}
          </h4>
          <div className="text-portfolio-muted mt-2 text-xs leading-relaxed sm:text-sm">
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
          : "hover:border-portfolio-card-border hover:bg-portfolio-card border-transparent"
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
            {product.context ? ` · ${product.context}` : ""}
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
            <div className="px-4 pt-2 pb-5">
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
    <section id="products" aria-label="Products I've helped build">
      <Reveal>
        <SectionHeader title="Products I've Helped Build" />
      </Reveal>
      <RevealGroup className="flex flex-col gap-1" delay={0.08}>
        {products.map((product, index) => (
          <RevealItem key={product.company}>
            <ProductCard
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
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
