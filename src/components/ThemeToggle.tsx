"use client";

import { useEffect, useSyncExternalStore } from "react";

type ThemeMode = "ivory" | "dark" | "light";

const modes: { id: ThemeMode; label: string }[] = [
  { id: "ivory", label: "Ivory" },
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
];

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return (document.documentElement.dataset.theme as ThemeMode) || "ivory";
}

function getServerSnapshot() {
  return "ivory" as ThemeMode;
}

function setTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

function cycleTheme(current: ThemeMode) {
  const index = modes.findIndex((mode) => mode.id === current);
  const next = modes[(index + 1) % modes.length]?.id ?? "ivory";
  setTheme(next);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "l" && e.key !== "L") return;
      if (
        e.target instanceof HTMLElement &&
        ["INPUT", "TEXTAREA"].includes(e.target.tagName)
      ) {
        return;
      }
      cycleTheme(theme);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [theme]);

  return (
    <div
      aria-label="Appearance mode"
      className="fixed right-4 top-4 z-[100] inline-flex rounded-full border border-portfolio bg-portfolio-surface p-1 text-xs font-medium text-portfolio shadow-sm backdrop-blur-sm transition-colors md:right-8 md:top-6"
    >
      {modes.map((mode) => {
        const isActive = theme === mode.id;
        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => setTheme(mode.id)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              isActive
                ? "bg-portfolio-badge text-portfolio"
                : "text-portfolio-muted hover:bg-portfolio-row hover:text-portfolio"
            }`}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
