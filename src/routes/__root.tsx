import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-md text-center">
        <div className="font-display text-[6rem] leading-none tracking-tight text-foreground sm:text-[8rem]">
          404
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-7 flex items-center justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground hover:opacity-90"
          >
            Back to home
          </Link>
          <a
            href="mailto:hello@fiflowai.com"
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FiFlowAI" },
      { name: "description", content: "FiflowAI helps e-commerce businesses make smarter decisions with AI-powered analytics, inventory forecasting, and actionable insights from your sales data." },
      { name: "keywords", content: "FiFlowAI, AI analytics, ecommerce intelligence, inventory forecasting, retail AI, Shopify analytics, sales insights" },
      { name: "author", content: "FiFlowAI" },
      { property: "og:site_name", content: "FiFlowAI" },
      { property: "og:title", content: "FiFlowAI" },
      { property: "og:description", content: "FiflowAI helps e-commerce businesses make smarter decisions with AI-powered analytics, inventory forecasting, and actionable insights from your sales data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FiFlowAI" },
      { name: "twitter:description", content: "FiflowAI helps e-commerce businesses make smarter decisions with AI-powered analytics, inventory forecasting, and actionable insights from your sales data." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0BtFq3SFcraEZjS8SN7Gvo7hrln2/social-images/social-1778168852106-Screenshot_2026-05-06_165332.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0BtFq3SFcraEZjS8SN7Gvo7hrln2/social-images/social-1778168852106-Screenshot_2026-05-06_165332.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
