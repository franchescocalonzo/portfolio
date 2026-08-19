"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type SVGProps,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  formatWordmark,
  typographyConcepts,
  type TypographyConcept,
} from "./typographyConcepts";

const LINKEDIN = "https://www.linkedin.com/in/franchesco-dev/";
const GITHUB = "https://github.com/franchescocalonzo";
const EMAIL = "mailto:franchesco.dev@gmail.com";
const RESUME = "/Franchesco-Calonzo-Resume.pdf";
const NAME = "franchesco";
// let hasPlayedHeroIntro = false;

type ExplorerMode = "signatures" | "type";
type NameVariant = "text" | "sig1" | "sig2" | "sig3" | "sig4anim";

const signatureDesigns: { id: number; label: string; variant: NameVariant }[] =
  [
    { id: 1, label: "Text", variant: "text" },
    { id: 2, label: "Script thin", variant: "sig1" },
    { id: 3, label: "Script + line", variant: "sig2" },
    { id: 4, label: "Script bold", variant: "sig3" },
    { id: 5, label: "Script animated", variant: "sig4anim" },
  ];

type MaskSignature = "sig1" | "sig2" | "sig3";

const signatures: Record<MaskSignature, { src: string; ratio: number }> = {
  sig1: { src: "/signatures/franchesco-1.svg", ratio: 1545 / 342 },
  sig2: { src: "/signatures/franchesco-2.svg", ratio: 1740 / 402 },
  sig3: { src: "/signatures/franchesco-3.svg", ratio: 1491 / 318 },
};

type SocialIcon = (props: SVGProps<SVGSVGElement>) => ReactNode;

const socialLinks: {
  label: string;
  href: string;
  external?: boolean;
  Icon: SocialIcon;
}[] = [
  { label: "GitHub", href: GITHUB, external: true, Icon: GitHubIcon },
  { label: "LinkedIn", href: LINKEDIN, external: true, Icon: LinkedInIcon },
  { label: "Resume", href: RESUME, external: true, Icon: ResumeIcon },
  { label: "Email", href: EMAIL, Icon: EmailIcon },
];

