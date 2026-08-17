"use client";

import {
  useEffect,
  useSyncExternalStore,
  type ReactNode,
  type SVGProps,
} from "react";

type ThemeMode = "dark" | "light" | "ivory";

const DEFAULT_THEME: ThemeMode = "dark";

const modes: { id: ThemeMode; label: string }[] = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "ivory", label: "Ivory" },
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
  return (document.documentElement.dataset.theme as ThemeMode) || DEFAULT_THEME;
}

function getServerSnapshot() {
  return DEFAULT_THEME;
}

function setTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

function nextTheme(current: ThemeMode) {
  const index = modes.findIndex((mode) => mode.id === current);
  return modes[(index + 1) % modes.length]?.id ?? DEFAULT_THEME;
}

function cycleTheme(current: ThemeMode) {
  setTheme(nextTheme(current));
}

function IvoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="6.25" fill="currentColor" />
    </svg>
  );
}

function LightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3.5v1.8M12 18.7v1.8M4.9 4.9l1.3 1.3M17.8 17.8l1.3 1.3M3.5 12h1.8M18.7 12h1.8M4.9 19.1l1.3-1.3M17.8 6.2l1.3-1.3" />
    </svg>
  );
}

function DarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.2 3.6a7.8 7.8 0 1 0 6.2 12.6A8.2 8.2 0 0 1 14.2 3.6Z"
      />
    </svg>
  );
}

const icons: Record<
  ThemeMode,
  (props: SVGProps<SVGSVGElement>) => ReactNode
> = {
  ivory: IvoryIcon,
  light: LightIcon,
  dark: DarkIcon,
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const upcoming = nextTheme(theme);
  const Icon = icons[theme] ?? DarkIcon;
  const nextLabel =
    modes.find((mode) => mode.id === upcoming)?.label ?? "Light";

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

  const tooltip = `Switch to ${nextLabel} Mode (Press 'L')`;

  return (
    <div className="fixed right-4 top-4 z-[100] md:right-8 md:top-6">
      <button
        type="button"
        onClick={() => cycleTheme(theme)}
        aria-label={tooltip}
        className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-portfolio bg-portfolio-surface text-portfolio shadow-sm transition-[background-color,border-color,color] duration-200 ease-out hover:bg-portfolio-row focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current"
      >
        <Icon className="h-4 w-4" />
        <span
          role="tooltip"
          className="pointer-events-none absolute right-0 top-[calc(100%+10px)] z-[101] whitespace-nowrap rounded-md border border-portfolio bg-portfolio-surface px-2.5 py-1.5 text-[11px] font-medium tracking-[-0.01em] text-portfolio opacity-0 shadow-sm transition-[opacity,transform] duration-150 ease-out [transition-delay:0ms] group-hover:opacity-100 group-hover:delay-150 group-hover:duration-200 group-focus-visible:opacity-100 group-focus-visible:delay-150 motion-safe:translate-y-1 motion-safe:group-hover:translate-y-0 motion-safe:group-focus-visible:translate-y-0"
        >
          Switch to {nextLabel} Mode (Press{" "}
          <kbd className="rounded border border-portfolio bg-portfolio-muted px-1 py-px font-sans text-[10px] font-medium text-portfolio-secondary">
            L
          </kbd>
          )
        </span>
      </button>
    </div>
  );
}
