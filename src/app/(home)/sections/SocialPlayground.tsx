"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

const labels = ["GitHub", "LinkedIn", "Resume", "Email"];

function ConceptRow({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-2 border-b border-portfolio-card pb-2">
        <span className="text-[11px] tabular-nums text-portfolio-subtle">{id}</span>
        <h3 className="text-sm font-medium text-portfolio">{title}</h3>
      </div>
      <p className="text-xs leading-relaxed text-portfolio-subtle">{note}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

// ─── 07: Focus — hovered item lifts, rest dims ────────────────────────────────

function C07() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <nav className="flex items-center gap-2" aria-label="links">
      {labels.map((label, i) => (
        <span key={label} className="flex items-center gap-2">
          {i > 0 && (
            <span
              aria-hidden
              className={`select-none text-[13px] text-portfolio-subtle transition-opacity duration-300 ease-out ${
                hovered ? "opacity-10" : "opacity-25"
              }`}
            >
              /
            </span>
          )}
          <a
            href="#"
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
            className={`text-[13px] transition-[color,opacity] duration-300 ease-out ${
              hovered === null
                ? "text-portfolio-subtle opacity-100"
                : hovered === label
                  ? "text-portfolio opacity-100"
                  : "text-portfolio-subtle opacity-30"
            }`}
          >
            {label}
          </a>
        </span>
      ))}
    </nav>
  );
}

// ─── 08: Same focus logic + sheen sweep on the active link ────────────────────

function C08() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <nav className="flex items-center gap-2" aria-label="links">
      {labels.map((label, i) => (
        <span key={label} className="flex items-center gap-2">
          {i > 0 && (
            <span
              aria-hidden
              style={{
                transition: hovered
                  ? "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 20ms"
                  : "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: hovered ? 0.08 : 0.25,
              }}
              className="select-none text-[13px] text-portfolio-subtle"
            >
              /
            </span>
          )}
          <a
            href="#"
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transition:
                hovered === label
                  ? "opacity 200ms ease-out"
                  : hovered !== null
                    ? "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 40ms"
                    : "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), color 600ms cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: hovered !== null && hovered !== label ? 0.28 : 1,
            }}
            className={`text-[13px] ${
              hovered === label
                ? "link-sheen"
                : "text-portfolio-subtle"
            }`}
          >
            {label}
          </a>
        </span>
      ))}
    </nav>
  );
}

export default function SocialPlayground() {
  return (
    <section id="social-playground" aria-label="Social link style exploration">
      <SectionHeader title="Social Links — Style Exploration" />
      <p className="mb-6 text-sm leading-relaxed text-portfolio-muted">
        Two directions for{" "}
        <span className="text-portfolio">
          GitHub / LinkedIn / Resume / Email
        </span>
        . Hover each to compare.
      </p>
      <div className="flex flex-col gap-10">
        <ConceptRow
          id="07"
          title="Focus: hovered item only"
          note="All links dim when any is hovered — only the active one reads. Smooth return to resting state on mouse-out."
        >
          <C07 />
        </ConceptRow>
        <ConceptRow
          id="08"
          title="Focus + sheen sweep"
          note="Same focus dimming, but the hovered link also gets a light-band sheen sweep through the text. Rest dims, active shimmers."
        >
          <C08 />
        </ConceptRow>
      </div>
    </section>
  );
}
