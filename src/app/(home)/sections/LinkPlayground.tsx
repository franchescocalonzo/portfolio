import SectionHeader from "@/components/SectionHeader";
import {
  LinkArrow,
  LinkHoverReveal,
  LinkIcon,
  LinkLabeled,
  LinkSheen,
  LinkSheenAmbient,
  LinkSheenMix,
  LinkTag,
  LinkText,
  LinkUnderline,
} from "@/components/ExternalLinks";

const COMPANY = { name: "Bell Canada", href: "https://www.bell.ca" };
const PRODUCT = { name: "SmartPort", href: "https://www.iqgeo.com" };
const BUILT_WITH = [
  { name: "React", href: "https://react.dev" },
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com" },
  { name: "Vercel", href: "https://vercel.com" },
];

type Option = {
  id: string;
  title: string;
  note: string;
  company: React.ReactNode;
  product: React.ReactNode;
  builtWith: React.ReactNode;
};

const options: Option[] = [
  {
    id: "01",
    title: "Subtle external arrow",
    note: "Arrow is invisible until hover, so a list of links stays quiet at rest.",
    company: <LinkArrow href={COMPANY.href}>{COMPANY.name}</LinkArrow>,
    product: <LinkArrow href={PRODUCT.href}>{PRODUCT.name}</LinkArrow>,
    builtWith: BUILT_WITH.map((tech) => (
      <LinkArrow key={tech.name} href={tech.href}>
        {tech.name}
      </LinkArrow>
    )),
  },
  {
    id: "02",
    title: "Editorial underline",
    note: "A hairline wipes in from the left. No icons anywhere.",
    company: <LinkUnderline href={COMPANY.href}>{COMPANY.name}</LinkUnderline>,
    product: <LinkUnderline href={PRODUCT.href}>{PRODUCT.name}</LinkUnderline>,
    builtWith: BUILT_WITH.map((tech) => (
      <LinkUnderline key={tech.name} href={tech.href}>
        {tech.name}
      </LinkUnderline>
    )),
  },
  {
    id: "03",
    title: "Hover reveal label",
    note: "Destination intent appears only on interaction. Strong for headline items.",
    company: (
      <LinkHoverReveal href={COMPANY.href} label="Visit">
        {COMPANY.name}
      </LinkHoverReveal>
    ),
    product: (
      <LinkHoverReveal href={PRODUCT.href} label="View project">
        {PRODUCT.name}
      </LinkHoverReveal>
    ),
    builtWith: BUILT_WITH.map((tech) => (
      <LinkHoverReveal key={tech.name} href={tech.href} label="Docs">
        {tech.name}
      </LinkHoverReveal>
    )),
  },
  {
    id: "04",
    title: "Minimal link glyph",
    note: "Always-visible but faint icon. Most discoverable, least quiet.",
    company: <LinkIcon href={COMPANY.href}>{COMPANY.name}</LinkIcon>,
    product: <LinkIcon href={PRODUCT.href}>{PRODUCT.name}</LinkIcon>,
    builtWith: BUILT_WITH.map((tech) => (
      <LinkIcon key={tech.name} href={tech.href}>
        {tech.name}
      </LinkIcon>
    )),
  },
  {
    id: "05",
    title: "Interactive text only",
    note: "Colour shift plus a 2px nudge. Cleanest, but easiest to miss.",
    company: <LinkText href={COMPANY.href}>{COMPANY.name}</LinkText>,
    product: <LinkText href={PRODUCT.href}>{PRODUCT.name}</LinkText>,
    builtWith: BUILT_WITH.map((tech) => (
      <LinkText key={tech.name} href={tech.href}>
        {tech.name}
      </LinkText>
    )),
  },
  {
    id: "06",
    title: "Contextual destination label",
    note: "Names the destination. Useful when the target is not obvious.",
    company: (
      <LinkLabeled href={COMPANY.href} label="Company website">
        {COMPANY.name}
      </LinkLabeled>
    ),
    product: (
      <LinkLabeled href={PRODUCT.href} label="View project">
        {PRODUCT.name}
      </LinkLabeled>
    ),
    builtWith: BUILT_WITH.map((tech) => (
      <LinkLabeled key={tech.name} href={tech.href} label="Docs">
        {tech.name}
      </LinkLabeled>
    )),
  },
  {
    id: "08",
    title: "Sheen on hover",
    note: "A light band sweeps through the letters once per hover. Quiet at rest.",
    company: <LinkSheen href={COMPANY.href}>{COMPANY.name}</LinkSheen>,
    product: <LinkSheen href={PRODUCT.href}>{PRODUCT.name}</LinkSheen>,
    builtWith: BUILT_WITH.map((tech) => (
      <LinkSheen key={tech.name} href={tech.href}>
        {tech.name}
      </LinkSheen>
    )),
  },
  {
    id: "09",
    title: "Ambient sheen (looping)",
    note: "Same sweep, but repeating without hover. Most noticeable, least calm.",
    company: (
      <LinkSheenAmbient href={COMPANY.href}>{COMPANY.name}</LinkSheenAmbient>
    ),
    product: (
      <LinkSheenAmbient href={PRODUCT.href}>{PRODUCT.name}</LinkSheenAmbient>
    ),
    builtWith: BUILT_WITH.map((tech) => (
      <LinkSheenAmbient key={tech.name} href={tech.href}>
        {tech.name}
      </LinkSheenAmbient>
    )),
  },
  {
    id: "10",
    title: "Sheen mix — ambient idle, sweep on hover",
    note: "Loops slowly so it gets noticed, then restarts a single sweep on interaction. Used on Bayad Web.",
    company: <LinkSheenMix href={COMPANY.href}>{COMPANY.name}</LinkSheenMix>,
    product: <LinkSheenMix href={PRODUCT.href}>{PRODUCT.name}</LinkSheenMix>,
    builtWith: BUILT_WITH.map((tech) => (
      <LinkSheenMix key={tech.name} href={tech.href}>
        {tech.name}
      </LinkSheenMix>
    )),
  },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] items-start gap-3">
      <span className="text-portfolio-subtle pt-0.5 text-[10px] font-medium tracking-[0.12em] uppercase">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {children}
      </div>
    </div>
  );
}

