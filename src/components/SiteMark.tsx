"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import LogoMark from "@/components/LogoMark";

const SCROLL_THRESHOLD = 48;

export default function SiteMark() {
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    // passive for perf
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const duration = reduceMotion ? "duration-0" : "duration-250";

  return (
    <div className="fixed left-4 top-4 z-[100] md:left-8 md:top-6">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" })
        }
        style={{
          // glass pill styles applied via inline so we can transition between
          // borderColor and backgroundColor smoothly without Tailwind purging
          // dynamic values
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.07)"
            : "transparent",
          borderColor: scrolled
            ? "rgba(255,255,255,0.13)"
            : "transparent",
          backdropFilter: scrolled ? "blur(4px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(4px)" : "none",
          boxShadow: scrolled
            ? "0 1px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "none",
          transition: reduceMotion
            ? "none"
            : "background-color 250ms ease, border-color 250ms ease, backdrop-filter 250ms ease, box-shadow 250ms ease, padding 250ms ease",
          padding: scrolled ? "7px 9px" : "0px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "9px",
        }}
        className={`flex items-center text-[13px] text-portfolio hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current ${duration}`}
      >
        <LogoMark />
      </button>
    </div>
  );
}
