"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "@/components/SectionHeader";

type Role = {
  title: string;
  period: string;
  company: string;
  companyUrl: string;
  location: string;
};

const currentRole: Role = {
  title: "Software Engineer",
  period: "2025 - Present",
  company: "Bell Canada",
  companyUrl: "https://www.bell.ca",
  location: "Canada",
};

const previousRoles: Role[] = [
  {
    title: "Software Engineer",
    period: "2023 - 2025",
    company: "CIS Bayad Center Inc.",
    companyUrl: "https://www.bayad.com",
    location: "Philippines",
  },
  {
    title: "Front-end Developer / Database Admin",
    period: "2019 - 2023",
    company: "Moneygment",
    companyUrl: "https://moneygment.ph/",
    location: "Makati PH",
  },
  {
    title: "Quality Assurance Intern",
    period: "2018",
    company: "Cormant Technologies",
    companyUrl: "https://cormant.io/",
    location: "Taguig PH",
  },
];

function RoleContent({ role }: { role: Role }) {
  return (
    <>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium text-portfolio sm:text-base">
          {role.title}
        </h3>
        <div className="mt-0.5 text-xs text-portfolio-muted">
          <span>{role.period}</span>
        </div>
      </div>
      <div className="ml-4 shrink-0 text-right">
        <a
          href={role.companyUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm font-medium text-portfolio transition-colors hover:text-portfolio-secondary"
        >
          {role.company}
        </a>
        <div className="mt-0.5 text-xs text-portfolio-muted">{role.location}</div>
      </div>
    </>
  );
}

const roleRowLayout =
  "flex items-start justify-between rounded border py-3 px-4 transition-colors duration-200";

function RoleRow({ role }: { role: Role }) {
  return (
    <div
      className={`${roleRowLayout} border-transparent hover:bg-portfolio-row hover:border-portfolio-card-border`}
    >
      <RoleContent role={role} />
    </div>
  );
}

export default function Experience() {
  const [showPreviousRoles, setShowPreviousRoles] = useState(false);

  return (
    <section id="experience" className="mt-8">
      <SectionHeader title="Work" />

      <div className="mb-5">
        <div
          className={`${roleRowLayout} border-portfolio-card bg-portfolio-card hover:bg-portfolio-card-hover`}
        >
          <RoleContent role={currentRole} />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setShowPreviousRoles(!showPreviousRoles)}
        aria-expanded={showPreviousRoles}
        className={`flex items-center gap-2 rounded-lg border border-transparent py-2 px-3 text-sm font-medium transition-colors duration-200 ${
          showPreviousRoles
            ? "bg-portfolio-card text-portfolio"
            : "text-portfolio-muted hover:bg-portfolio-card hover:text-portfolio"
        }`}
      >
        <motion.div
          animate={{ rotate: showPreviousRoles ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
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
        </motion.div>
        <span>Previous roles</span>
        <span className="rounded-full bg-portfolio-badge px-2 py-0.5 text-xs text-portfolio-muted">
          {previousRoles.length}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {showPreviousRoles && (
          <motion.div
            key="previous-roles"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-2 flex flex-col">
              {previousRoles.map((role) => (
                <RoleRow key={`${role.company}-${role.period}`} role={role} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