export default function LinkPlayground() {
  return (
    <section id="link-playground" aria-label="External link style comparison">
      <SectionHeader title="Link Style Playground" />
      <p className="text-portfolio-muted mb-6 text-sm leading-relaxed">
        Development-only comparison of external link treatments. Hover and tab
        through each row to compare pointer and keyboard behaviour.
      </p>
      <div className="flex flex-col gap-8">
        {options.map((option) => (
          <div key={option.id} className="flex flex-col gap-3">
            <div className="border-portfolio-card flex items-baseline gap-2 border-b pb-2">
              <span className="text-portfolio-subtle text-[11px] tabular-nums">
                {option.id}
              </span>
              <h3 className="text-portfolio text-sm font-medium">
                {option.title}
              </h3>
            </div>
            <p className="text-portfolio-subtle text-xs leading-relaxed">
              {option.note}
            </p>
            <div className="mt-1 flex flex-col gap-3">
              <Row label="Company">{option.company}</Row>
              <Row label="Product">{option.product}</Row>
              <Row label="Built with">{option.builtWith}</Row>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <div className="border-portfolio-card flex items-baseline gap-2 border-b pb-2">
          <span className="text-portfolio-subtle text-[11px] tabular-nums">
            11
          </span>
          <h3 className="text-portfolio text-sm font-medium">
            Recommended mix
          </h3>
        </div>
        <p className="text-portfolio-subtle text-xs leading-relaxed">
          Hierarchy-aware: reveal label for company, arrow for product, dotted
          rule for the dense Built With list.
        </p>
        <div className="mt-1 flex flex-col gap-3">
          <Row label="Company">
            <LinkHoverReveal href={COMPANY.href} label="Visit">
              {COMPANY.name}
            </LinkHoverReveal>
          </Row>
          <Row label="Product">
            <LinkArrow href={PRODUCT.href}>{PRODUCT.name}</LinkArrow>
          </Row>
          <Row label="Built with">
            {BUILT_WITH.map((tech) => (
              <LinkTag key={tech.name} href={tech.href}>
                {tech.name}
              </LinkTag>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
