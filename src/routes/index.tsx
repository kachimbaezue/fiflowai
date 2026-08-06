import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight02Icon,
  ArrowRight02Icon,
  ArrowUp01Icon,
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
  ConnectIcon,
  MagicWand01Icon,
  CheckListIcon,
  Download04Icon,
} from "hugeicons-react";

/** Fires once when element scrolls into view, adds `in-view` class */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

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

function LogoDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-2 pl-2"
        aria-label="FiFlowAI logo options"
      >
        <img
          src={LOGO}
          alt="FiFlowAI"
          className="h-7 w-7 rounded-md transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110"
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-52 rounded-xl border border-border bg-background shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] p-1 z-50">
          <a
            href={LOGO}
            download="fiflowai-logo.png"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted"
          >
            <Download04Icon size={15} className="text-muted-foreground" />
            Download logo
          </a>
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            Back to top
          </a>
        </div>
      )}
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
    { href: "#how-it-works", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#sources", label: "Integrations" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className={`${CONTAINER} py-2.5`}>
        <div
          className={`flex h-12 items-center justify-between gap-3 rounded-xl border px-3 transition-all duration-300 ${
            scrolled
              ? "border-border/70 bg-background/90 shadow-[0_4px_24px_-8px_rgba(49,53,109,0.18)] backdrop-blur-xl"
              : "border-border/30 bg-background/60 backdrop-blur-md"
          }`}
        >
          <LogoDropdown />
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5">
            <a
              href="https://app.fiflowai.com/login"
              className="hidden rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground sm:inline-block"
            >
              Sign in
            </a>
            <a
              href="https://app.fiflowai.com/"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-xs font-semibold text-ink-foreground shadow-[0_8px_20px_-8px_rgba(49,53,109,0.6)] transition-all duration-300 hover:shadow-[0_12px_28px_-8px_rgba(49,53,109,0.7)] sm:text-sm"
            >
              Get started
              <ArrowRight02Icon size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <Cancel01Icon size={16} /> : <Menu01Icon size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu — overlay, does not push page */}
        {open && (
          <div className="fixed inset-0 z-50 md:hidden" onClick={() => setOpen(false)}>
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
            <div
              className="absolute right-4 top-4 w-64 rounded-xl border border-border bg-background shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-3 py-2">
                <img src={LOGO} alt="FiFlowAI" className="h-6 w-6 rounded-md" />
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
                  aria-label="Close menu"
                >
                  <Cancel01Icon size={14} />
                </button>
              </div>
              <div className="mt-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-muted"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-2 border-t border-border pt-2">
                <a
                  href="https://app.fiflowai.com/login"
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  Sign in
                </a>
                <a
                  href="https://app.fiflowai.com/"
                  className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-ink px-3 py-2.5 text-sm font-semibold text-ink-foreground"
                >
                  Get started
                  <ArrowRight02Icon size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hero-animate">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center">
        <div className="h-[500px] w-[900px] max-w-full rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className={`${CONTAINER} pt-12 pb-0 sm:pt-20`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div className="flex flex-col items-start gap-6">


            <h1 className="animate-fade-up delay-100 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              Stop guessing.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Start growing your store.</span>
              </span>
            </h1>


            <div className="animate-fade-up delay-300 grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-row">
              <a
                href="https://app.fiflowai.com/"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground shadow-[0_10px_30px_-12px_rgba(49,53,109,0.6)] transition-all hover:shadow-[0_16px_40px_-12px_rgba(49,53,109,0.8)]"
              >
                Get started
                <ArrowRight02Icon size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="animate-slide-right delay-200 relative lg:mt-0 -mx-5 sm:-mx-6 lg:mx-0">
            <div aria-hidden className="absolute -inset-3 -z-10 rounded-xl bg-gradient-to-tr from-accent/20 via-transparent to-accent/10 blur-2xl" />
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_40px_100px_-40px_rgba(49,53,109,0.35)] lg:rounded-l-xl lg:rounded-r-none lg:border-r-0">
              <img src="/hero-preview.png" alt="FiFlowAI dashboard preview" className="h-auto w-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  const ref = useInView(0.2) as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="mx-auto max-w-3xl">
          <div className="animate-fade-up delay-0">
            <SectionLabel>What is FiFlow?</SectionLabel>
          </div>

          <h2 className="animate-fade-up delay-100 mt-5 text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
            An AI business analyst{" "}
            <span className="text-muted-foreground">for Shopify brands.</span>
          </h2>

          <p className="animate-fade-up delay-200 mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            FiFlow watches your store, ads and analytics, explains what is happening, and tells you exactly what to do next. No analyst needed. No manual reports.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
            {["Founders", "Marketers", "Ecommerce operators"].map((role) => (
              <span
                key={role}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {role}
              </span>
            ))}
          </div>

          <p className="animate-fade-up delay-400 mt-5 text-sm text-muted-foreground">
            Built for stores doing{" "}
            <span className="font-semibold text-foreground">$5k to $10M+ in revenue.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const ref = useInView(0.1) as React.RefObject<HTMLElement>;
  const signals = [
    {
      source: "Shopify",
      icon: "https://app.fiflowai.com/shopify-icon.png",
      says: "Revenue is up this week.",
      color: "text-emerald-500",
      delay: "delay-200",
    },
    {
      source: "Meta Ads",
      icon: "https://app.fiflowai.com/meta-ads-logo.png",
      says: "ROAS dropped on your top campaign.",
      color: "text-red-400",
      delay: "delay-300",
    },
    {
      source: "Google Analytics",
      icon: "https://app.fiflowai.com/google-analytics-icon.png",
      says: "Traffic is up but conversions fell.",
      color: "text-amber-400",
      delay: "delay-400",
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="mx-auto max-w-3xl">

          <div className="animate-fade-up delay-0">
            <SectionLabel>The problem</SectionLabel>
          </div>
          <h2 className="animate-fade-up delay-100 mt-5 text-3xl sm:text-4xl">
            Stop checking five dashboards every morning.
          </h2>
          <p className="animate-fade-up delay-150 mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
            Every tool tells you something different. None of them tell you what to do about it.
          </p>

          {/* Signal chaos — staggered */}
          <div className="mt-10 space-y-3">
            {signals.map((item) => (
              <div
                key={item.source}
                className={`animate-slide-left ${item.delay} flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-background ring-1 ring-border">
                  <img src={item.icon} alt={item.source} className="h-5 w-5 object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.source}</div>
                  <p className={`mt-0.5 text-sm font-medium ${item.color}`}>{item.says}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Connector */}
          <div className="animate-fade-in delay-500 my-4 flex justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* FiFlow resolution */}
          <div className="animate-scale-in delay-600 rounded-xl border border-ink bg-ink p-6 text-ink-foreground sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-foreground/10">
                <Brain02Icon size={18} className="text-ink-foreground" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-ink-foreground/50">FiFlow</div>
                <p className="mt-2 text-sm sm:text-base text-ink-foreground leading-relaxed">
                  Revenue is up because your Lookalike 1% set is performing. But ROAS is dragging your blended return. Pause 3 underperformers and recover{" "}
                  <span className="font-semibold">~$420/wk.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const ref = useInView(0.15) as React.RefObject<HTMLElement>;
  const steps = [
    {
      icon: ConnectIcon,
      step: "1",
      title: "Connect your store",
      desc: "Link Shopify, Meta Ads and Google Analytics in minutes. No code, no CSV exports.",
      delay: "delay-100",
    },
    {
      icon: MagicWand01Icon,
      step: "2",
      title: "FiFlow analyzes everything",
      desc: "Our AI reads your data across every source and finds what's actually driving results.",
      delay: "delay-200",
    },
    {
      icon: CheckListIcon,
      step: "3",
      title: "Get today's action plan",
      desc: "Every morning you get a prioritized list of exactly what to do next. No noise.",
      delay: "delay-300",
    },
  ];
  return (
    <section ref={ref} id="how-it-works" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <div className="animate-fade-up delay-0"><SectionLabel>How it works</SectionLabel></div>
          <h2 className="animate-fade-up delay-100 max-w-2xl text-3xl sm:text-4xl">Up and running in under 5 minutes.</h2>
          <p className="animate-fade-up delay-200 max-w-xl text-sm text-muted-foreground sm:text-base">
            No analyst needed. No manual reports. Just connect and let FiFlow do the rest.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, desc, delay }) => (
            <div
              key={step}
              className={`animate-fade-up ${delay} group relative rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(49,53,109,0.2)]`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <span className="font-display text-4xl leading-none text-foreground/10">{step}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const ref = useInView(0.1) as React.RefObject<HTMLElement>;
  return (
    <section ref={ref} id="features" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <div className="animate-fade-up delay-0"><SectionLabel>Features</SectionLabel></div>
          <h2 className="animate-fade-up delay-100 max-w-2xl text-3xl sm:text-4xl">Why teams love it.</h2>
          <p className="animate-fade-up delay-200 max-w-xl text-sm text-muted-foreground sm:text-base">
            Built for operators who want answers, not another tool to learn.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
          <div className="animate-slide-left delay-200 group relative overflow-hidden rounded-xl border border-border bg-surface p-6 md:col-span-2 md:row-span-2">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Brain02Icon size={14} className="text-accent" /> Know why your numbers changed.
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl">
              Goes beyond dashboards. <span className="text-muted-foreground">Explains the cause behind every spike, dip and shift.</span>
            </h3>
            <div className="mt-6 space-y-2.5">
              {[
                { n: "1", text: <>Revenue is up <span className="font-semibold">+18.4%</span> this week, driven by your Lookalike 1% set.</> },
                { n: "2", text: <>ROAS dropped on Search. Pause 3 underperformers to recover ~<span className="font-semibold">$420/wk</span>.</> },
                { n: "3", text: <>AOV improved <span className="font-semibold">+$3</span> after the bundle test on PDP.</> },
              ].map(({ n, text }) => (
                <div key={n} className="flex items-start gap-3 rounded-xl border border-border bg-background p-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold">{n}</span>
                  <p className="text-sm text-foreground">{text}</p>
                </div>
              ))}
            </div>
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
          </div>

          <div className="animate-fade-up delay-300 relative overflow-hidden rounded-xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <RocketIcon size={14} className="text-accent" /> Stop digging through dashboards.
            </div>
            <div className="mt-4 font-display text-6xl leading-none text-foreground">10x</div>
            <p className="mt-3 text-sm text-muted-foreground">Faster than manual analysis across Shopify, Ads and GA.</p>
          </div>

          <div className="animate-fade-up delay-400 relative overflow-hidden rounded-xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <ChartLineData01Icon size={14} className="text-accent" /> Actions, not charts.
            </div>
            <h3 className="mt-3 text-base font-semibold">A prioritized to-do list, every morning.</h3>
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

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="animate-fade-up delay-300 rounded-xl border border-border bg-surface p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
              <TimeQuarter02Icon size={18} />
            </div>
            <h3 className="mt-3 text-base">We tell you when something needs attention.</h3>
            <p className="mt-1 text-sm text-muted-foreground">FiFlow watches your data 24/7 and surfaces what changed and why, before it becomes a problem.</p>
          </div>
          <div className="animate-fade-up delay-400 rounded-xl border border-border bg-surface p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
              <RocketIcon size={18} />
            </div>
            <h3 className="mt-3 text-base">Scales with you.</h3>
            <p className="mt-1 text-sm text-muted-foreground">From your first $5k month to $10M+, insights stay relevant as your store grows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataSources() {
  const ref = useInView(0.15) as React.RefObject<HTMLElement>;
  const sources = [
    { name: "Shopify", icon: "https://app.fiflowai.com/shopify-icon.png" },
    { name: "Meta Ads", icon: "https://app.fiflowai.com/meta-ads-logo.png" },
    { name: "Google Analytics", icon: "https://app.fiflowai.com/google-analytics-icon.png" },
    { name: "CSV / Excel", icon: null },
  ];
  return (
    <section ref={ref} id="sources" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="animate-fade-up delay-0"><SectionLabel>Integrations</SectionLabel></div>
            <h2 className="animate-fade-up delay-100 mt-3 text-3xl sm:text-4xl">
              Plugs into the tools you already use.
            </h2>
            <p className="animate-fade-up delay-200 mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
              Connect Shopify, Meta Ads and Google Analytics in minutes. FiFlow combines everything into one AI analyst that explains what is happening and what to do next.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {sources.map((s, i) => (
              <div
                key={s.name}
                className={`animate-fade-up delay-${[200, 300, 400, 500][i]} group flex flex-col items-start gap-3 rounded-xl border border-border bg-surface p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(49,53,109,0.25)]`}
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
  const ref = useInView(0.1) as React.RefObject<HTMLElement>;
  const ops = [
    { icon: CustomerService01Icon, title: "Customer Support", desc: "Handle common inquiries, FAQs and tickets automatically — around the clock.", delay: "delay-200" },
    { icon: PackageDeliveredIcon, title: "Order Management", desc: "Track, update and follow up on orders. Catch issues before customers do.", delay: "delay-300" },
    { icon: TicketStarIcon, title: "Ticketing & Escalation", desc: "Route and prioritize tickets intelligently. Escalate only what truly needs a human.", delay: "delay-300" },
    { icon: Mail01Icon, title: "Follow-ups & Outreach", desc: "Send timely follow-ups after purchases, abandoned carts or support interactions.", delay: "delay-400" },
  ];
  return (
    <section ref={ref} id="operators" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <div className="animate-fade-up delay-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <Loading03Icon size={12} className="animate-spin-slow" />
              Coming soon
            </span>
          </div>
          <h2 className="animate-fade-up delay-100 max-w-2xl text-3xl sm:text-4xl">
            Coming Soon: AI Operators.
          </h2>
          <p className="animate-fade-up delay-200 max-w-xl text-sm text-muted-foreground sm:text-base">
            Once FiFlow understands your business, Operators will take action automatically. Think of it as the next evolution: from insights to execution.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ops.map(({ icon: Icon, title, desc, delay }) => (
            <div
              key={title}
              className={`animate-fade-up ${delay} group rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:bg-background hover:shadow-[0_20px_40px_-20px_rgba(49,53,109,0.2)]`}
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
  const ref = useInView(0.1) as React.RefObject<HTMLElement>;
  const [yearly, setYearly] = useState(false);

  const features = [
    "Unlimited Agentic Chat (Deep Investigation)",
    "Full Shopify, Meta Ads & GA4 Sync",
    "Daily Proactive Insights & Anomaly Alerts",
    "Inventory-Aware Ad Optimization",
    "Hourly Monitoring & Anomaly Alerts",
    "Net Profit Audit Tool",
    "Priority 1-on-1 Onboarding & Support",
  ];

  return (
    <section ref={ref} id="pricing" className="py-16 sm:py-24">
      <div className={CONTAINER}>

        {/* Billing switcher */}
        <div className="flex justify-center">
          <div className="animate-fade-up delay-0 inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                !yearly ? "bg-ink text-ink-foreground shadow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                yearly ? "bg-ink text-ink-foreground shadow" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="rounded-full bg-accent/20 px-1.5 py-0.5 text-[10px] font-semibold text-accent">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Single plan card */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="animate-scale-in delay-100 relative overflow-hidden rounded-2xl border border-ink bg-ink p-8 text-ink-foreground shadow-[0_30px_60px_-30px_rgba(49,53,109,0.6)]">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="text-sm font-semibold tracking-wide uppercase text-ink-foreground/60">FiFlow Pro</div>

            <div className="mt-4 flex items-end gap-2">
              <span className="font-display text-6xl leading-none">
                {yearly ? "$390" : "$39"}
              </span>
              <span className="mb-1 text-sm text-ink-foreground/60">
                {yearly ? "/year" : "/month"}
              </span>
            </div>

            {yearly && (
              <p className="mt-1.5 text-sm font-medium text-ink-foreground/70">
                $32.50 / mo — save 17%
              </p>
            )}

            <a
              href="https://app.fiflowai.com/upgrade"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink-foreground px-4 py-3 text-sm font-semibold text-ink transition-all hover:opacity-90"
            >
              Get started
              <ArrowUpRight02Icon size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <ul className="mt-7 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckmarkCircle02Icon size={16} className="mt-0.5 shrink-0 text-ink-foreground/70" />
                  <span className="text-ink-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
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
  const ref = useInView(0.1) as React.RefObject<HTMLElement>;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section ref={ref} id="faq" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <div className="flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <div className="animate-fade-up delay-0"><SectionLabel>FAQ</SectionLabel></div>
          <h2 className="animate-fade-up delay-100 max-w-2xl text-3xl sm:text-4xl">Questions, answered.</h2>
          <p className="animate-fade-up delay-200 max-w-xl text-sm text-muted-foreground sm:text-base">
            Still curious?{" "}
            <a href="mailto:hello@fiflowai.com" className="text-foreground underline underline-offset-4">
              Email us
            </a>
            .
          </p>
        </div>

        <div className="animate-fade-up delay-300 mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
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
  const ctaRef = useInView(0.2) as React.RefObject<HTMLDivElement>;
  return (
    <footer className="relative mt-10 overflow-hidden">
      {/* CTA card */}
      <div className={CONTAINER}>
        <div
          ref={ctaRef}
          className="relative overflow-hidden rounded-xl border border-ink bg-ink p-8 text-ink-foreground sm:p-12"
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="animate-fade-up delay-0 text-2xl sm:text-3xl">Ready to see your store clearly?</h2>
              <p className="animate-fade-up delay-100 mt-2 max-w-md text-sm text-ink-foreground/70">
                Connect once. Get answers, not dashboards.
              </p>
            </div>
            <div className="animate-fade-up delay-200 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <a
                href="https://app.fiflowai.com/upgrade"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink-foreground px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90"
              >
                Start for free
                <ArrowRight02Icon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:hello@fiflowai.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-ink-foreground hover:bg-white/10"
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
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-foreground hover:bg-muted"
            >
              <Mail01Icon size={14} />
              <span>hello@fiflowai.com</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Product</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground">How it works</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#sources" className="text-muted-foreground hover:text-foreground">Integrations</a></li>
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

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-muted ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp01Icon size={16} />
    </button>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <WhatIs />
      <Problem />
      <HowItWorks />
      <Features />
      <DataSources />
      <Operators />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
