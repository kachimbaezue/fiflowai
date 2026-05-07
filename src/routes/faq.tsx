import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft02Icon, ArrowRight02Icon, Add01Icon, Remove01Icon } from "hugeicons-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — FiFlowAI" },
      { name: "description", content: "Answers to the most common questions about FiFlowAI — pricing, integrations, data, security." },
    ],
  }),
  component: FAQPage,
});

const LOGO = "https://app.fiflowai.com/fiflow-logo.png";
const CONTAINER = "mx-auto w-full max-w-4xl px-5 sm:px-6";

const FAQS = [
  { q: "What is FiFlowAI?", a: "FiFlowAI is an AI business analyst for e-commerce. It connects your store and ad data, explains what's happening, why, and what to do next." },
  { q: "Which platforms do you support?", a: "Shopify, Meta Ads, Google Analytics, and CSV / Excel uploads. More integrations are on the way." },
  { q: "How long does it take to set up?", a: "Most users are connected and getting their first insights in under 5 minutes." },
  { q: "Is my data secure?", a: "Yes. Data is encrypted in transit and at rest. We never sell or share your data, and you can disconnect any source at any time." },
  { q: "Can I cancel anytime?", a: "Yes — both Starter and Growth plans are month-to-month with no lock-in." },
  { q: "Do you offer a free trial?", a: "You can start on Starter for free and upgrade to Growth whenever you're ready." },
  { q: "What are Operators?", a: "Operators are upcoming AI agents that handle repetitive operations — customer support, order updates, follow-ups and ticketing — on your behalf." },
  { q: "How can I contact support?", a: "Email hello@fiflowai.com and we'll respond within one business day." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className={`${CONTAINER} flex h-14 items-center justify-between max-w-5xl`}>
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO} alt="FiFlowAI" className="h-6 w-6 rounded-md" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft02Icon size={14} /> Back home
          </Link>
        </div>
      </header>

      <section className={`${CONTAINER} py-14 sm:py-20`}>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            FAQ
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl">Questions, answered.</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
            Everything you need to know about FiFlowAI. Still curious?{" "}
            <a href="mailto:hello@fiflowai.com" className="text-foreground underline underline-offset-4">
              Email us
            </a>
            .
          </p>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={item.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full text-left"
              >
                <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                  <span className="text-sm font-semibold sm:text-base">{item.q}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                    {isOpen ? <Minus01Icon size={12} /> : <Add01Icon size={12} />}
                  </span>
                </div>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm text-muted-foreground sm:px-6 sm:pb-6">{item.a}</p>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground hover:opacity-90"
          >
            Back to home <ArrowRight02Icon size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
