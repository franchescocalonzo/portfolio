export type TypographyConcept = {
  id: number;
  font: string;
  family: string; // CSS font-family stack
  google?: string; // Google Fonts family param; omit if local/CDN
  why: string;
  personality: string;
  weight: number;
  tracking: string; // CSS letter-spacing
  caseStyle: "title" | "upper" | "lower";
  period: boolean;
  scores: {
    professional: number;
    modern: number;
    premium: number;
    memorability: number;
    engineering: number;
  };
  useWhen: string;
  avoidWhen: string;
};

/**
 * 15 free typographic wordmark concepts for Franchesco.
 * Fonts: Google Fonts + local InterVariable + Geist (CDN).
 */
export const typographyConcepts: TypographyConcept[] = [
  {
    id: 1,
    font: "Inter",
    family: '"InterVariable", Inter, system-ui, sans-serif',
    why: "The default engineering UI face — neutral, highly readable, already used across Linear-adjacent products. Signals competence without performance.",
    personality: "Calm · Technical · System",
    weight: 500,
    tracking: "-0.03em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 9,
      modern: 8,
      premium: 7,
      memorability: 5,
      engineering: 10,
    },
    useWhen: "You want zero distraction and maximum trust — the safe product-engineer default.",
    avoidWhen: "You need the wordmark to feel distinctly branded or memorable against other Inter portfolios.",
  },
  {
    id: 2,
    font: "Geist Sans",
    family: 'var(--font-geist-sans), "InterVariable", system-ui, sans-serif',
    why: "Vercel’s face — designed for developer tools. Slightly sharper than Inter; reads as modern infra / product platform.",
    personality: "Premium · Technical · Startup",
    weight: 500,
    tracking: "-0.035em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 9,
      modern: 10,
      premium: 9,
      memorability: 7,
      engineering: 10,
    },
    useWhen: "You want to feel adjacent to Vercel / modern DX brands.",
    avoidWhen: "You’re worried about looking like every other Next.js portfolio.",
  },
  {
    id: 3,
    font: "Manrope",
    family: '"Manrope", system-ui, sans-serif',
    google: "Manrope:wght@400;500;600;700",
    why: "Soft geometric sans with open apertures — approachable premium without looking decorative. Common in polished SaaS marketing.",
    personality: "Calm · Premium · Approachable",
    weight: 600,
    tracking: "-0.02em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 8,
      modern: 9,
      premium: 9,
      memorability: 7,
      engineering: 7,
    },
    useWhen: "You want warmth without losing seriousness.",
    avoidWhen: "You need a colder, more enterprise-technical signal.",
  },
  {
    id: 4,
    font: "Plus Jakarta Sans",
    family: '"Plus Jakarta Sans", system-ui, sans-serif',
    google: "Plus+Jakarta+Sans:wght@400;500;600;700",
    why: "Contemporary product-marketing sans — used widely by startups that want Soft + Premium. Clean wordmarks at display sizes.",
    personality: "Modern · Startup · Friendly-premium",
    weight: 600,
    tracking: "-0.025em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 8,
      modern: 9,
      premium: 8,
      memorability: 7,
      engineering: 7,
    },
    useWhen: "Product-facing portfolios that still need to feel engineered.",
    avoidWhen: "You’re aiming for hard enterprise / docs-first tone.",
  },
  {
    id: 5,
    font: "IBM Plex Sans",
    family: '"IBM Plex Sans", system-ui, sans-serif',
    google: "IBM+Plex+Sans:wght@400;500;600;700",
    why: "Enterprise-grade clarity from IBM’s design system. Immediately signals seriousness and systems thinking.",
    personality: "Enterprise · Technical · Trustworthy",
    weight: 500,
    tracking: "-0.015em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 10,
      modern: 7,
      premium: 8,
      memorability: 6,
      engineering: 10,
    },
    useWhen: "Enterprise experience is your strongest positioning (fintech, telecom, ops).",
    avoidWhen: "You want a softer founder / creative-product vibe.",
  },
  {
    id: 6,
    font: "Instrument Sans",
    family: '"Instrument Sans", system-ui, sans-serif',
    google: "Instrument+Sans:wght@400;500;600;700",
    why: "Designed for product UI — slightly more character than Inter, still restrained. Strong for typography-first portfolios.",
    personality: "Editorial · Product · Modern",
    weight: 500,
    tracking: "-0.03em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 9,
      modern: 9,
      premium: 9,
      memorability: 8,
      engineering: 8,
    },
    useWhen: "You want a wordmark that feels designed, not default.",
    avoidWhen: "You need the most familiar / invisible system font.",
  },
  {
    id: 7,
    font: "DM Sans",
    family: '"DM Sans", system-ui, sans-serif',
    google: "DM+Sans:wght@400;500;600;700",
    why: "Closest free stand-in for Satoshi — geometric, low contrast, premium SaaS wordmark energy without licensing Satoshi.",
    personality: "Premium · Startup · Geometric",
    weight: 500,
    tracking: "-0.02em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 8,
      modern: 9,
      premium: 9,
      memorability: 7,
      engineering: 7,
    },
    useWhen: "You like Satoshi / modern SaaS logos but need free fonts.",
    avoidWhen: "You want something colder and more enterprise.",
  },
  {
    id: 8,
    font: "Outfit",
    family: '"Outfit", system-ui, sans-serif',
    google: "Outfit:wght@400;500;600;700",
    why: "Free Switzer-adjacent geometric — balanced, contemporary, excellent at large display sizes for a name wordmark.",
    personality: "Premium · Clean · Contemporary",
    weight: 500,
    tracking: "-0.025em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 8,
      modern: 9,
      premium: 9,
      memorability: 8,
      engineering: 7,
    },
    useWhen: "You want a distinctive but still-safe geometric wordmark.",
    avoidWhen: "Your body copy stack is already geometric — risk of looking trendy.",
  },
  {
    id: 9,
    font: "Space Grotesk",
    family: '"Space Grotesk", system-ui, sans-serif',
    google: "Space+Grotesk:wght@400;500;600;700",
    why: "Technical grotesk with subtle quirks — engineering vibe with more personality. Popular with indie product builders.",
    personality: "Technical · Distinctive · Builder",
    weight: 500,
    tracking: "-0.02em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 7,
      modern: 9,
      premium: 7,
      memorability: 9,
      engineering: 9,
    },
    useWhen: "You want to be remembered as a builder, not a generic corp site.",
    avoidWhen: "You’re interviewing for very conservative enterprise roles.",
  },
  {
    id: 10,
    font: "Sora",
    family: '"Sora", system-ui, sans-serif',
    google: "Sora:wght@400;500;600;700",
    why: "Slightly rounded geometric — modern product feel, calm and friendly while remaining sharp enough for engineering.",
    personality: "Modern · Soft-premium · Product",
    weight: 600,
    tracking: "-0.02em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 8,
      modern: 9,
      premium: 8,
      memorability: 7,
      engineering: 7,
    },
    useWhen: "Product engineer who also cares about UX polish.",
    avoidWhen: "You need a harder, more austere identity.",
  },
  {
    id: 11,
    font: "Figtree",
    family: '"Figtree", system-ui, sans-serif',
    google: "Figtree:wght@400;500;600;700",
    why: "Quietly excellent UI sans — open, readable, underused vs Inter. Feels fresh without being experimental.",
    personality: "Calm · Fresh · Approachable",
    weight: 600,
    tracking: "-0.025em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 8,
      modern: 8,
      premium: 8,
      memorability: 8,
      engineering: 8,
    },
    useWhen: "You want to escape Inter fatigue while staying safe.",
    avoidWhen: "Brand recognition of the typeface itself matters (it won’t).",
  },
  {
    id: 12,
    font: "Public Sans",
    family: '"Public Sans", system-ui, sans-serif',
    google: "Public+Sans:wght@400;500;600;700",
    why: "USWDS-derived — civic, institutional clarity. Extremely professional and trustworthy for government-adjacent / enterprise work.",
    personality: "Institutional · Clear · Trust",
    weight: 600,
    tracking: "-0.01em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 10,
      modern: 6,
      premium: 7,
      memorability: 5,
      engineering: 9,
    },
    useWhen: "Credibility and clarity beat brand personality.",
    avoidWhen: "You want a startup-premium or founder aesthetic.",
  },
  {
    id: 13,
    font: "Source Sans 3",
    family: '"Source Sans 3", system-ui, sans-serif',
    google: "Source+Sans+3:wght@400;500;600;700",
    why: "Adobe’s workhorse — long track record in tech docs and product UI. Quiet authority.",
    personality: "Documentation · Reliable · Neutral",
    weight: 600,
    tracking: "-0.015em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 9,
      modern: 6,
      premium: 7,
      memorability: 5,
      engineering: 9,
    },
    useWhen: "Docs-inspired portfolio (Stripe Docs energy).",
    avoidWhen: "You want a 2024–2026 trendy display wordmark.",
  },
  {
    id: 14,
    font: "Inter Tight",
    family: '"Inter Tight", "InterVariable", system-ui, sans-serif',
    google: "Inter+Tight:wght@400;500;600;700",
    why: "Inter’s tighter sibling — denser wordmarks that feel more logo-like while staying in the Inter family. Switzer-adjacent free option.",
    personality: "Compact · Premium · Modern",
    weight: 500,
    tracking: "-0.04em",
    caseStyle: "title",
    period: false,
    scores: {
      professional: 9,
      modern: 9,
      premium: 9,
      memorability: 7,
      engineering: 9,
    },
    useWhen: "You like Inter but want the name to feel more like a mark.",
    avoidWhen: "Body text will also use Tight — keep Tight for the wordmark only.",
  },
  {
    id: 15,
    font: "Albert Sans",
    family: '"Albert Sans", system-ui, sans-serif',
    google: "Albert+Sans:wght@400;500;600;700",
    why: "Clean geometric with gentle personality — modern European product aesthetic, underused in engineer portfolios.",
    personality: "Editorial · Clean · Distinct",
    weight: 500,
    tracking: "-0.025em",
    caseStyle: "title",
    period: true,
    scores: {
      professional: 8,
      modern: 9,
      premium: 8,
      memorability: 8,
      engineering: 7,
    },
    useWhen: "You want a quiet period-as-punctuation wordmark (Franchesco.) without gimmicks.",
    avoidWhen: "Periods feel too brand-studio / agency for your audience.",
  },
  {
    id: 16,
    font: "JetBrains Mono",
    family: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    google: "JetBrains+Mono:wght@400;500;600;700",
    why: "A developer-native mono that feels precise and engineered without becoming terminal cosplay. It is readable, mature, and strongly tied to software craft.",
    personality: "Technical · Precise · Developer",
    weight: 500,
    tracking: "-0.03em",
    caseStyle: "title",
    period: true,
    scores: {
      professional: 8,
      modern: 8,
      premium: 6,
      memorability: 9,
      engineering: 10,
    },
    useWhen: "You want the wordmark to lean into software engineering more directly while staying restrained.",
    avoidWhen: "You want the portfolio to feel more product/brand than code/editor.",
  },
];

export function formatWordmark(
  base: string,
  caseStyle: "title" | "upper" | "lower",
  period: boolean,
) {
  let text = base;
  if (caseStyle === "upper") text = base.toUpperCase();
  if (caseStyle === "lower") text = base.toLowerCase();
  if (caseStyle === "title")
    text = base.charAt(0).toUpperCase() + base.slice(1).toLowerCase();
  return period ? `${text}.` : text;
}

export function averageScore(c: TypographyConcept) {
  const s = c.scores;
  return (
    (s.professional + s.modern + s.premium + s.memorability + s.engineering) /
    5
  );
}
