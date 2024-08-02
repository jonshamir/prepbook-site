import type { AppProps } from "next/app";
import Head from "next/head";

import "@fontsource-variable/lexend";
import "@fontsource/ia-writer-quattro";

import "../styles/main.css";
import posthog from "posthog-js";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
  posthog.init("phc_iJ3jYVyqpVHt2kR5DZB6gUwlPD08QkMvcpnXdtHNWtZ", {
    api_host: "https://app.posthog.com" || "https://us.i.posthog.com",
    person_profiles: "identified_only",
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    },
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