function TextLinks({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter(label: string) {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHovered(label);
  }

  function handleLeave() {
    leaveTimer.current = setTimeout(() => setHovered(null), 80);
  }

  return (
    <nav
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-label="Profile links"
    >
      {socialLinks.map(({ label, href, external }, i) => (
        <span key={label} className="flex items-center gap-2">
          {i > 0 && (
            <span
              aria-hidden
              style={{
                transition: hovered
                  ? "opacity 500ms cubic-bezier(0.4,0,0.2,1) 20ms"
                  : "opacity 600ms cubic-bezier(0.4,0,0.2,1)",
                opacity: hovered ? 0.08 : 0.25,
              }}
              className="select-none text-[13px] text-[#181818] dark:text-[#F5F5F3]"
            >
              ·
            </span>
          )}
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onMouseEnter={() => handleEnter(label)}
            onMouseLeave={handleLeave}
            style={{
              transition:
                hovered === label
                  ? "opacity 200ms ease-out"
                  : hovered !== null
                    ? "opacity 500ms cubic-bezier(0.4,0,0.2,1) 40ms"
                    : "opacity 600ms cubic-bezier(0.4,0,0.2,1), color 600ms cubic-bezier(0.4,0,0.2,1)",
              opacity: hovered !== null && hovered !== label ? 0.28 : 1,
            }}
            className={`text-[13px] focus-visible:outline focus-visible:outline-1 focus-visible:outline-current focus-visible:outline-offset-4 ${
              hovered === label
                ? "link-sheen"
                : "text-[#181818] dark:text-[#F5F5F3] opacity-45"
            }`}
          >
            {label}
          </a>
        </span>
      ))}
    </nav>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-4.3 1.4-4.3-2.2-6-2.7" />
      <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.6-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 3.8 5.4 4.1 5.4 4.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10.5c0 4.6 2.9 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6.5 10v8" />
      <path d="M10.5 18v-5.1a2.9 2.9 0 0 1 5.8 0V18" />
      <path d="M10.5 10v8" />
      <path d="M6.5 6.6v.1" />
    </svg>
  );
}

function ResumeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 3.5h6.5L18.5 8v12.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z" />
      <path d="M14.5 3.5V8h4" />
      <path d="M9 12.5h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}

function Signature({
  variant,
  height,
}: {
  variant: MaskSignature;
  height: number;
}) {
  const { src, ratio } = signatures[variant];
  return (
    <span
      role="img"
      aria-label="Franchesco"
      className="mx-auto block text-portfolio"
      style={{
        height,
        width: height * ratio,
        maxWidth: "100%",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

function AnimatedSignature({ height }: { height: number }) {
  const { src, ratio } = signatures.sig3;
  return (
    <span
      role="img"
      aria-label="Franchesco"
      className="signature-wipe mx-auto block text-portfolio"
      style={{
        height,
        width: height * ratio,
        maxWidth: "100%",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

type TypeControls = {
  weight: number;
  tracking: string;
  caseStyle: "title" | "upper" | "lower";
  period: boolean;
  size: number;
};

const revealTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
} as const;

function RevealHeroItem({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ...revealTransition,
        duration: reduceMotion ? 0.2 : revealTransition.duration,
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

function Wordmark({
  concept,
  controls,
  className = "",
  text,
  color,
}: {
  concept: TypographyConcept;
  controls: TypeControls;
  className?: string;
  text?: string;
  color?: string;
}) {
  return (
    <span
      className={`text-portfolio ${className}`}
      style={{
        fontFamily: concept.family,
        fontWeight: controls.weight,
        letterSpacing: controls.tracking,
        fontSize: controls.size,
        lineHeight: 1.05,
        color,
        transition: color
          ? "color 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
          : undefined,
      }}
    >
      {text ?? formatWordmark(NAME, controls.caseStyle, controls.period)}
    </span>
  );
}

function HeroSignatures({ variant }: { variant: NameVariant }) {
  return (
    <header className="mb-12 flex min-h-[42vh] flex-col justify-center pt-8">
      <div className="mx-auto w-full max-w-md text-center">
        {variant === "text" ? (
          <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-portfolio sm:text-6xl">
            franchesco
          </h1>
        ) : variant === "sig4anim" ? (
          <AnimatedSignature height={86} />
        ) : (
          <Signature variant={variant} height={77} />
        )}
        <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-portfolio-subtle">
          Software Engineer · Philippines
        </p>
        <div className="mx-auto mt-10 max-w-sm space-y-4 text-sm leading-relaxed text-portfolio-secondary">
          <p>
            Building and improving production web applications used by real
            businesses.
          </p>
          <p>
            I enjoy solving problems through software and contributing to
            products that people rely on every day.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <TextLinks />
        </div>
      </div>
    </header>
  );
}

function HeroTypography({
  concept,
  controls,
  compare,
  compareConcept,
  titleAnchored,
  revealReady,
  introText,
  showCursor,
}: {
  concept: TypographyConcept;
  controls: TypeControls;
  compare: boolean;
  compareConcept: TypographyConcept;
  titleAnchored: boolean;
  revealReady: boolean;
  introText: string;
  showCursor: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const title = revealReady
    ? formatWordmark(NAME, controls.caseStyle, controls.period)
    : introText;
  const titleColor = titleAnchored ? "var(--portfolio-fg)" : "#f4f1ea";

  return (
    <motion.header
      layout
      transition={{ duration: 0.95, ease: "easeOut" }}
      className={`mb-12 flex flex-col justify-center pt-8 ${
        titleAnchored ? "min-h-[42vh]" : "min-h-[calc(100vh-4rem)]"
      }`}
    >
      <div className="mx-auto w-full max-w-md text-center">
        {revealReady && compare ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
            <div className="text-left sm:text-center">
              <p className="mb-3 text-[10px] uppercase tracking-widest text-portfolio-subtle">
                A · {concept.font}
              </p>
              <Wordmark concept={concept} controls={controls} />
            </div>
            <div className="text-left sm:border-l sm:border-portfolio-card sm:pl-6 sm:text-center">
              <p className="mb-3 text-[10px] uppercase tracking-widest text-portfolio-subtle">
                B · {compareConcept.font}
              </p>
              <Wordmark concept={compareConcept} controls={controls} />
            </div>
          </div>
        ) : (
          <motion.h1
            layout="position"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...revealTransition,
              duration: reduceMotion ? 0.2 : revealTransition.duration,
            }}
            aria-label={title.replace("|", "")}
          >
            <Wordmark
              concept={concept}
              controls={controls}
              text={title}
              color={titleColor}
            />
            {showCursor && (
              <span
                aria-hidden
                className="hero-intro-cursor ml-0.5 inline-block align-baseline"
                style={{
                  fontFamily: concept.family,
                  fontSize: controls.size,
                  fontWeight: controls.weight,
                  lineHeight: 1,
                  color: titleColor,
                  transition: "color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                |
              </span>
            )}
          </motion.h1>
        )}
        {revealReady && (
          <>
            <RevealHeroItem delay={0.08}>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-portfolio-subtle">
                Software Engineer · Philippines
              </p>
            </RevealHeroItem>
            <div className="mx-auto mt-10 max-w-sm space-y-4 text-sm leading-relaxed text-portfolio-secondary">
              <RevealHeroItem delay={0.16}>
                <p>
                  Building and improving production web applications used by
                  real businesses.
                </p>
              </RevealHeroItem>
              <RevealHeroItem delay={0.24}>
                <p>
                  I enjoy solving problems through software and contributing to
                  products that people rely on every day.
                </p>
              </RevealHeroItem>
            </div>
            <RevealHeroItem delay={0.32}>
              <div className="mt-10 flex justify-center">
                <TextLinks />
              </div>
            </RevealHeroItem>
          </>
        )}
      </div>
    </motion.header>
  );
}

function useTypeFonts() {
  // Loads Google Fonts for Type-tab wordmark comparison (Geist comes from layout).
  useEffect(() => {
    const googleFamilies = typographyConcepts
      .map((c) => c.google)
      .filter(Boolean)
      .join("&family=");

    const links: HTMLLinkElement[] = [];

    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);
    links.push(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);
    links.push(preconnect2);

    if (googleFamilies) {
      const gf = document.createElement("link");
      gf.rel = "stylesheet";
      gf.href = `https://fonts.googleapis.com/css2?family=${googleFamilies}&display=swap`;
      document.head.appendChild(gf);
      links.push(gf);
    }

    return () => {
      links.forEach((el) => el.remove());
    };
  }, []);
}

function ExplorerPanel({
  mode,
  onModeChange,
  sigActive,
  onSigChange,
  typeActive,
  onTypeChange,
  controls,
  onControlsChange,
  compare,
  onCompareChange,
  compareId,
  onCompareIdChange,
  concept,
}: {
  mode: ExplorerMode;
  onModeChange: (m: ExplorerMode) => void;
  sigActive: number;
  onSigChange: (id: number) => void;
  typeActive: number;
  onTypeChange: (id: number) => void;
  controls: TypeControls;
  onControlsChange: (c: TypeControls) => void;
  compare: boolean;
  onCompareChange: (v: boolean) => void;
  compareId: number;
  onCompareIdChange: (id: number) => void;
  concept: TypographyConcept;
}) {
  const sigCurrent = signatureDesigns.find((d) => d.id === sigActive);

  return (
    <div className="fixed left-3 top-3 z-50 max-h-[calc(100vh-1.5rem)] w-[min(calc(100%-5.5rem),18rem)] overflow-y-auto rounded border border-portfolio-card bg-portfolio-surface px-3 py-2.5 shadow-sm sm:left-4 sm:top-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-[10px] font-medium uppercase tracking-widest text-portfolio-subtle">
          Hero explorer
        </p>
        <p className="truncate text-[11px] text-portfolio-muted">
          {mode === "signatures" ? sigCurrent?.label : concept.font}
        </p>
      </div>

      <div className="mb-3 flex gap-1 rounded bg-portfolio-badge p-0.5">
        {(
          [
            ["signatures", "Signatures"],
            ["type", "Type"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => onModeChange(id)}
            className={`flex-1 rounded px-2 py-1 text-[11px] font-medium transition-colors ${
              mode === id
                ? "bg-portfolio-surface text-portfolio"
                : "text-portfolio-muted hover:text-portfolio"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {mode === "signatures" ? (
        <div className="flex flex-wrap gap-1.5">
          {signatureDesigns.map((design) => {
            const isActive = design.id === sigActive;
            return (
              <button
                key={design.id}
                type="button"
                onClick={() => onSigChange(design.id)}
                title={design.label}
                className={`min-w-8 rounded px-2 py-1 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-portfolio-badge text-portfolio"
                    : "text-portfolio-muted hover:bg-portfolio-row hover:text-portfolio"
                }`}
              >
                {design.id}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-1.5">
            {typographyConcepts.map((c) => {
              const isActive = c.id === typeActive;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => onTypeChange(c.id)}
                  title={c.font}
                  className={`min-w-8 rounded px-2 py-1 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-portfolio-badge text-portfolio"
                      : "text-portfolio-muted hover:bg-portfolio-row hover:text-portfolio"
                  }`}
                >
                  {c.id}
                </button>
              );
            })}
          </div>

          <label className="flex flex-col gap-1 text-[10px] text-portfolio-subtle">
            Weight {controls.weight}
            <input
              type="range"
              min={400}
              max={700}
              step={100}
              value={controls.weight}
              onChange={(e) =>
                onControlsChange({
                  ...controls,
                  weight: Number(e.target.value),
                })
              }
            />
          </label>

          <label className="flex flex-col gap-1 text-[10px] text-portfolio-subtle">
            Size {controls.size}px
            <input
              type="range"
              min={28}
              max={72}
              step={2}
              value={controls.size}
              onChange={(e) =>
                onControlsChange({
                  ...controls,
                  size: Number(e.target.value),
                })
              }
            />
          </label>

          <label className="flex flex-col gap-1 text-[10px] text-portfolio-subtle">
            Tracking
            <select
              value={controls.tracking}
              onChange={(e) =>
                onControlsChange({ ...controls, tracking: e.target.value })
              }
              className="rounded border border-portfolio-card bg-portfolio-surface px-2 py-1 text-xs text-portfolio"
            >
              <option value="-0.05em">-0.05em tight</option>
              <option value="-0.04em">-0.04em</option>
              <option value="-0.035em">-0.035em</option>
              <option value="-0.03em">-0.03em</option>
              <option value="-0.025em">-0.025em</option>
              <option value="-0.02em">-0.02em</option>
              <option value="-0.015em">-0.015em</option>
              <option value="-0.01em">-0.01em</option>
              <option value="0">0</option>
              <option value="0.02em">0.02em loose</option>
              <option value="0.08em">0.08em wide</option>
              <option value="0.2em">0.2em display</option>
            </select>
          </label>

          <div className="flex gap-1">
            {(
              [
                ["title", "Aa"],
                ["upper", "AA"],
                ["lower", "aa"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() =>
                  onControlsChange({ ...controls, caseStyle: value })
                }
                className={`flex-1 rounded px-2 py-1 text-xs font-medium transition-colors ${
                  controls.caseStyle === value
                    ? "bg-portfolio-badge text-portfolio"
                    : "text-portfolio-muted hover:bg-portfolio-row"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              onControlsChange({ ...controls, period: !controls.period })
            }
            className={`rounded px-2 py-1 text-left text-xs font-medium transition-colors ${
              controls.period
                ? "bg-portfolio-badge text-portfolio"
                : "text-portfolio-muted hover:bg-portfolio-row"
            }`}
          >
            Trailing period {controls.period ? "on" : "off"}
          </button>

          <button
            type="button"
            onClick={() => onCompareChange(!compare)}
            className={`rounded px-2 py-1 text-left text-xs font-medium transition-colors ${
              compare
                ? "bg-portfolio-badge text-portfolio"
                : "text-portfolio-muted hover:bg-portfolio-row"
            }`}
          >
            Side-by-side compare {compare ? "on" : "off"}
          </button>

          {compare && (
            <label className="flex flex-col gap-1 text-[10px] text-portfolio-subtle">
              Compare with
              <select
                value={compareId}
                onChange={(e) => onCompareIdChange(Number(e.target.value))}
                className="rounded border border-portfolio-card bg-portfolio-surface px-2 py-1 text-xs text-portfolio"
              >
                {typographyConcepts.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.id}. {c.font}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      )}
    </div>
  );
}

function useHeroIntro({
  onComplete,
  onTitleAnchor,
}: {
  onComplete?: () => void;
  onTitleAnchor?: () => void;
}) {
  // Typing intro disabled for now — skip straight to the final hero.
  const [titleAnchored] = useState(true);
  const [revealReady] = useState(true);
  const [introText] = useState("franchesco.");
  const [showCursor] = useState(false);

  useEffect(() => {
    onTitleAnchor?.();
    onComplete?.();
  }, [onComplete, onTitleAnchor]);

  /*
  const [titleAnchored, setTitleAnchored] = useState(hasPlayedHeroIntro);
  const [revealReady, setRevealReady] = useState(hasPlayedHeroIntro);
  const [introText, setIntroText] = useState(
    hasPlayedHeroIntro ? "franchesco." : "",
  );
  const [showCursor, setShowCursor] = useState(!hasPlayedHeroIntro);

  useEffect(() => {
    if (hasPlayedHeroIntro) {
      window.setTimeout(() => {
        onTitleAnchor?.();
        onComplete?.();
      }, 0);
      return;
    }

    let cancelled = false;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    async function runIntro() {
      const typeChesco = [
        ["c", 80],
        ["ch", 92],
        ["che", 76],
        ["ches", 98],
        ["chesc", 84],
        ["chesco", 90],
      ] as const;
      const backspaceToC = [
        ["chesc", 62],
        ["ches", 58],
        ["che", 68],
        ["ch", 54],
        ["c", 64],
      ] as const;
      const typeFullName = [
        ["fr", 74],
        ["fra", 92],
        ["fran", 86],
        ["franc", 78],
        ["franch", 94],
        ["franche", 82],
        ["franches", 88],
        ["franchesc", 76],
        ["franchesco", 96],
      ] as const;

      for (const [value, delay] of typeChesco) {
        if (cancelled) return;
        setIntroText(value);
        await wait(delay);
      }

      await wait(720);

      for (const [value, delay] of backspaceToC) {
        if (cancelled) return;
        setIntroText(value);
        await wait(delay);
      }

      for (const [value, delay] of typeFullName) {
        if (cancelled) return;
        setIntroText(value);
        await wait(delay);
      }

      await wait(820);

      if (cancelled) return;
      setShowCursor(false);
      setIntroText("franchesco.");
      hasPlayedHeroIntro = true;

      await wait(120);

      if (cancelled) return;
      setTitleAnchored(true);
      onTitleAnchor?.();

      await wait(220);

      if (cancelled) return;
      setRevealReady(true);
      onComplete?.();
    }

    runIntro();

    return () => {
      cancelled = true;
    };
  }, [onComplete, onTitleAnchor]);
  */

  return { titleAnchored, revealReady, introText, showCursor };
}

export default function HeroExplorer() {
  // useTypeFonts() is only needed when the ExplorerPanel is enabled.
  // useTypeFonts();
  const { titleAnchored, revealReady, introText, showCursor } =
    useHeroIntro({});

  const [mode, setMode] = useState<ExplorerMode>("type");
  const [sigActive, setSigActive] = useState(1);
  const [typeActive, setTypeActive] = useState(4); // Plus Jakarta Sans — chosen
  const [compare, setCompare] = useState(false);
  const [compareId, setCompareId] = useState(2); // Geist

  const concept = useMemo(
    () =>
      typographyConcepts.find((c) => c.id === typeActive) ??
      typographyConcepts[0],
    [typeActive],
  );
  const compareConcept = useMemo(
    () =>
      typographyConcepts.find((c) => c.id === compareId) ??
      typographyConcepts[1],
    [compareId],
  );

  const [controls, setControls] = useState<TypeControls>(() => ({
    weight: 500,
    tracking: "-0.03em",
    caseStyle: "lower",
    period: true,
    size: 50,
  }));

  const sigVariant =
    signatureDesigns.find((d) => d.id === sigActive)?.variant ?? "text";

  return (
    <>
      {mode === "signatures" ? (
        <HeroSignatures variant={sigVariant} />
      ) : (
        <HeroTypography
          concept={concept}
          controls={controls}
          compare={compare}
          compareConcept={compareConcept}
          titleAnchored={titleAnchored}
          revealReady={revealReady}
          introText={introText}
          showCursor={showCursor}
        />
      )}
      {/* Hero explorer disabled for now.
      {revealReady && (
        <ExplorerPanel
          mode={mode}
          onModeChange={setMode}
          sigActive={sigActive}
          onSigChange={setSigActive}
          typeActive={typeActive}
          onTypeChange={setTypeActive}
          controls={controls}
          onControlsChange={setControls}
          compare={compare}
          onCompareChange={setCompare}
          compareId={compareId}
          onCompareIdChange={setCompareId}
          concept={concept}
        />
      )} */}
    </>
  );
}
