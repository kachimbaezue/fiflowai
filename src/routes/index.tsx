import { createFileRoute } from "@tanstack/react-router";
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
} from "hugeicons-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FiFlowAI — AI insights for e-commerce store owners" },
      {
        name: "description",
        content:
          "FiFlowAI analyzes your store data to explain what's happening, why, and what to do next. Built for Shopify, Meta Ads, Google Analytics & more.",
      },
      { property: "og:title", content: "FiFlowAI — Your AI business analyst" },
      {
        property: "og:description",
        content:
          "Turn complex store data into smart, actionable insights. Skip the manual analysis.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const LOGO = "https://app.fiflowai.com/fiflow-logo.png";
const CONTAINER = "mx-auto w-full max-w-5xl px-5 sm:px-6";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className={`${CONTAINER} flex h-14 items-center justify-between`}>
        <a href="#top" className="flex items-center gap-2">
          <img src={LOGO} alt="FiFlowAI" className="h-6 w-6 rounded-md" />
          <span className="text-sm font-semibold tracking-tight">FiFlowAI</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#sources" className="hover:text-foreground transition-colors">Data sources</a>
          <a href="#operators" className="hover:text-foreground transition-colors">Operators</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <a
          href="https://app.fiflowai.com/upgrade"
          className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3.5 py-1.5 text-xs font-semibold text-ink-foreground transition-transform hover:scale-[1.02] sm:text-sm"
        >
          Get started
          <ArrowRight02Icon size={14} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className={`${CONTAINER} pt-12 pb-10 sm:pt-20 sm:pb-16`}>
        <h1 className="mx-auto max-w-3xl text-center text-[2rem] leading-[1.05] sm:text-5xl md:text-6xl">
          From store data to clear next steps.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
          FiFlowAI explains what&apos;s happening in your store, why it&apos;s happening, and the
          actions to take next — without the manual analysis.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
          <a
            href="https://app.fiflowai.com/upgrade"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Start for free
            <ArrowRight02Icon size={16} />
          </a>
          <a
            href="#features"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted sm:w-auto"
          >
            See how it works
          </a>
        </div>

        {/* Hero preview image */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_30px_80px_-40px_rgba(49,53,109,0.35)]">
            <img
              src="/hero-preview.png"
              alt="FiFlowAI dashboard preview"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Brain02Icon, title: "Understands the why", desc: "Goes beyond dashboards. Explains the cause behind every spike, dip and shift." },
    { icon: ChartLineData01Icon, title: "Turns data into actions", desc: "Get a prioritized list of what to do next — not another chart to read." },
    { icon: TimeQuarter02Icon, title: "Saves hours weekly", desc: "Skip manual analysis across Shopify, Meta Ads and Analytics." },
    { icon: RocketIcon, title: "Works as you scale", desc: "From your first $10k month to $10m+, insights stay relevant and timely." },
  ];
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <SectionLabel>Features</SectionLabel>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            Your AI partner for store decisions.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Built for operators who want answers — not another analytics tool to learn.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-border bg-surface p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon size={18} />
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
              <div key={s.name} className="flex flex-col items-start gap-3 rounded-lg border border-border bg-surface p-4">
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
            <Loading03Icon size={12} />
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
            <div key={title} className="rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-background">
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
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
                  ? "relative rounded-lg border border-ink bg-ink p-6 text-ink-foreground sm:p-8"
                  : "relative rounded-lg border border-border bg-surface p-6 sm:p-8"
              }
            >
              {p.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-ink-foreground/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                  Popular
                </span>
              )}
              <div className="text-sm font-semibold">{p.name}</div>
              <div className={`mt-1 text-xs ${p.featured ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
                {p.desc}
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                <span className={p.featured ? "text-sm text-ink-foreground/70" : "text-sm text-muted-foreground"}>
                  {p.period}
                </span>
              </div>
              <a
                href="https://app.fiflowai.com/upgrade"
                className={
                  p.featured
                    ? "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink-foreground px-4 py-2.5 text-sm font-semibold text-ink hover:opacity-90"
                    : "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-ink-foreground hover:opacity-90"
                }
              >
                {p.cta}
                <ArrowUpRight02Icon size={14} />
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

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className={`${CONTAINER} py-12`}>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={LOGO} alt="FiFlowAI" className="h-6 w-6 rounded-md" />
              <span className="text-sm font-semibold">FiFlowAI</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              The AI business analyst for e-commerce store owners.
            </p>
            <a href="mailto:hello@fiflowai.com" className="mt-3 inline-block text-sm text-muted-foreground hover:text-foreground">
              hello@fiflowai.com
            </a>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Product</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#sources" className="text-muted-foreground hover:text-foreground">Data sources</a></li>
              <li><a href="#operators" className="text-muted-foreground hover:text-foreground">Operators</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Legal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="https://app.fiflowai.com/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="https://app.fiflowai.com/terms-and-conditions" className="text-muted-foreground hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} FiFlowAI. All rights reserved.
        </div>
      </div>
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
      <Footer />
    </main>
  );
}
