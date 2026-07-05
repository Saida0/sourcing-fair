import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import { SmoothScrollProvider } from "../components/smooth-scroll-provider";
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

const SITE_NAME = "Sourcing Fair";
const DEFAULT_TITLE = "Sourcing Fair | RMG Trims & Accessories Manufacturer, Dhaka Bangladesh";
const DEFAULT_DESCRIPTION =
  "Sourcing Fair supplies buttons, labels, zippers, elastics, tapes, tags and packaging trims to garment exporters worldwide, from Uttara, Dhaka with 10+ years of experience.";

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
};

const appMeta = appMetaJson as AppMeta;

const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];

function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try {
    const u = new URL(value);
    const isAppHost = APP_HOST_ZONES.some(
      (zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`),
    );
    if (isAppHost) return u.pathname + u.search;
    return value;
  } catch {
    return value;
  }
}

function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url) ?? "/assets/og-cover.png";
  const favicon = toOwnAssetUrl(meta.favicon_url) ?? "/assets/favicon.svg";
  const ogVideo = toOwnAssetUrl(meta.og_video_url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "Sourcing Fair Bangladesh",
    url: "https://sourcingfairbd.com",
    logo: "https://sourcingfairbd.com/assets/favicon.svg",
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "House #19 (Ground & 1st Floor), Road #3/C, Sector #09, Uttara",
      addressLocality: "Dhaka",
      postalCode: "1230",
      addressCountry: "BD",
    },
    telephone: "+8801831333599",
    email: "info@sourcingfairbd.com",
    foundingDate: "2016",
    areaServed: ["China", "Hong Kong", "Sri Lanka", "India", "Indonesia", "Bangladesh"],
  };

  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: SITE_NAME },
      { name: "theme-color", content: "#1e4686" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      ...(ogImage
        ? [
            { property: "og:image", content: ogImage },
            { name: "twitter:image", content: ogImage },
          ]
        : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap",
      },
      ...(favicon ? [{ rel: "icon", type: "image/svg+xml", href: favicon }] : []),
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/favicon-192.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://sourcingfairbd.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  };
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-sf-paper px-6 text-center">
      <span className="font-display text-6xl font-semibold text-sf-navy">404</span>
      <h1 className="font-display text-2xl font-semibold text-sf-ink">Page not found</h1>
      <p className="max-w-sm text-sm text-sf-ink/60">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-2 rounded-full bg-sf-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-sf-navy-deep"
      >
        Back to home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-sf-paper px-6 text-center">
      <h1 className="font-display text-2xl font-semibold text-sf-ink">This page did not load</h1>
      <p className="max-w-sm text-sm text-sf-ink/60">
        Something went wrong on our end. You can try again or head back home.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-full bg-sf-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-sf-navy-deep"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-full border border-sf-navy/30 px-6 py-3 text-sm font-semibold text-sf-navy transition hover:bg-sf-navy/5"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-sf-ink antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) {
      return;
    }

    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((error) => {
        reportHiggsfieldError(
          error instanceof Error ? error : new Error("Failed to load design inspector"),
          {
            boundary: "higgsfield_design_inspector_import",
          },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}
