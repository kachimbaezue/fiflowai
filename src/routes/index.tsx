import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight02Icon,
  ArrowRight02Icon,
  ChartLineData01Icon,
  Brain02Icon,
  RocketIcon,
  TimeQuarter02Icon,
  CustomerService01Icon,
  PackageDeliveredIcon,
  TicketStarIcon,
  Mail01Icon,
  CheckmarkCircle02Icon,
  Loading03Icon,
  Add01Icon,
  Remove01Icon,
  Menu01Icon,
  Cancel01Icon,
  
} from "hugeicons-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FiFlowAI — From store data to clear next steps" },
      {
        name: "description",
        content:
          "FiFlowAI explains what's happening in your store, why, and the actions to take next. Built for Shopify, Meta Ads, Google Analytics & more.",
      },
      { name: "keywords", content: "ecommerce AI, inventory forecasting, Shopify analytics, sales insights, AI analytics platform, retail intelligence" },
      { property: "og:title", content: "FiFlowAI — From store data to clear next steps" },
      {
        property: "og:description",
        content: "Turn complex store data into smart, actionable insights. Skip the manual analysis.",
      },
      { property: "og:site_name", content: "FiFlowAI" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://fiflowai.com/" },
    ],
  }),
  component: Landing,
});

const LOGO = "https://app.fiflowai.com/fiflow-logo.png";
const CONTAINER = "mx-auto w-full max-w-5xl px-5 sm:px-6";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#sources", label: "Data sources" },
    { href: "#operators", label: "Operators" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className={`${CONTAINER} pt-3 sm:pt-4`}>
        <div
          className={`flex h-13 items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "border-border/70 bg-background/80 shadow-[0_8px_30px_-12px_rgba(49,53,109,0.15)] backdrop-blur-xl"
              : "border-transparent bg-background/40 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2 pl-2" aria-label="FiFlowAI home">
            <img
              src={LOGO}
              alt="FiFlowAI"
              className="h-7 w-7 rounded-md transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110"
            />
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5">
            <a
              href="https://app.fiflowai.com/login"
              className="hidden rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground sm:inline-block"
            >
              Sign in
            </a>
            <a
              href="https://app.fiflowai.com/upgrade"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-ink-foreground shadow-[0_8px_20px_-8px_rgba(49,53,109,0.6)] transition-all duration-300 hover:shadow-[0_12px_28px_-8px_rgba(49,53,109,0.7)] sm:text-sm"
            >
              Get started
              <ArrowRight02Icon size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <Cancel01Icon size={16} /> : <Menu01Icon size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-border bg-background/95 p-2 backdrop-blur-xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://app.fiflowai.com/login"
              className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-muted/40">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="h-[420px] w-[820px] max-w-full rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className={`${CONTAINER} pt-10 pb-0 sm:pt-16`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h1 className="text-[1.9rem] leading-[1.05] sm:text-5xl md:text-[3.5rem]">
            From store data to clear next steps.
          </h1>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            FiFlowAI explains what&apos;s happening in your store, why it&apos;s happening, and the
            exact actions to take next. No dashboards to learn, no manual analysis.
          </p>
          <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
            <a
              href="https://app.fiflowai.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground shadow-[0_10px_30px_-12px_rgba(49,53,109,0.6)] transition-all hover:shadow-[0_16px_40px_-12px_rgba(49,53,109,0.8)]"
            >
              Start analyzing free
              <ArrowRight02Icon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Hero preview — bleeds into next section */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent/10 blur-2xl"
          />
          <div className="overflow-hidden rounded-t-2xl border border-b-0 border-border bg-surface shadow-[0_40px_100px_-40px_rgba(49,53,109,0.4)]">
            <img
              src="/hero-preview.png"
              alt="FiFlowAI dashboard preview"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <SectionLabel>Features</SectionLabel>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Your AI partner for store decisions.</h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Built for operators who want answers — not another analytics tool to learn.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
          {/* Big card — the why */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 md:col-span-2 md:row-span-2">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Brain02Icon size={14} className="text-accent" /> Understands the why
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl">
              Goes beyond dashboards. <span className="text-muted-foreground">Explains the cause behind every spike, dip and shift.</span>
            </h3>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold">1</span>
                <p className="text-sm text-foreground">
                  Revenue is up <span className="font-semibold">+18.4%</span> this week — driven by your Lookalike 1% set.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold">2</span>
                <p className="text-sm text-foreground">
                  ROAS dropped on Search — pause 3 underperformers to recover ~<span className="font-semibold">$420/wk</span>.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold">3</span>
                <p className="text-sm text-foreground">
                  AOV improved <span className="font-semibold">+$3</span> after the bundle test on PDP.
                </p>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
          </div>

          {/* 10x card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <RocketIcon size={14} className="text-accent" /> Saves time
            </div>
            <div className="mt-4 font-display text-6xl leading-none text-foreground">10x</div>
            <p className="mt-3 text-sm text-muted-foreground">Faster than manual analysis across Shopify, Ads & GA.</p>
          </div>

          {/* Actions card */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <ChartLineData01Icon size={14} className="text-accent" /> Actions, not charts
            </div>
            <h3 className="mt-3 text-base font-semibold">A prioritized to-do, every morning.</h3>
            <div className="mt-3 space-y-1.5">
              {["Pause underperforming sets", "Restock 2 SKUs running low", "Send win-back to lapsed VIPs"].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-lg bg-background px-2.5 py-1.5 text-xs">
                  <CheckmarkCircle02Icon size={12} className="text-accent" />
                  <span className="truncate">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub features row */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
              <TimeQuarter02Icon size={18} />
            </div>
            <h3 className="mt-3 text-base">Always-on monitoring</h3>
            <p className="mt-1 text-sm text-muted-foreground">We watch your data 24/7 and surface what changed and why.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
              <RocketIcon size={18} />
            </div>
            <h3 className="mt-3 text-base">Scales with you</h3>
            <p className="mt-1 text-sm text-muted-foreground">From your first $10k month to $10m+, insights stay relevant.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataSources() {
  const sources = [
    { name: "Shopify", icon: "https://app.fiflowai.com/shopify-icon.png" },
    { name: "Meta Ads", icon: "https://app.fiflowai.com/meta-ads-logo.png" },
    { name: "Google Analytics", icon: "https://app.fiflowai.com/google-analytics-icon.png" },
    { name: "CSV / Excel", icon: null },
  ];
  return (
    <section id="sources" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Connect once</SectionLabel>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Plugs into the tools you already run on.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
              Bring your sales, ad and analytics data in minutes. FiFlow stitches it together so
              you get one clear story instead of five tabs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {sources.map((s) => (
              <div
                key={s.name}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(49,53,109,0.25)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-background ring-1 ring-border">
                  {s.icon ? (
                    <img src={s.icon} alt={s.name} className="h-6 w-6 object-contain" />
                  ) : (
                    <span className="font-display text-xs">CSV</span>
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">Connected source</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Operators() {
  const ops = [
    { icon: CustomerService01Icon, title: "Customer Support", desc: "Handle common inquiries, FAQs and tickets automatically — around the clock." },
    { icon: PackageDeliveredIcon, title: "Order Management", desc: "Track, update and follow up on orders. Catch issues before customers do." },
    { icon: TicketStarIcon, title: "Ticketing & Escalation", desc: "Route and prioritize tickets intelligently. Escalate only what truly needs a human." },
    { icon: Mail01Icon, title: "Follow-ups & Outreach", desc: "Send timely follow-ups after purchases, abandoned carts or support interactions." },
  ];
  return (
    <section id="operators" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            <Loading03Icon size={12} className="animate-spin-slow" />
            Coming soon
          </span>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Operators — automation that does the work.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Operators automate the repetitive work that eats your day, so you focus on what moves
            the needle.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ops.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-[0_20px_40px_-20px_rgba(49,53,109,0.2)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Soon</span>
              </div>
              <h3 className="mt-4 text-base sm:text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/mo",
      desc: "For new stores getting their first insights.",
      cta: "Start for free",
      featured: false,
      features: [
        "Up to 1 connected store",
        "Shopify, Meta Ads & GA",
        "CSV / Excel uploads",
        "Weekly insight digest",
      ],
    },
    {
      name: "Growth",
      price: "$79",
      period: "/mo",
      desc: "For scaling brands that need answers fast.",
      cta: "Get Growth",
      featured: true,
      features: [
        "Unlimited stores & sources",
        "Daily action plans",
        "Priority insight processing",
        "Early access to Operators",
        "Email & chat support",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Simple plans. Real outcomes.</h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Pick the plan that fits your store. Upgrade or cancel anytime.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "relative overflow-hidden rounded-2xl border border-ink bg-ink p-6 text-ink-foreground shadow-[0_30px_60px_-30px_rgba(49,53,109,0.6)] sm:p-8"
                  : "relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8"
              }
            >
              {p.featured && (
                <>
                  <span className="absolute right-4 top-4 rounded-full bg-ink-foreground/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                    Popular
                  </span>
                  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                </>
              )}
              <div className="text-sm font-semibold">{p.name}</div>
              <div className={`mt-1 text-xs ${p.featured ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
                {p.desc}
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-5xl">{p.price}</span>
                <span className={p.featured ? "text-sm text-ink-foreground/70" : "text-sm text-muted-foreground"}>
                  {p.period}
                </span>
              </div>
              <a
                href="https://app.fiflowai.com/upgrade"
                className={
                  p.featured
                    ? "group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-foreground px-4 py-2.5 text-sm font-semibold text-ink hover:opacity-90"
                    : "group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground hover:opacity-90"
                }
              >
                {p.cta}
                <ArrowUpRight02Icon size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckmarkCircle02Icon
                      size={16}
                      className={p.featured ? "mt-0.5 text-ink-foreground/80" : "mt-0.5 text-accent"}
                    />
                    <span className={p.featured ? "text-ink-foreground/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "What is FiFlowAI?", a: "FiFlowAI is an AI business analyst for e-commerce. It connects your store and ad data, explains what's happening, why, and what to do next." },
  { q: "Which platforms do you support?", a: "Shopify, Meta Ads, Google Analytics, and CSV / Excel uploads. More integrations are on the way." },
  { q: "How long does it take to set up?", a: "Most users are connected and getting their first insights in under 5 minutes." },
  { q: "Is my data secure?", a: "Yes. Data is encrypted in transit and at rest. We never sell or share your data, and you can disconnect any source at any time." },
  { q: "Can I cancel anytime?", a: "Yes — both Starter and Growth plans are month-to-month with no lock-in." },
  { q: "What are Operators?", a: "Operators are upcoming AI agents that handle repetitive operations — customer support, order updates, follow-ups and ticketing — on your behalf." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Questions, answered.</h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Still curious?{" "}
            <a href="mailto:hello@fiflowai.com" className="text-foreground underline underline-offset-4">
              Email us
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={item.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full text-left transition-colors hover:bg-background"
              >
                <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                  <span className="text-sm font-semibold sm:text-base">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-ink text-ink-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {isOpen ? <Remove01Icon size={12} /> : <Add01Icon size={12} />}
                  </span>
                </div>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="min-h-0 overflow-hidden px-5 pb-5 text-sm text-muted-foreground sm:px-6 sm:pb-6">
                    {item.a}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden">
      {/* CTA card */}
      <div className={CONTAINER}>
        <div className="relative overflow-hidden rounded-3xl border border-ink bg-ink p-8 text-ink-foreground sm:p-12">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl">Ready to see your store clearly?</h2>
              <p className="mt-2 max-w-md text-sm text-ink-foreground/70">
                Connect once. Get answers, not dashboards.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <a
                href="https://app.fiflowai.com/upgrade"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-foreground px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90"
              >
                Start for free
                <ArrowRight02Icon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:hello@fiflowai.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-ink-foreground hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className={`${CONTAINER} pb-10 pt-12 sm:pt-16`}>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2" aria-label="FiFlowAI">
              <img src={LOGO} alt="FiFlowAI" className="h-7 w-7 rounded-md" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              From store data to clear next steps — built for the operators behind the brand.
            </p>
            <a
              href="mailto:hello@fiflowai.com"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground hover:bg-muted"
            >
              <Mail01Icon size={14} />
              <span>hello@fiflowai.com</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Product</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#sources" className="text-muted-foreground hover:text-foreground">Data sources</a></li>
              <li><a href="#operators" className="text-muted-foreground hover:text-foreground">Operators</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Company</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="mailto:hello@fiflowai.com" className="text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Legal</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="https://app.fiflowai.com/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
              <li><a href="https://app.fiflowai.com/terms-and-conditions" className="text-muted-foreground hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-12 select-none overflow-hidden">
          <div className="font-display text-[18vw] leading-none tracking-tight text-foreground/[0.06] md:text-[10rem]">
            FiFlowAI
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} FiFlowAI. All rights reserved.</div>
          <div>Made for e-commerce operators.</div>
        </div>
      </div>
       {/* Hidden link to keep faq route reachable */}
      <Link to="/faq" className="sr-only">FAQ page</Link>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <DataSources />
      <Operators />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
