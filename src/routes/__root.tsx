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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
