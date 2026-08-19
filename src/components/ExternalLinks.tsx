import type { ReactNode, SVGProps } from "react";

const FOCUS =
  "rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-current focus-visible:outline-offset-4";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** `muted` is the playground default. `inherit` keeps the surrounding heading color. */
  tone?: "muted" | "inherit";
};

type LabeledLinkProps = LinkProps & {
  label: string;
};

function externalProps(href: string) {
  return {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
  } as const;
}

function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M3.6 8.4 8.4 3.6" />
      <path d="M4.6 3.6h3.8v3.8" />
    </svg>
  );
}

function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M2.5 6h7" />
      <path d="M6.8 3.3 9.5 6l-2.7 2.7" />
    </svg>
  );
}

function ExternalBoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M7 2h3v3" />
      <path d="M10 2 5.8 6.2" />
      <path d="M9 7.4v1.9a1 1 0 0 1-1 1H2.7a1 1 0 0 1-1-1V3.7a1 1 0 0 1 1-1h1.9" />
    </svg>
  );
}

/** Option 1 — Subtle external arrow that fades in on hover. */
export function LinkArrow({
  href,
  children,
  className = "",
  tone = "muted",
}: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`group/extlink inline-flex items-baseline gap-1 transition-colors duration-200 ease-out ${
        tone === "muted" ? "text-portfolio-muted hover:text-portfolio" : ""
      } ${FOCUS} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3 w-3 shrink-0 translate-y-px opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover/extlink:opacity-70 group-focus-visible/extlink:opacity-70 motion-safe:-translate-x-0.5 motion-safe:group-hover/extlink:translate-x-0 motion-safe:group-focus-visible/extlink:translate-x-0" />
      <NewTabHint />
    </a>
  );
}

/** Option 2 — Editorial underline that wipes in from the left. */
export function LinkUnderline({ href, children, className = "" }: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`group text-portfolio-muted hover:text-portfolio relative inline-block transition-colors duration-200 ease-out ${FOCUS} ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-[1px] w-full origin-left bg-current opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:opacity-50 group-focus-visible:opacity-50 motion-safe:scale-x-0 motion-safe:group-hover:scale-x-100 motion-safe:group-focus-visible:scale-x-100"
      />
      <NewTabHint />
    </a>
  );
}

/** Option 3 — Quiet action label revealed only on hover. */
export function LinkHoverReveal({
  href,
  children,
  label = "Visit",
  className = "",
}: Partial<LabeledLinkProps> & LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`group text-portfolio-muted hover:text-portfolio inline-flex items-center gap-2.5 transition-colors duration-200 ease-out ${FOCUS} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="text-portfolio-subtle inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.12em] uppercase opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 motion-safe:-translate-x-1 motion-safe:group-hover:translate-x-0 motion-safe:group-focus-visible:translate-x-0"
      >
        {label}
        <ArrowRight className="h-2.5 w-2.5" />
      </span>
      <NewTabHint />
    </a>
  );
}

/** Option 4 — Small external-link glyph, always present but faint. */
export function LinkIcon({ href, children, className = "" }: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`group text-portfolio-muted hover:text-portfolio inline-flex items-baseline gap-1.5 transition-colors duration-200 ease-out ${FOCUS} ${className}`}
    >
      <span>{children}</span>
      <ExternalBoxIcon className="h-[11px] w-[11px] shrink-0 translate-y-px opacity-35 transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
      <NewTabHint />
    </a>
  );
}

/** Option 5 — Text-only treatment: colour shift plus a small nudge. */
export function LinkText({ href, children, className = "" }: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`text-portfolio-muted hover:text-portfolio inline-block transition-[color,transform] duration-200 ease-out motion-safe:hover:translate-x-0.5 motion-safe:focus-visible:translate-x-0.5 ${FOCUS} ${className}`}
    >
      {children}
      <NewTabHint />
    </a>
  );
}

/** Option 6 — Name with a quiet secondary destination label. */
export function LinkLabeled({
  href,
  children,
  label,
  className = "",
}: LabeledLinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`group inline-flex flex-col gap-0.5 ${FOCUS} ${className}`}
    >
      <span className="text-portfolio-muted group-hover:text-portfolio transition-colors duration-200 ease-out">
        {children}
      </span>
      <span className="text-portfolio-subtle group-hover:text-portfolio-secondary inline-flex items-center gap-1 text-[11px] transition-colors duration-200 ease-out">
        {label}
        <ArrowUpRight className="h-2.5 w-2.5 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-70 group-focus-visible:opacity-70" />
      </span>
      <NewTabHint />
    </a>
  );
}

/** Option 8 — Sheen sweeps through the glyphs once per hover. */
export function LinkSheen({ href, children, className = "" }: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`link-sheen text-portfolio-muted inline-block ${FOCUS} ${className}`}
    >
      {children}
      <NewTabHint />
    </a>
  );
}

/** Option 9 — Same sheen, looping slowly to draw the eye without hover. */
export function LinkSheenAmbient({
  href,
  children,
  className = "",
}: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`link-sheen-ambient text-portfolio-muted inline-block ${FOCUS} ${className}`}
    >
      {children}
      <NewTabHint />
    </a>
  );
}

/** Ambient sheen while idle, restarting as a single sweep on hover or focus. */
export function LinkSheenMix({ href, children, className = "" }: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`link-sheen-mix text-portfolio-muted inline-block ${FOCUS} ${className}`}
    >
      {children}
      <NewTabHint />
    </a>
  );
}

/**
 * Lightest treatment, sized for dense lists such as Built With.
 * Dotted rule keeps many links from reading as a wall of underlines.
 */
export function LinkTag({ href, children, className = "" }: LinkProps) {
  return (
    <a
      {...externalProps(href)}
      className={`text-portfolio-muted hover:text-portfolio underline decoration-[color:var(--portfolio-subtle)] decoration-dotted decoration-1 underline-offset-[3px] transition-colors duration-200 ease-out hover:decoration-current ${FOCUS} ${className}`}
    >
      {children}
      <NewTabHint />
    </a>
  );
}
