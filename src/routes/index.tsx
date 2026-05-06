import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight02Icon,
  ArrowRight02Icon,
  SparklesIcon,
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

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
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-border bg-surface/80 px-3 py-2 pl-4 backdrop-blur-md sm:px-4 sm:py-2.5">
        <a href="#top" className="flex items-center gap-2">
          <img src={LOGO} alt="FiFlowAI" className="h-7 w-7 rounded-md" />
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
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-ink-foreground transition-transform hover:scale-[1.02] sm:text-sm"
        >
          Get started
          <ArrowRight02Icon size={16} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-4 pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-4xl border border-border bg-surface p-6 sm:p-12 lg:p-16">
          {/* decorative grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative">
            <div className="flex justify-center">
              <Pill>
                <SparklesIcon size={12} className="text-accent-foreground" />
                AI business analyst for e-commerce
              </Pill>
            </div>
            <h1 className="mx-auto mt-6 max-w-3xl text-center text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              From store data <br className="hidden sm:block" /> to clear next steps.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
              FiFlowAI explains what&apos;s happening in your store, why it&apos;s happening, and
              the actions to take next — without the manual analysis.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://app.fiflowai.com/upgrade"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Start for free
                <ArrowRight02Icon size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted sm:w-auto"
              >
                See how it works
              </a>
            </div>

            {/* Mock insight card */}
            <div className="relative mx-auto mt-12 max-w-3xl">
              <div className="rounded-3xl border border-border bg-background p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-ink-foreground">
                      <SparklesIcon size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">FiFlow Insight</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Just now</div>
                    </div>
                  </div>
                  <Pill>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Action ready
                  </Pill>
                </div>
                <p className="mt-4 text-sm leading-relaxed sm:text-base">
                  Revenue is up <span className="font-semibold">+18.4%</span> this week, driven by
                  your Meta Ads <span className="rounded-md bg-accent/40 px-1.5 py-0.5 font-medium">Lookalike 1%</span> set.
                  ROAS dropped on <span className="font-medium">Search</span> — pause 3 underperformers to recover ~$420/wk.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { k: "Revenue", v: "$42.1k", d: "+18.4%" },
                    { k: "ROAS", v: "3.2x", d: "+0.4" },
                    { k: "AOV", v: "$68", d: "+$3" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-2xl border border-border bg-surface p-3">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                      <div className="mt-1 text-lg font-semibold sm:text-xl">{s.v}</div>
                      <div className="text-xs text-emerald-600">{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: Brain02Icon,
      title: "Understands the why",
      desc: "Goes beyond dashboards. Explains the cause behind every spike, dip and shift.",
    },
    {
      icon: ChartLineData01Icon,
      title: "Turns data into actions",
      desc: "Get a prioritized list of what to do next — not another chart to read.",
    },
    {
      icon: TimeQuarter02Icon,
      title: "Saves hours weekly",
      desc: "Skip manual analysis across Shopify, Meta Ads and Analytics.",
    },
    {
      icon: RocketIcon,
      title: "Works as you scale",
      desc: "From your first $10k month to $10m+, insights stay relevant and timely.",
    },
  ];
  return (
    <section id="features" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <SectionLabel>Why FiFlow</SectionLabel>
          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl">
            Your AI partner for store decisions.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Built for operators who want answers — not another analytics tool to learn.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* Big card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-6 text-ink-foreground sm:p-8 lg:col-span-7 lg:row-span-2">
            <div className="flex items-center justify-between">
              <SectionLabel>
                <span className="text-ink-foreground/70">Live Insight</span>
              </SectionLabel>
              <ArrowUpRight02Icon size={18} className="opacity-70" />
            </div>
            <h3 className="mt-6 text-2xl text-ink-foreground sm:text-3xl md:text-4xl">
              See exactly what to fix, ship or scale this week.
            </h3>
            <p className="mt-3 max-w-md text-sm text-ink-foreground/70">
              FiFlow ranks opportunities by revenue impact and tells you what action will move
              the needle today.
            </p>
            <div className="mt-8 space-y-2.5">
              {[
                "Pause 3 ad sets losing $420/wk",
                "Restock 'Linen Tee — M' before Friday",
                "Re-engage 1,240 customers gone cold",
              ].map((t, i) => (
                <div
                  key={t}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs text-ink-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{t}</span>
                  </div>
                  <ArrowRight02Icon size={14} className="opacity-60" />
                </div>
              ))}
            </div>
          </div>

          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-surface p-6 lg:col-span-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/40">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-lg sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
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
    <section id="sources" className="px-4 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl rounded-4xl border border-border bg-surface p-6 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Connect once</SectionLabel>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
              Plugs into the tools you already run on.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
              Bring your sales, ad and analytics data in minutes. FiFlow stitches it together so
              you get one clear story instead of five tabs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {sources.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-background p-4 sm:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface ring-1 ring-border">
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
    {
      icon: CustomerService01Icon,
      title: "Customer Support",
      desc: "Handle common inquiries, FAQs and tickets automatically — around the clock.",
    },
    {
      icon: PackageDeliveredIcon,
      title: "Order Management",
      desc: "Track, update and follow up on orders. Catch issues before customers do.",
    },
    {
      icon: TicketStar01Icon,
      title: "Ticketing & Escalation",
      desc: "Route and prioritize tickets intelligently. Escalate only what truly needs a human.",
    },
    {
      icon: Mail01Icon,
      title: "Follow-ups & Outreach",
      desc: "Send timely follow-ups after purchases, abandoned carts or support interactions.",
    },
  ];
  return (
    <section id="operators" className="px-4 pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <Pill>
            <Loading03Icon size={12} />
            Coming soon
          </Pill>
          <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl">
            Meet Operators — automation that does the work.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            FiFlow is getting smarter. Operators automate the repetitive work that eats your day,
            so you focus on what moves the needle.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ops.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors hover:bg-background"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/40">
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Soon
                </span>
              </div>
              <h3 className="mt-5 text-lg sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const features = [
    "Unlimited insights across your stack",
    "Shopify, Meta Ads & GA integrations",
    "CSV / Excel uploads",
    "Weekly action plan delivered to your inbox",
    "Early access to Operators",
  ];
  return (
    <section id="pricing" className="px-4 pb-20 sm:pb-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-4xl border border-border bg-ink p-6 text-ink-foreground sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div className="relative">
            <SectionLabel>
              <span className="text-ink-foreground/70">Pricing</span>
            </SectionLabel>
            <h2 className="mt-3 max-w-xl text-3xl text-ink-foreground sm:text-4xl md:text-5xl">
              One plan. Everything to run smarter.
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink-foreground/70 sm:text-base">
              Pick the plan that fits your store. Upgrade or cancel anytime.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckmarkCircle02Icon size={18} className="mt-0.5 text-accent" />
                  <span className="text-ink-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://app.fiflowai.com/upgrade"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                See plans
                <ArrowUpRight02Icon size={16} />
              </a>
              <a
                href="mailto:hello@fiflowai.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-ink-foreground hover:bg-white/5"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto max-w-6xl rounded-4xl border border-border bg-surface p-6 sm:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <img src={LOGO} alt="FiFlowAI" className="h-7 w-7 rounded-md" />
              <span className="text-sm font-semibold">FiFlowAI</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The AI business analyst for e-commerce store owners.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Product
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#features" className="hover:text-foreground text-muted-foreground">Features</a></li>
                <li><a href="#sources" className="hover:text-foreground text-muted-foreground">Data sources</a></li>
                <li><a href="#operators" className="hover:text-foreground text-muted-foreground">Operators</a></li>
                <li><a href="#pricing" className="hover:text-foreground text-muted-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Company
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="mailto:hello@fiflowai.com" className="hover:text-foreground text-muted-foreground">Contact</a></li>
                <li><a href="https://app.fiflowai.com/upgrade" className="hover:text-foreground text-muted-foreground">Get started</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Legal
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="https://app.fiflowai.com/privacy-policy" className="hover:text-foreground text-muted-foreground">Privacy Policy</a></li>
                <li><a href="https://app.fiflowai.com/terms-and-conditions" className="hover:text-foreground text-muted-foreground">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} FiFlowAI. All rights reserved.</div>
          <a href="mailto:hello@fiflowai.com" className="hover:text-foreground">hello@fiflowai.com</a>
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
